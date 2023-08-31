
export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkResponse(res) {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Error: ${res.status}`)
  }

  getInitialCards() {
   
    fetch( `${this._baseUrl}/cards` {
      headers: this._headers
    //   get
    })
      .then(this._checkResponse)
  }

  postCards() {
   
    fetch( `${this._baseUrl}/cards` {
      headers: this._headers
    //   post
    })
      .then(this._checkResponse)
  }
  getUserInfo() {
   
    fetch( `${this._baseUrl}/users/me` {
      headers: this._headers
    //   get
    })
      .then(this._checkResponse)
  }
  updateUserInfo() {
   
    fetch( `${this._baseUrl}/users/me` {
      headers: this._headers
    //   patch
    })
      .then(this._checkResponse)
  }
  updateAvatar() {
   
    fetch( `${this._baseUrl}/users/me/avatar` {
      headers: this._headers
    //   patch
    })
      .then(this._checkResponse)
  }
  deleteCards() {
   
    fetch( `${this._baseUrl}/cards/:cardId` {
      headers: this._headers
    //   delete
    })
      .then(this._checkResponse)
  }
  likeCards() {
   
    fetch( `${this._baseUrl}/cards/:cardId/likes` {
      headers: this._headers
    //   put
    })
      .then(this._checkResponse)
  }
  dislikeCards() {
   
    fetch( `${this._baseUrl}/cards/:cardId/likes` {
      headers: this._headers
    //   delete
    })
      .then(this._checkResponse)
  }
  // other methods

}
