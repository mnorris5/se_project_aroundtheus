export default class Section {
  constructor({ renderer, items }, selector) {
    this._renderer = renderer;
    this._element = document.querySelector(selector);
    this._items = items;
  }
  renderItems() {
    // use this._renderer to render the data into this._element
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    // take the item and render it into this._element

    this._element.prepend(item);
  }
}
