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

// Action to get product details
export async function productDetails({ commit }, id) {
  try {
    let response = await fetch(`https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let detailsData = response.json();
    commit('setProduct', detailsData);
    
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

// Action to remove from cart
export function removeCart({ commit, getters}, id) {
  let cart = [];
  if (id) {
    /* for (let index = 0; index < getters.cart.length; index++) {
      const element = getters.cart[index];
      if (element.id !== id) {
          cart.push(element)
      }
    } */
    getters.cart.forEach(e => {
      if (e.id !== id) cart.push(e)
    })
  }
  commit("setCart", cart)
}