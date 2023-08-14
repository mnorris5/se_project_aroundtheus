export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._element = document.querySelector(selector);
  }
  renderItems(data) {
    // use this._renderer to render the data into this._element
    data.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    // take the item and render it into this._element

    this._element.prepend(item);
  }
}
