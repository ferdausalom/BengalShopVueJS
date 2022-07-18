<template>
    <div class="items-center product-area justify-center w-full inline-block">
          <div class="h-auto relative">
            <div class="rounded-2xl bg-gray-200">
              <span class="rounded text-xs bg-gray-900 px-2 py-1 top-3 right-3 text-center absolute text-white">New</span>
              <img class="rounded-2xl" :src="product.image" alt="">
            </div>
            <div class="prodesc-area absolute bg-black opacity-40 w-full h-full top-0 right-0 rounded-2xl"></div>
            <div class="prodesc-area absolute top-0 right-0 w-full h-full rounded-2xl flex items-center justify-center flex-wrap">
              <div class="qty-btns flex items-center justify-center h-3/4 flex-wrap">
                <div class="h-36 mt-12 flex items-center justify-center flex-wrap">
                  <button @click.prevent="qtyMinus" class="bg-transparent qty_minus border rounded-full text-white flex items-center justify-center">
                    <span class="-mt-1">&#x208B;</span>
                  </button>
                  <span class="bg-white bs_qty mx-5 opacity-100 rounded-full text-green-600 flex items-center justify-center">{{qty}}</span>
                  <button @click.prevent="qtyPlus" class="bg-transparent qty_plus border rounded-full text-white flex items-center justify-center">
                    <span class="-mt-1">&#x208A;</span>
                  </button>
                  <button @click.prevent="addToCart(product)" class="sdgasg rounded-full bg-green-500 text-white px-8 py-2 text-base">Add to cart</button>
                </div>
              </div>
              <button @click.prevent="producDetails" class="bg-gray-200 text-gray-400 self-end font-light rounded-2xl py-2 text-center w-full">Details &#8594;</button>
            </div>
          </div>

          <div class="flex items-center text-center flex-wrap justify-center">
            <p v-for="(category, index) in product.categories" :key="index" class="text-gray-400 text-sm font-light mt-5">
              {{category.name}}
              <span v-if="index === product.categories.length - 1"></span>
              <span v-else>,&nbsp;</span>
            </p>
            <p class="w-full my-2">{{product.name}}</p>
            <p class="w-full bs-cl-or">{{product.saleprice}}.00 &nbsp;&nbsp; <strike class="text-gray-300">{{product.regularprice}}.00</strike></p>
          </div>
    </div>
</template>

<script>

export default {
    name: "SingleProduct",
    props: ["product"],
    data() {
      return {
        qty: 1
      }
    },
    methods:{
      producDetails() {
        this.$store.dispatch("product-details-modal/triggerModal", this.product);
      },
      qtyPlus() {
        this.qty++;
      },
      qtyMinus() {
        this.qty--;
        if (this.qty < 2) {
          this.qty = 1;
        }
      },
      addToCart(product) {
        this.$store.dispatch("cart/addToCart", {
          product: this.product,
          qty: this.qty
        });
      }
    }
}
</script>