<template>
  <div class="container py-20">
    <h3 class="text-2xl font-bold mb-8">Cart</h3>
    <h3 class="text-yellow-500 text-3xl" v-if="noItem">
        {{noItem}}
    </h3>
    <table v-else class="table-auto w-full">
      <thead>
      <tr>
        <th style="width: 30px" class="border px-4 py-2"></th>
        <th style="width: 50px" class="border px-4 py-2">Image</th>
        <th class="border px-4 py-2 text-left">Name</th>
        <th style="width: 150px" class="border px-4 py-2">Price</th>
        <th style="width: 150px" class="border px-4 py-2">Quantity</th>
        <th style="width: 150px" class="border px-4 py-2">Total</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, i) in products" :key="i">
        <td class="border px-4 py-2">
          <button @click.prevent="removeItem(product.id)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </td>
        <td class="border px-4 py-2"><img width="50" :src="product.image" alt=""></td>
        <td class="border px-4 py-2">{{product.name}}</td>
        <td class="border px-4 py-2 text-center">${{product.saleprice}}</td>
        <td class="border px-4 py-2 text-center">
          <div class="flex justify-center items-center">
            <button @click.prevent="carQtyChange(product, 'minus')" class="bg-gray-50 h-6 w-6 flex justify-center items-center rounded-full mr-3 font-bold">-</button>

            {{product.quantity}}

            <button @click.prevent="carQtyChange(product, 'plus')" class="bg-gray-50 h-6 w-6 flex justify-center items-center rounded-full ml-3 font-bold">+</button>
          </div>
        </td>
        <td class="border px-4 py-2 text-center">${{(product.quantity * product.saleprice)}}</td>
      </tr>

      <tr>
        <td class="border px-4 py-2 text-right" colspan="5">Total</td>
        <td class="border px-4 py-2 text-center">${{total}}</td>
      </tr>
      <tr>
        <td class="px-4 py-6 text-left" colspan="4">
          <nuxt-link to="/shop" class=" w-48">
            <button class="rounded-full bg-yellow-500 hover:bg-green-700 text-white px-8 py-2 text-base">Go to shop</button>
          </nuxt-link>
        </td>
        <td class="px-4 py-6 text-right" colspan="2">
          <nuxt-link :to="{ name: 'checkout', params: { products }}" class=" w-48">
            <button class="rounded-full bg-green-500 hover:bg-green-700 text-white px-8 py-2 text-base">Checkout</button>
          </nuxt-link>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
    name: "cart",
    data() {
        return {
            products: [],
            total: 0,
            noItem: ''
        }
    },
    methods: {
        carQtyChange(product, type) {
          this.$store.dispatch("cart/carQtyChange", {
              product: product,
              type: type
          });
          this.total = 0;
          this.cartItems();
        },
        cartItems() {
            const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
           if (cart.length > 0) {
               this.products = cart;
           } else {
               this.noItem = "Sorry, you don't have any item in your cart."
           }
           this.products.forEach(item => {
                this.total += (item.quantity * item.saleprice)
           })
        },
        removeItem(productId) {
            this.$store.dispatch("cart/removeItem", productId);
            this.total = 0;
            this.cartItems();
        }
    },
    mounted() {
        this.cartItems();
    }
}
</script>