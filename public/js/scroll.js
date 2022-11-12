const indicator = document.querySelector("#scroll-progress span");

/**
 * Modified slightly from
 *     https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
 */
window.onscroll = () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if (scrolled > 0) {
    document.body.setAttribute("data-scrolling", true);
  } else {
    document.body.removeAttribute("data-scrolling");
  }
  indicator.style.flexBasis = 100 - scrolled + "%";
};
