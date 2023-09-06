export default class UserInfo {
  constructor({ nameSelector, jobSelector, userAvatar }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._userAvatar = document.querySelector(userAvatar);
  }
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = about;
  }

  setAvatar(avatar) {
    this._userAvatar.src = avatar;
  }
}
