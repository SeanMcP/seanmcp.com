const { DateTime } = require('luxon')
const fs = require('fs')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(pluginSyntaxHighlight)
  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('article', 'layouts/article.njk')
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk')

  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('DD')
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('yyyy-LL-dd')
  })

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('head', (array, n) => {
    if (n < 0) {
      return array.slice(n)
    }

    return array.slice(0, n)
  })

  eleventyConfig.addFilter('tagIcon', tag => {
    let icon = ''
    switch (tag) {
      case 'a11y':
      case 'accessibility':
        icon += 'fab fa-accessible-icon'
        break
      case 'js':
      case 'javascript':
        icon += 'fab fa-js-square'
        break
      case 'python':
        icon += 'fab fa-python'
        break
      case 'react':
        icon += 'fab fa-react'
        break
      case 'ux':
      case 'user-experience':
        icon += 'fas fa-user'
        break
    }
    if (icon) {
      return icon + ' fa-fw'
    }
    return ''
  })

  eleventyConfig.addFilter('capitalize', string => {
    switch (string) {
      case 'js':
        return 'JS'
      case 'javascript':
        return 'JavaScript'
      case 'ux':
        return 'UX'
      default:
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
  })

  eleventyConfig.addCollection('tagList', require('./_11ty/getTagList'))

  eleventyConfig.addPassthroughCopy('img')
  eleventyConfig.addPassthroughCopy('css')

  /* Markdown Plugins */
  const markdownIt = require('markdown-it')
  const mdiOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer:  true,
    quotes: '“”‘’'
  }
  const mdiAnchorOptions = {
    permalink: true,
    permalinkClass: 'DirectLink',
    permalinkSymbol: '#'
  }

  const mdi = markdownIt(mdiOptions)
    .use(require('markdown-it-anchor'), mdiAnchorOptions)
    .use(require('markdown-it-footnote'))

  mdi.renderer.rules.footnote_block_open = () =>
    `<section class="Footnotes">
        <h5>Footnotes</h5>
        <ol>
    `

  eleventyConfig.setLibrary('md', mdi)

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html')

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      }
    }
  })

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: '/',

    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
      output: '_site'
    }
  }
}
