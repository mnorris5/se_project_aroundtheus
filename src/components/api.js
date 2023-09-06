export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addCards(inputValues) {
    console.log(inputValues);
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: inputValues.title,
        link: inputValues.url,
      }),
    }).then(this._checkResponse);
  }

  updateUserInfo(inputValues) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: inputValues.title,
        about: inputValues.description,
      }),
    }).then(this._checkResponse);
  }
  updateAvatar(inputValues) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar: inputValues.avatar,
      }),

      //   image
    }).then(this._checkResponse);
  }
  deleteCards() {
    return fetch(`${this._baseUrl}/cards/:cardId`, {
      headers: this._headers,
      method: "DELETE",
      body: JSON.stringify({
        name: inputValues.title,
        link: inputValues.url,
      }),
      //   link
    }).then(this._checkResponse);
  }
  likeCards() {
    return fetch(`${this._baseUrl}/cards/:cardId/likes`, {
      headers: this._headers,
      method: "put",
      //   likeButton?
    }).then(this._checkResponse);
  }
  dislikeCards() {
    return fetch(`${this._baseUrl}/cards/:cardId/likes`, {
      headers: this._headers,
      method: "delete",
      //   likeButton?
    }).then(this._checkResponse);
  }
  // other methods
}
