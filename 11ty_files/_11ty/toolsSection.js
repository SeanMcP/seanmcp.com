module.exports = function toolsSection({ label, tools }) {
  const slug = label.toLowerCase().replace(/\s/g, "-");
  return /* html */ `
<section class="tools-section" id="${slug}">
  <h2><a href="#${slug}">${label}</a></h2>
  <ul>
    ${tools
      .map(
        ({ description, emoji, title, url }) => /* html */ `
<li>
    <a href="${url}">
    <span>${emoji}</span>
    <div>
        <b>${title}</b>
        <span>${description}</span>
    </div>
    </a>
</li>
`
      )
      .join("")}
  </ul>
</section>`;
};
