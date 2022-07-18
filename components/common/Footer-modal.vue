<template>
    <div v-if="modal" class="fixed w-full h-full min-h-screen z-30 top-0 left-0 px-5">
        <div @click.prevent="modalClose" class="absolute bg-black opacity-60 h-full w-full top-0 left-0"></div>
        <div class="bs-modal-body bg-white rounded-2xl p-8 relative mx-auto z-30 my-10">
            <svg @click.prevent="modalClose" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute right-5 top-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div class="flex">
                <div class="w-1/2 px-8">
                    <img :src="product.image"/>
                </div>
                <div class="w-1/2 px-8">
                    <p class="text-sm mb-3"><span class="uppercase text-gray-400 pr-6">Status</span> <span class="bs-dark-green-color">In Stock</span></p>
                    <h3 class="text-2xl">{{product.name}}</h3>
                    <p class="text-xs text-gray-400 mb-4 mt-2"><b>7</b> items available.</p>
                    <p class="text-2xl font-bold">{{ product.saleprice }} <del class="font-normal text-gray-400">{{ product.regularprice }}</del></p>
                    <div class="flex my-6">
                        <div class="mr-8 flex">
                            <button @click.prevent="qtyMinus" class="bg-transparent qty_minus border rounded-full flex items-center justify-center">
                            <span class="-mt-2 text-2xl">&#x208B;</span>
                            </button>
                            <span class="bg-white bs_qty mx-5 opacity-100 border rounded-full text-green-600 flex items-center justify-center">{{qty}}</span>
                            <button @click.prevent="qtyPlus" class="bg-transparent qty_plus border rounded-full flex items-center justify-center">
                                <span class="-mt-2 text-2xl">&#x208A;</span>
                            </button>
                        </div>
                        <button @click.prevent="addToCart(product)" class="rounded-full bg-green-500 text-white px-8 py-2 text-base">Add to cart</button>
                    </div>
                    <div class="flex border-b border-gray-200 justify-between text-sm pb-3 mb-8">
                        <p @click.prevent="addToWishlist(product)" class="flex items-center cursor-pointer">
                            <img src="~/assets/images/heart.png" class="w-4 mr-3" alt="">
                            Add to Wishlist
                        </p>
                    </div>
                    <div class="text-xs leading-loose">
                        
                        <p>
                            <span class="uppercase text-gray-400 w-20 inline-block">category:</span>
                            <span v-for="(item, index) in product.categories" :key="index">
                            <nuxt-link class="bs-dark-green-color" :to="'category/' + item.name">{{item.name}}</nuxt-link>
                                <span class="comma" v-if="index == product.tags.length - 1"> </span>
                                <span class="comma" v-else>, </span>
                            </span>
                        </p>
                        <p>
                            <span class="uppercase text-gray-400 w-20 inline-block">tags:</span>
                            <span v-for="(item2, index) in product.tags" :key="index">
                                <nuxt-link class="bs-dark-green-color" :to="'category/' + item2.name">{{item2.name}}</nuxt-link>
                                <span class="comma" v-if="index == product.tags.length - 1"> </span>
                                <span class="comma" v-else>, </span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            modal: false,
            product: '',
            qty: 1
        }
    },
    methods:{
        modalClose() {
            this.modal = false,
            this.$store.dispatch("product-details-modal/resetModal");
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
        },
        addToWishlist() {
            this.$store.dispatch("wishlist/addToWishlist", this.product);
        }
    },
    mounted() {
        this.$store.watch(
            () => {
                return this.$store.getters['product-details-modal/getModal']
            },
            (val)=> {
                this.modal = val.modal;
                this.product = val.product;
            },
            {
                deep: true
            }
        );
    }
}
</script>

<style>

</style>