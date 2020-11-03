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
      .then(res =>  res.ok ? res.json() : Promise.reject(res.status))
			.catch(err => console.log(err))
  }

  getUserInfo(){
    return fetch(this._baseURL + "/users/me", {
			headers: this._headers,
		})
      .then(res =>  res.ok ? res.json() : Promise.reject(res.status))
			.catch(err => console.log(err))
  }
  

	// other methods for working with the API
}

export default Api;
