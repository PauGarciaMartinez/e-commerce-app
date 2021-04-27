import router from '../../router'

export async function login({ commit }) {
  try {
    let response = await fetch('https://randomuser.me/api/'),

    if (!response.ok) {
      throw new Error(`HHTP error! status: ${response.status}`);
    }

    let rawData = await response.json();
    let userData = {
      displayName: rawData.data.results[0].name.first,
      email: rawData.data.results[0].email,
      photoURL: rawData.data.results[0].picture.thumbnail,
      uid: rawData.data.results[0].login.uuid
    }

    commit('setUserData', userData)
    router.push('/')

  } catch(e) {
    console.log(e);
  }
}