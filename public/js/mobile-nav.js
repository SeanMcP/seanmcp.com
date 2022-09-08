(function() {
    var mobileNavEl = document.getElementById('mobile-nav')
    var closeButton = document.querySelector('[aria-label="close navigation"]')
    var openButton = document.querySelector('[aria-label="open navigation"]')

    var containerEl = mobileNavEl.querySelector('div')
    var anchors = containerEl.querySelectorAll('a')
    var firstAnchor = anchors[0]
    var lastAnchor = anchors[anchors.length - 1]

    function closeMobileNav({ resetFocus } = {}) {
        containerEl.hidden = true
        openButton.removeAttribute('hidden')
        window.removeEventListener('keydown', handleExit)
        window.removeEventListener('resize', handleResize)
        firstAnchor.removeEventListener('keydown', handleFirstAnchor)
        lastAnchor.removeEventListener('keydown', handleLastAnchor)
        
        if (resetFocus) {
            document.querySelector('header.header a').focus()
        } else {
            openButton.focus()
        }
    }

    function handleExit(e) {
        if (e.key === 'Escape') {
            e.preventDefault()
            closeMobileNav()
        }
    }

    function handleResize() {
        if (document.body.clientWidth > 500) closeMobileNav({ resetFocus: true })
    }

    function handleFirstAnchor(e) {
        if (e.key === 'Tab' && e.shiftKey) {
            e.preventDefault()
            lastAnchor.focus()
        }
    }

    function handleLastAnchor(e) {
        if (e.key === 'Tab' && !e.shiftKey) {
            e.preventDefault()
            firstAnchor.focus()
        }
    }

    
    openButton.addEventListener('click', () => {
        containerEl.removeAttribute('hidden')
        openButton.hidden = true
        firstAnchor.addEventListener('keydown', handleFirstAnchor)
        lastAnchor.addEventListener('keydown', handleLastAnchor)
        firstAnchor.focus()
        window.addEventListener('keydown', handleExit)
        window.addEventListener('resize', handleResize)
    })

    closeButton.addEventListener('click', closeMobileNav)
})()