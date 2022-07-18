<template>
  <div class="container py-20">
    <h3 class="text-2xl font-bold mb-8">Your order info:</h3>
    <div v-if="payData" class="flex flex-wrap p-8 border border-gray-200 rounded-lg">
        <p class="text-3xl text-green-600 w-full">Thank you</p>
        <p class="text-gray-600 italic text-xl mt-3 mb-14 w-full">Your order is on it's way!</p>
        <nuxt-link to="/shop" class=" w-48">
            <button class="rounded-full bg-yellow-500 hover:bg-green-700 text-white px-8 py-2 text-base">Go to shop</button>
        </nuxt-link>
    </div>
    <table v-else class="table-auto w-full">
      <thead>
      <tr>
        <th style="width: 50px" class="border px-4 py-2">Image</th>
        <th class="border px-4 py-2 text-left">Name</th>
        <th style="width: 150px" class="border px-4 py-2">Price</th>
        <th style="width: 150px" class="border px-4 py-2">Quantity</th>
        <th style="width: 150px" class="border px-4 py-2">Sub Total</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, i) in products" :key="i">
        <td class="border px-4 py-2"><img width="50" :src="product.image" alt=""></td>
        <td class="border px-4 py-2">{{product.name}}</td>
        <td class="border px-4 py-2 text-center">${{product.saleprice.toFixed(2)}}</td>
        <td class="border px-4 py-2 text-center">{{product.quantity}}</td>
        <td class="border px-4 py-2 text-center">${{(product.quantity * product.saleprice).toFixed(2)}}</td>
      </tr>
      <tr>
        <td class="border px-4 py-2 text-right text-gray-500" colspan="4">Shipping Flat rate</td>
        <td class="border px-4 py-2 text-center">$10.00</td>
      </tr>
      <tr>
        <td class="border px-4 py-2 text-right text-gray-500" colspan="4">Total</td>
        <td class="border px-4 py-2 text-center font-bold">${{(total+shipping).toFixed(2)}}</td>
      </tr>
      <tr>
        <td class="border px-4 py-2 text-right text-gray-500" colspan="4">Payment Method</td>
        <td class="border px-4 py-2 text-center text-gray-400">Cash on delivery</td>
      </tr>
      <tr>
        <td class="px-4 py-6 text-left" colspan="3">
        </td>
        <td class="px-4 py-6 text-right" colspan="3">
            <button @click.prevent="payNow" class="rounded-full bg-green-500 hover:bg-green-700 text-white px-8 py-2 text-base">Pay Now</button>
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
            noItem: '',
            shipping: 0,
            payData: false
        }
    },
    methods: {
        cartItems() {
            const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
           if (cart.length > 0) {
               this.products = cart;
               this.shipping = 10;
           } else {
               this.noItem = "Sorry, you don't have any item in your cart."
           }
           this.products.forEach(item => {
                this.total += (item.quantity * item.saleprice)
           })
        },
        payNow() {
            this.payData = true;
            this.$toast.success("Processing order!")
        }
    },
    mounted() {
        this.cartItems();
    }
}
</script>