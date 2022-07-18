export const state = () => ({
  wishlist: [],
});

export const mutations = {
  ADD_TO_WISHLIST(state, product) {
    let items = localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [];

    let newProduct = true;
    items = items.map((item) => {
      if (item.id === product.id) {
        console.log("already in wish");
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
        quantity: 1,
      });
    }

    localStorage.setItem("wishlist", JSON.stringify(items));
    this.$toast.success("Added to wishlist!");
  },
  WISHLIST_QTY_CHANGE(state, data) {
    const product = data.product;
    const price = data.price;
    const type = data.type;
    // state.cart = product;
    let items = localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
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

    localStorage.setItem("wishlist", JSON.stringify(items));
    this.$toast.success("Wishlist updated!");
  },
  REMOVE_FROM_WISHLIST(state, productID) {
    let items = localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [];

    items = items.filter((item) => {
      if (item.id !== productID) {
        return item;
      }
    });

    localStorage.setItem("wishlist", JSON.stringify(items));
    this.$toast.info("Removed from wishlist!");
  },
};

export const actions = {
  addToWishlist({ commit }, product) {
    commit("ADD_TO_WISHLIST", product);
  },
  wishlistQtyChange({ commit }, product) {
    commit("WISHLIST_QTY_CHANGE", product);
  },
  removeWishlistItem({ commit }, productID) {
    commit("REMOVE_FROM_WISHLIST", productID);
  },
};

export const getters = {};
