export const state = () => ({
  cart: [],
});

export const mutations = {
  ADD_TO_CART(state, data) {
    const product = data.product;
    const qty = data.qty;
    state.cart = product;
    // console.log(product.price);
    let items = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    let newProduct = true;
    items = items.map((item) => {
      if (item.id === product.id) {
        item.quantity += qty;
        newProduct = false;
      }
      return item;
    });

    if (newProduct) {
      items.push({
        id: product.id,
        image: product.image,
        name: product.name,
        saleprice: product.saleprice,
        quantity: qty,
      });
    }

    localStorage.setItem("cart", JSON.stringify(items));
    this.$toast.success("Added to cart!");
  },
  ADD_TO_CART_QTY_CHANGE(state, data) {
    const product = data.product;
    const type = data.type;
    state.cart = product;

    let items = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    items = items.map((item) => {
      if (item.id === product.id) {
        if (type === "minus") {
          item.quantity--;
          if (item.quantity < 2) {
            item.quantity = 1;
          }
        } else {
          item.quantity++;
        }
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(items));
    this.$toast.success("Quantity updated!");
  },
  REMOVE_ITEM(state, productId) {
    let items = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    items = items.filter((item) => {
      if (item.id !== productId) {
        return item;
      }
    });

    localStorage.setItem("cart", JSON.stringify(items));
    this.$toast.info("Removed from cart!");
  },
};

export const actions = {
  addToCart({ commit }, product) {
    commit("ADD_TO_CART", product);
  },
  carQtyChange({ commit }, product) {
    commit("ADD_TO_CART_QTY_CHANGE", product);
  },
  removeItem({ commit }, productId) {
    commit("REMOVE_ITEM", productId);
  },
};

export const getters = {
  getCart(state) {
    return state.cart;
  },
};
