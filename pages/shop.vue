<template>
    <div class="container py-10">
        <div class="lg:flex">
            <div class="w-full lg:w-1/4">
                <sidebar />
            </div>
            <div class="w-full lg:w-3/4 pl-2 lg:pl-10">
                <div class="w-full shop-hero p-2 lg:p-10 bg-gray-200 flex-wrap flex h-60 border rounded-xl">
                    <p class="text-orange-400 w-full">Buy 1 Get 1</p>
                    <h3 class="text-green-500 w-full font-bold text-3xl md:text-4xl">Up to 30% Discount on Selected Items</h3>
                </div>
                <div class="lg:flex pt-10">
                    <div class="w-full lg:w-1/2 text-4xl text-gray-700 font-bold">
                        Our Collection
                    </div>
                    <div id="#app" class="w-full lg:w-1/2 text-right">
                        <span class="text-gray-400 mr-5 text-sm">
                            <strong>{{productcount}}</strong> Products Found
                        </span>
                        <select @change="productSort($event)" class="text-gray-500 cursor-pointer outline-none border rounded sorting">
                            <option disabled selected value="">Default Sorting</option>
                            <option value="lowToHigh">Low to High(Price)</option>
                            <option value="highToLow">High to Low(Price)</option>
                        </select>
                    </div>
                </div>
                <div class="lg:flex flex-wrap -mx-4 pt-5">
                    <div v-for="(singleproduct, index) in DemoProducts" :key="index" class="w-full lg:w-1/4 px-4 mb-10">
                        <SingleProduct :product="singleproduct"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from "../components/sidebar.vue"
import DemoProducts from "../assets/demo-prods.json";

export default {
    name: "shop",
    components: { sidebar },
    data() {
        return {
            DemoProducts: [],
            productcount: 0,
            selected: ''
        }
    },
    methods: {
        productSort(event) {
            let sortDirection = event.target.value;
            let salePriceArr = [];
            let tempProduct = [];

            DemoProducts.forEach(item => {
                salePriceArr.indexOf(item.saleprice) === -1 ? salePriceArr.push(item.saleprice) : ""
            });
            salePriceArr.sort(function(a, b){return a-b});
            salePriceArr.forEach(sortedSalePrice => {
                DemoProducts.map(item => {
                    if(item.saleprice === sortedSalePrice) {
                        return tempProduct.push(item)
                    }
                });
            });

            if(sortDirection === 'lowToHigh') {
                this.DemoProducts = tempProduct;
            } else if(sortDirection === 'highToLow') {
                this.DemoProducts = tempProduct.reverse();
            } else {
                //nothing will do
            }
        }
    },
    mounted() {
        this.DemoProducts = DemoProducts;        
        this.productcount = DemoProducts.length;        
    },
}
</script>