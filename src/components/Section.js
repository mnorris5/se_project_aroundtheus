// export default class Section {
//   constructor({ renderer, items }, selector) {
//     this._items = items;
//     this._renderer = renderer;
//     this._element = document.querySelector(selector);
//   }
//   renderItems(data) {
//     console.log(data);
//     // use this._renderer to render the data into this._element
//     this._items.forEach((item) => {
//       this._renderer(item);
//     });
//   }

//   addItem(item) {
//     // take the item and render it into this._element

//     // this._items.append(this._element);
//     this._items.append((item) => {
//       this._element(item);
//     });
//   }
// }

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

    // this._items.append(this._element);
    this._element.prepend(item);
  }
}
