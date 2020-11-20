
class UserInfo {
	constructor(nameSelector, jobSelector, avatarSelector) {
		this._name = nameSelector;
		this._job = jobSelector;
		this._avatar = avatarSelector;
	}

	getUserInfo() {
		/*
	  this._profileInfo =  { name: this._name.textContent, job: this._job.textContent };
	  return this._profileInfo;
	  */
		return {
			name: this._name.textContent,
			job: this._job.textContent,
		};
	}

	setUserInfo(name, job) {
		this._name.textContent = name;
		this._job.textContent = job;
	}

	// getter & setter in JS (get / set)
}
export default UserInfo;
