<template>
    <div>
        <div class="bg-green-100 "> 
            <div class="container p-4 sm:py-2 sm:flex items-center justify-between">
                <p class="text-gray-700 mb-2 sm:mb-0 font-light text-sm">Our shop is best.</p>
                <p class="text-gray-700 font-light text-sm">We sale fresh and clen veg.</p>
            </div>
        </div>
        <div class="container py-8 px-2 xl:px-0 sm:flex items-center justify-between">
            <nuxt-link to="/" exact class="font-medium sm:w-1/3 flex items-center text-xl">
                <img class="mr-3" src="~/assets/images/logo.png" alt=""> Bengal shop
            </nuxt-link>
            <div class="my-8 sm:my-0 sm:w-2/3">
                <div class="border relative border-gray-200 rounded-full p-1 flex items-center">
                    <div class="min-w-max ml-2">
                        <img src="~/assets/images/search.png" alt="">
                    </div>
                    <input class="w-full px-4 py-2 focus:outline-none" v-model="searchQuery" type="text" placeholder="Search here.......">
                    <button class="bs-btn-bg-dg text-white rounded-full text-sm px-3 sm:px-6 py-2" type="submit">Search</button>
                    
                    <div v-if="searchQuery" v-click-outside="searchClose" class="search-div p-3 rounded-xl absolute top-12 right-0 left-0 z-10 bg-gray-100 shadow-lg shadow-indigo-500/40 max-h-96 overflow-y-auto">
                        <table class="table-auto w-full">
                            <tbody>
                                <tr v-for="item in resultQuery" :key="item.id" class="border-b search-last">
                                    <nuxt-link :to="`${item.name.replaceAll(' ', '-').toLowerCase()}`" style="display: contents;vertical-align: middle;">
                                        <img width="50" :src="item.image" alt="" class="py-3">
                                        <td><a v-bind:href="item.uri" target="_blank">{{item.name}}</a></td>
                                        <td>${{item.saleprice.toFixed(2)}}</td>
                                    </nuxt-link>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
            <div class="sm:w-1/3 flex items-center justify-end">
                <nuxt-link to="/wishlist">
                    <span class="w-14 h-14 hover:bg-gray-200 flex items-center justify-center rounded-full">
                        <img src="~/assets/images/heart.png" alt="">
                    </span>
                </nuxt-link>
                <nuxt-link to="/cart">
                    <span class="w-14 h-14 relative hover:bg-gray-200 flex items-center justify-center rounded-full">
                    <img src="~/assets/images/bag.png" alt="">
                    <span class="absolute p-3 bs-bg-cl-or text-white text-xs top-0 right-0 w-4 h-4 flex items-center justify-center rounded-full">
                        {{totalItem}}
                    </span>
                    </span>
                </nuxt-link>
                <nuxt-link to="/account" class="flex items-center">
                    <span class="w-14 h-14 hover:bg-gray-200 flex items-center justify-center rounded-full">
                    <img src="~/assets/images/user.png" alt="">
                    </span>
                </nuxt-link>
            </div>
        </div>
        <div class="container lg:flex lg:flex-wrap xl:flex-nowrap items-center justify-between">
            <div v-click-outside="menuClose" class="pl-2 xl:pl-0 lg:w-1/3 lg:flex relative">
                <div @click="categoryMenuClick" class="flex cursor-pointer h-12 bg-green-500 items-center rounded-full px-5 w-full lg:w-64 py-2 text-white ">
                    <img class="min-w-max relative z-20" src="~/assets/images/menu-right.png" alt="">
                    <span class="text-small w-full text-center relative z-20">All Categories</span>
                    <img class="min-w-max relative z-20" src="~/assets/images/chevron-down.png" alt="">
                </div>
                <transition name="fade">
                <div v-if="categories" class="absolute bg-green-500 w-full lg:w-64 top-6 text-white z-10 rounded-b-lg">
                    <ul class="mt-5 pb-3">
                    <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/construction">Fruits</nuxt-link></li>
                    <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/construction">Vegetables</nuxt-link></li>
                    <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/construction">Fish</nuxt-link></li>
                    <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/construction">Meat</nuxt-link></li>
                    <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/construction">Ice Cream</nuxt-link></li>
                    <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/construction">Groceries</nuxt-link></li>
                    </ul>
                </div>
                </transition>
            </div>
            <div class="lg:hidden mt-8 -mb-2 w-full nav-toggle items-center">
                <button @click="navToggle" class="outline-none w-full mobile-menu-button">
                    <svg
                        class="w-6 h-6 text-gray-500 inline-block"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg> <span class="inline-block ml-2">Menu</span>
                </button>
            </div>
            <div v-if="navMenu" class="my-6 lg:my-0 lg:w-2/3">
                <ul class="lg:flex items-start links text-center">
                    <li><nuxt-link class="p-2 lg:p-6 block" to="/">Home</nuxt-link></li>
                    <li><nuxt-link class="p-2 lg:p-6 block" to="/shop">Shop</nuxt-link></li>
                    <li><nuxt-link class="p-2 lg:p-6 block" to="/about">About</nuxt-link></li>
                    <li><nuxt-link class="p-2 lg:p-6 block" to="/account">My Account</nuxt-link></li>
                    <li><nuxt-link class="p-2 lg:p-6 block" to="/contact">Contact</nuxt-link></li>
                </ul>
            </div>
            <div v-else class="hidden lg:block my-6 lg:my-0 lg:w-2/3">
                <ul class="lg:flex items-start links text-center">
                    <li><nuxt-link class="p-2 lg:p-6 block" to="/">Home</nuxt-link></li>
                    <li><nuxt-link class="p-2 lg:p-6 block" to="/shop">Shop</nuxt-link></li>
                    <li><nuxt-link class="p-2 lg:p-6 block" to="/about">About</nuxt-link></li>
                    <li><nuxt-link class="p-2 lg:p-6 block" to="/account">My Account</nuxt-link></li>
                    <li><nuxt-link class="p-2 lg:p-6 block" to="/contact">Contact</nuxt-link></li>
                </ul>
            </div>
            <div class="w-full mt-8 lg:mt-0 xl:w-1/3 lg:pr-4 lg:flex items-center lg:justify-end">
                <nuxt-link class="block text-small bs-cl-or text-center lg:flex items-center" to="/construction">
                    <img src="~/assets/images/percent.png" class="mr-3 inline-block" alt="">Special Offers!
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>

import DemoProducts from "../../assets/demo-prods.json";

export default {
    name: "Header",
    data() {
        return {
            categories: false,
            navMenu: false,
            totalItem: 0,
            searchQuery: null,
            DemoProducts: DemoProducts
        }
    },
    methods:{
        navToggle() {
            this.navMenu = !this.navMenu
        },
        categoryMenuClick() {
            this.categories = !this.categories
        },
        menuClose() {
            this.categories = false
        },
        searchClose() {
            this.searchQuery = ''
        },
        cartWatcher() {
           const getCart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
           if (getCart.length > 0) {
               this.totalItem = getCart.length;
           }
        },
    },
    mounted() {
        this.cartWatcher();
        this.$store.watch(
            () => {
                return this.$store.getters["cart/getCart"]
            },
            () => {
                this.cartWatcher()
            }
        );
    },
    computed: {
        resultQuery(){
            if(this.searchQuery){
                return this.DemoProducts.filter((item)=>{
                    return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                })
            }
            
        }
    }
}
</script>