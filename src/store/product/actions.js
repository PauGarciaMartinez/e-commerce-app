// Action to get products list
export async function getProducts({ commit }) {
  try {
    let response = await fetch("https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products");

    if (!response.ok) {
      throw new Error(`HHTP error! status: ${response.status}`);
    }

    let productsData = response.json();
    commit('setProducts', productsData);

  } catch(e) {
    console.log(e);
  }
}

// Action to add to cart 
export function addCart({ commit, getters }, payload) {
  let cart = getters.cart;
  cart.push(payload);
  commit('setCart', cart);
}