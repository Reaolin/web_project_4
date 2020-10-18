//Form Input Values
const formName = document.querySelector(
	".form__name-input"
); /* creates a constant variable for the .form__name-input class */
const formJob = document.querySelector(
	".form__job-input"
); /* creates a constant variable for the .form__job-input class */
const profileName = document.querySelector(
	".profile-info__title"
); /* creates a constant variable for the .profile-info__title class */
const profileJob = document.querySelector(
	".profile-info__sub-title"
); /* creates a constant variable for the .profile-info__sub-title class */




class UserInfo {
	constructor(nameSelector, jobSelector) {
	  this._name = document.querySelector(nameSelector);
	  this._job = document.querySelector(jobSelector);
	}
	getUserInfo() {
	  this._profileInfo =  { name: this._name.textContent, job: this._job.textContent };
	  return this._profileInfo;
	}
   
	setUserInfo({ userName, userJob }) {
	  this._name.textContent = userName;
	  this._job.textContent = userJob;
	}
  }
  export default UserInfo;