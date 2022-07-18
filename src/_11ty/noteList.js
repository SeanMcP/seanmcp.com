const note = require("./note");

module.exports = function noteList(props) {
  return /* html */ `
<section class="note-list">
  ${props.notes.map((item) =>
    note({
      content: item.templateContent,
      date: item.date,
      edited: item.data.edited,
      url: item.url,
    })
  )}
</section>
    `;
};
