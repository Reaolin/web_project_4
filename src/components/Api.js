class Api {
	constructor({ baseURL, headers }) {
		this._baseURL = baseURL;
		this._headers = headers;
		// constructor body
	}

	getInitialCards() {
		return fetch(this._baseURL + "/cards", {
			headers: this._headers,
		})
			.then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
			.catch((err) => console.log(err));
	}

	getUserInfo() {
		return fetch(this._baseURL + "/users/me", {
			headers: this._headers,
		})
			.then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
			.catch((err) => console.log(err));
  }

	setUserInfo({ name, about }) {
		return fetch(this._baseURL + "/users/me", {
			headers: this._headers,
			method: "PATCH",
			body: JSON.stringify({
				name,
				about,
			}),
		})
			.then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
			.catch((err) => console.log(err));
	}

	addCard({ name, link }) {
		return fetch(this._baseURL + "/cards", {
			headers: this._headers,
			method: "POST",
			body: JSON.stringify({
				name,
				link,
			}),
		})
			.then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
			.catch((err) => console.log(err));
	}

	// DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId
	removeCard(cardId) {
		return fetch(this._baseURL + "/cards/" + cardId, {
			headers: this._headers,
			method: "DELETE",
		})
			.then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
			.catch((err) => console.log(err));
	}

	//PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
	addLikes(cardId) {
		return fetch(this._baseURL + "/cards/likes/" + cardId, {
			headers: this._headers,
			method: "PUT",
		})
			.then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
			.catch((err) => console.log(err));
	}
	//DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
	removeLikes(cardId) {
		return fetch(this._baseURL + "/cards/likes/" + cardId, {
			headers: this._headers,
			method: "DELETE",
		})
			.then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
			.catch((err) => console.log(err));
	}
	//PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
	setAvatar({ avatar }) {
		return fetch(this._baseURL + "/users/me/avatar", {
			headers: this._headers,
			method: "PATCH",
			body: JSON.stringify({
				avatar
			}),
		})
			.then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
			.catch((err) => console.log(err));
	}
}

export default Api;
