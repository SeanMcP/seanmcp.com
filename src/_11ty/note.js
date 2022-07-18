const { DateTime } = require("luxon");

module.exports = function note({ content, date, edited, url }) {
  return /* html */ `
<article class="note">
  <header class="note__header">
    <b>Sean McPherson</b>
    <a href="${url}">
      <time datetime="${date}">${DateTime.fromJSDate(date, {
    zone: "America/New_York",
  }).toFormat("t · DD")}</time>
    </a>${edited ? "<small>(Edited)</small>" : ""}
  </header>
  <div class="note__body --clear-child-margins">${content}</div>
</article>`;
};
