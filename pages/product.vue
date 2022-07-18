<template>
    <div class="container py-10">
        <div class="flex">
            <div class="w-1/4">
            <sidebar />
            </div>
            <div class="w-3/4 pl-10">
                <div class="flex bg-gray-100 rounded-xl pt-8 pb-8">
                    <div class="w-1/2 px-8">
                        <img :src="item.image" class="rounded-xl">
                    </div>
                    <div class="w-1/2 px-8">
                        <p class="text-sm mb-3"><span class="uppercase text-gray-400 pr-6">Status</span> <span class="bs-dark-green-color">In Stock</span></p>
                        <h3 class="text-2xl">{{item.name}}</h3>
                        <p class="text-xs text-gray-400 mb-4 mt-2"><b>7</b> items available.</p>
                        <p class="text-2xl font-bold">${{ item.saleprice }} <del class="font-normal text-gray-400">${{ item.regularprice }}</del></p>
                        <div class="flex my-6">
                            <div class="mr-8 flex">
                                <button @click.prevent="qtyMinus" class="bg-transparent qty_minus border-gray-300 border rounded-full flex items-center justify-center">
                                <span class="-mt-2 text-2xl">&#x208B;</span>
                                </button>
                                <span class="bg-white bs_qty mx-5 opacity-100 border rounded-full text-green-600 flex items-center justify-center">{{qty}}</span>
                                <button @click.prevent="qtyPlus" class="bg-transparent qty_plus border-gray-300 border rounded-full flex items-center justify-center">
                                    <span class="-mt-2 text-2xl">&#x208A;</span>
                                </button>
                            </div>
                            <button @click.prevent="addToCart(item)" class="rounded-full bg-green-500 text-white px-8 py-2 text-base">Add to cart</button>
                        </div>
                        <div class="flex border-b border-gray-200 justify-between text-sm pb-3 mb-8">
                            <p @click.prevent="addToWishlist(item)" class="flex items-center cursor-pointer">
                                <img src="~/assets/images/heart.png" class="w-4 mr-3" alt="">
                                Add to Wishlist
                            </p>
                        </div>
                        <div class="text-xs leading-loose">
                            <p>
                                <span class="uppercase text-gray-400 w-20 inline-block">SKU:</span>
                                <span>NEWKSU</span>
                            </p>
                            <p>
                                <span class="uppercase text-gray-400 w-20 inline-block">categories:</span>
                                <span v-for="(cat, index) in item.categories" :key="index">
                                <nuxt-link class="bs-dark-green-color" :to="'category/' + cat.name">{{cat.name}}</nuxt-link>
                                    <span class="comma" v-if="index == item.categories.length - 1"> </span>
                                    <span class="comma" v-else>, </span>
                                </span>
                            </p>
                            <p>
                                <span class="uppercase text-gray-400 w-20 inline-block">tags:</span>
                                <span v-for="(tag, index) in item.tags" :key="index">
                                    <nuxt-link class="bs-dark-green-color" :to="'category/' + tag.name">{{tag.name}}</nuxt-link>
                                    <span class="comma" v-if="index == item.tags.length - 1"></span>
                                    <span class="comma" v-else>, </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from "../components/sidebar.vue"
export default {
    name: "category",
    components: { sidebar },
    data(){
        return {
            item: '',
            qty: 1
        }
    },
    methods: {
        qtyMinus() {
            this.qty--;
            if (this.qty < 2) {
            this.qty = 1;
            }
        },
        qtyPlus() {
            this.qty++;
        },
        addToCart(item) {
            this.$store.dispatch("cart/addToCart", {
                product: item,
                qty: this.qty
            });
        },
        addToWishlist(item) {
            this.$store.dispatch("wishlist/addToWishlist", item);
        }
    },
    mounted() {
        this.item = this.$route.params.item;
    }
}
</script>