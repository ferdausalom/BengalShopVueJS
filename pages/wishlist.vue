<template>
  <div class="container py-20">
    <h3 class="text-2xl font-bold mb-8">Wishlist</h3>
    <h3 class="text-yellow-500 text-3xl" v-if="noItem">
        {{noItem}}
    </h3>
    <table v-else class="table-auto w-full">
      <thead>
      <tr>
        <th style="width: 30px" class="border px-4 py-2"></th>
        <th style="width: 100px" class="border px-4 py-2">Image</th>
        <th class="border px-4 py-2 text-left">Name</th>
        <th style="width: 150px" class="border px-4 py-2">Price</th>
        <th style="width: 150px" class="border px-4 py-2">Quantity</th>
        <th style="width: 100px" class="border px-4 py-2">Total</th>
        <th style="width: 200px" class="px-4 py-2"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, i) in products" :key="i">
        <td class="border px-4 py-2">
          <button @click.prevent="removeWishlistItem(product.id)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </td>
        <td class="border px-4 py-2"><img width="100" :src="product.image" alt=""></td>
        <td class="border px-4 py-2">{{product.name}}</td>
        <td class="border px-4 py-2 text-center">${{product.saleprice.toFixed(2)}}</td>
        <td class="border px-4 py-2 text-center">
          <div class="flex justify-center items-center">
            <button @click.prevent="wishlistQtyChange(product, 'minus')" class="bg-gray-50 h-6 w-6 flex justify-center items-center rounded-full mr-3 font-bold">-</button>

            {{product.quantity}}

            <button @click.prevent="wishlistQtyChange(product, 'plus')" class="bg-gray-50 h-6 w-6 flex justify-center items-center rounded-full ml-3 font-bold">+</button>
          </div>
        </td>
        <td class="border px-4 py-2 text-center">${{(product.saleprice * product.quantity).toFixed(2)}}</td>
        <td class="border px-4 py-2 text-center">
            <button @click.prevent="addToCart(product)" class="sdgasg rounded-full bg-green-500 text-white px-8 py-2 text-base">Add to cart</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: "wishlist",
    data() {
        return {
            products: [],
            noItem: ''
        }
    },
    methods: {
        wishlistQtyChange(product, type) {
          this.$store.dispatch("wishlist/wishlistQtyChange", {
              product: product,
              type: type
          });
          this.wishlistItems();
        },
        wishlistItems() {
            const wishlist = localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [];
           if (wishlist.length > 0) {
               this.products = wishlist;
           } else {
               this.noItem = "Sorry, you don't have any item in your wishlist."
           }
        },
        addToCart(product) {
          this.$store.dispatch("cart/addToCart", {
            product: product,
            qty: product.quantity
          });
        },
        removeWishlistItem(productId) {
            this.$store.dispatch("wishlist/removeWishlistItem", productId);
            this.wishlistItems();
        }
    },
    mounted() {
        this.wishlistItems();
    }
}
</script>