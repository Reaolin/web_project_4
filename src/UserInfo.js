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
	constructor(name, job) {
		this._name = name.value;
		this._job = job.value;
		this._formName = formName;
		this._formJob = formJob;
		this._profileName = profileName;
		this._profileJob = profileJob;
	}
	getUserInfo() {
		this._formName.value = this._profileName.textContent;
		this._formJob.value = this._profileJob.textContent;
	}

	setUserInfo() {
		this._profileName.textContent = this._formName.value;
		this._profileJob.textContent = this._formJob.value;
	}
}

export default UserInfo;
