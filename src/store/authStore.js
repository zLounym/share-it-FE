import axios from 'axios'

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const createAuthStore = () => ({
  isAuthenticated: false,
  async logIn({ username, password }) {
    // try {
    //   const options = {
    //     url: `${apiUrl}/auth/login`,
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json;charset=UTF-8',
    //       User: username,
    //       Pass: password,
    //     },
    //   }
    //   const res = await axios(options)
    //   if (res.status === 200) {
    //     this.isAuthenticated = true
    //   } else {
    //     this.logOut()
    //   }
    // } catch (error) {
    //   console.error(error)
    // }
    await timeout(100);
    this.isAuthenticated = true;
    return this.isAuthenticated
  },
  logOut() {
    this.isAuthenticated = false
  },
  async signUp(formData) {
    await timeout(100);
    this.isAuthenticated = true;
    return this.isAuthenticated
  }
})
