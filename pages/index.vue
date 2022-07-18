<template>
  <div>
    <div
      class="pt-8 pl-2 pr-2 lg:pl-8 lg:pr-8 rounded-md mt-10 mr-4 ml-4 mb-4 bg-green-50"
    >
      <div class="container hero-slide">
        <vue-slick-carousel v-bind="slideOptions">
          <div class="bs-flex-im items-center px-2 lg:px-8 w-full">
            <div class="w-full lg:w-1/2 mr-5">
              <p class="text-green-600 text-2xl">Save up 50% off</p>
              <h3
                class="my-5 text-xl md:text-2xl lg:text-5xl font-bold text-gray-700 capitalize leading-8 bs-leading-16"
              >
                Bengal Vegetable farm Organic 100%
              </h3>
              <p class="mb-9 font-light text-lg leading-6 md:leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula faucibus massa est elit maecenas.
              </p>
              <nuxt-link to="/shop">
                <button
                  class="rounded-full bg-green-500 text-white px-8 py-2 text-base"
                >
                  Shop Now
                </button>
              </nuxt-link>
            </div>
            <div class="w-full mt-5 lg:mt-0 lg:w-1/2 flex justify-end mr-6">
              <img width="500px" src="~/assets/images/slideimg.png" alt="" />
            </div>
          </div>
          <div class="bs-flex-im items-center px-2 lg:px-8 w-full">
            <div class="w-full lg:w-1/2 mr-5">
              <p class="text-green-600 text-2xl">Save up 40% off</p>
              <h3
                class="my-5 text-xl md:text-2xl lg:text-5xl font-bold text-gray-700 capitalize leading-8 bs-leading-16"
              >
                Spice Snaks Organic 100%
              </h3>
              <p class="mb-9 font-light text-lg leading-6 md:leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula faucibus massa est elit maecenas.
              </p>
              <nuxt-link to="/shop">
                <button
                  class="rounded-full bg-green-500 text-white px-8 py-2 text-base"
                >
                  Shop Now
                </button>
              </nuxt-link>
            </div>
            <div class="w-full mt-5 lg:mt-0 lg:w-1/2 flex justify-end mr-10">
              <img width="428px" src="~/assets/images/snaks.png" alt="" />
            </div>
          </div>
          <div class="bs-flex-im items-center px-2 lg:px-8 w-full">
            <div class="w-full lg:w-1/2 mr-5">
              <p class="text-green-600 text-2xl">Save up 30% off</p>
              <h3
                class="my-5 text-xl md:text-2xl lg:text-5xl font-bold text-gray-700 capitalize leading-8 bs-leading-16"
              >
                Bengal Vegetable farm Organic 100%
              </h3>
              <p class="mb-9 font-light text-lg leading-6 md:leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula faucibus massa est elit maecenas.
              </p>
              <nuxt-link to="/shop">
                <button
                  class="rounded-full bg-green-500 text-white px-8 py-2 text-base"
                >
                  Shop Now
                </button>
              </nuxt-link>
            </div>
            <div class="w-full mt-5 lg:mt-0 lg:w-1/2 flex justify-end mr-6">
              <img width="500px" src="~/assets/images/slideimg.png" alt="" />
            </div>
          </div>
        </vue-slick-carousel>
      </div>
    </div>
    <div class="container px-2 sm:px-0">
      <h3 class="text-2xl mt-16 mb-6 lg:pl-4 xl:pl-0">Shop Categories</h3>
      <carousal-border></carousal-border>
      <vue-slick-carousel
        class="category-carousel mb-14 text-center"
        v-bind="catCarouselSettings"
      >
        <div class="bg-gray-100 p-4 ml-2 mr-2">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/pack.png" alt="" />
          </div>
          <h4 class="text-xl">Groceries</h4>
        </div>
        <div class="bg-gray-100 p-4">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/fish.png" alt="" />
          </div>
          <h4 class="text-xl">Fish</h4>
        </div>
        <div class="bg-gray-100 p-4">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/beef.png" alt="" />
          </div>
          <h4 class="text-xl">Meat</h4>
        </div>
        <div class="bg-gray-100 p-4">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/tomato.png" alt="" />
          </div>
          <h4 class="text-xl">Vagetables</h4>
        </div>
        <div class="bg-gray-100 p-4">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/name1.png" alt="" />
          </div>
          <h4 class="text-xl">Fruits</h4>
        </div>
        <div class="bg-gray-100 p-4">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/icecreem.png" alt="" />
          </div>
          <h4 class="text-xl">Ice Cream</h4>
        </div>
        <div class="bg-gray-100 p-4">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/fish.png" alt="" />
          </div>
          <h4 class="text-xl">Fish</h4>
        </div>
        <div class="bg-gray-100 p-4">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/tomato.png" alt="" />
          </div>
          <h4 class="text-xl">Vagetables</h4>
        </div>

        <template #prevArrow="arrowOption">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="adg h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </template>
        <template #nextArrow="arrowOption">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="adg h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </template>
      </vue-slick-carousel>

      <div class="sm:flex xl:-mx-6 mb-14 pt-2 sm:pt-10">
        <div class="w-full sm:w-1/2 px-2 lg:px-6 mb-4 sm:mb-0">
          <div
            class="promo-bg-1 bg-cover bg-gray-500 bg-center p-2 sm:p-12 rounded"
          >
            <div class="w-2/3 py-8">
              <p class="bs-cl-or text-2xl mb-6">Buy 1 Get 1</p>
              <h3 class="font-bold text-2xl sm:text-4xl mb-8">
                Fresh Fruits Collection
              </h3>
              <nuxt-link
                to="/shop"
                class="bg-white px-8 rounded-full py-2 bs-cl-or"
                >Order Now</nuxt-link
              >
            </div>
          </div>
        </div>

        <div class="w-full sm:w-1/2 px-2 lg:px-6">
          <div
            class="promo-bg-2 bg-cover bg-gray-500 bg-center p-2 sm:p-12 rounded"
          >
            <div class="w-2/3 py-8">
              <p class="bs-cl-or text-2xl mb-6">Buy 1 Get 1</p>
              <h3 class="font-bold text-2xl sm:text-4xl mb-8">
                Fresh Fruits Collection
              </h3>
              <nuxt-link
                to="/shop"
                class="bg-white px-8 rounded-full py-2 bs-cl-or"
                >Order Now</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <h3 class="text-2xl mt-16 mb-6 lg:pl-4 xl:pl-0">Deals of the Week</h3>
      <carousal-border></carousal-border>

      <vue-slick-carousel
        class="category-carousel mb-14 text-center"
        v-bind="dealsOpts"
        v-if="DemoProducts.length"
      >
        <SingleProduct
          v-for="(singleproduct, index) in DemoProducts"
          :product="singleproduct"
          :key="index"
        />

        <template #prevArrow="arrowOption">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </template>

        <template #nextArrow="arrowOption">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </template>
      </vue-slick-carousel>
      <h3 class="text-2xl mt-16 mb-6 lg:pl-4 xl:pl-0">Popular Brands</h3>
      <carousal-border></carousal-border>
      <vue-slick-carousel
        class="category-carousel mb-14 text-center"
        v-bind="catCarouselSettings"
      >
        <div class="p-4 ml-2 mr-2">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/brand.png" alt="" />
          </div>
        </div>
        <div class="p-4 ml-2 mr-2">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/eco.png" alt="" />
          </div>
        </div>
        <div class="p-4 ml-2 mr-2">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/premium.png" alt="" />
          </div>
        </div>
        <div class="p-4 ml-2 mr-2">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/vegan.png" alt="" />
          </div>
        </div>
        <div class="p-4 ml-2 mr-2">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/brand.png" alt="" />
          </div>
        </div>
        <div class="p-4 ml-2 mr-2">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/natural.png" alt="" />
          </div>
        </div>
        <div class="p-4 ml-2 mr-2">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/images/organic.png" alt="" />
          </div>
        </div>

        <template #prevArrow="arrowOption">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="adg h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </template>
        <template #nextArrow="arrowOption">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="adg h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </template>
      </vue-slick-carousel>

      <div
        class="md:flex md:flex-wrap xl:flex-nowrap xl:-mx-6 mb-14 pt-0 md:pt-10"
      >
        <div class="w-full md:w-1/2 px-6 mb-8 md:mb-0">
          <div
            class="fruits bg-cover bg-gray-500 bg-center p-2 sm:p-12 rounded"
          >
            <div class="w-2/3 py-6">
              <h3 class="font-bold text-xl sm:text-3xl mb-10">
                Fresh Fruits Collection
              </h3>
              <nuxt-link
                to="/shop"
                class="bg-white bs-cl-or self-end font-bold rounded-full px-5 py-4 text-center"
              >
                &#8594;
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-6 mb-8 md:mb-0">
          <div
            class="vegetables bg-cover bg-gray-500 bg-center p-2 sm:p-12 rounded"
          >
            <div class="w-2/3 py-6">
              <h3 class="font-bold text-xl sm:text-3xl mb-10">
                Vegetables Collection
              </h3>
              <nuxt-link
                to="/shop"
                class="bg-white bs-cl-or self-end font-bold rounded-full px-5 py-4 text-center"
              >
                &#8594;
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="w-full md:mt-10 xl:mt-0 md:w-1/2 px-6">
          <div
            class="grocery bg-cover bg-gray-500 bg-center p-2 sm:p-12 rounded"
          >
            <div class="w-2/3 py-6">
              <h3 class="font-bold text-xl sm:text-3xl mb-10">
                Grocery Collection
              </h3>
              <nuxt-link
                to="/shop"
                class="bg-white bs-cl-or self-end font-bold rounded-full px-5 py-4 text-center"
              >
                &#8594;
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DemoProducts from "../assets/demo-prods.json";

export default {
  name: "index",
  data() {
    return {
      slideOptions: {
        arrows: false,
        dots: true,
        autoplay: true,
      },
      catCarouselSettings: {
        slidesToShow: 6,
        autoplay: true,
        speed: 1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      dealsOpts: {
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      DemoProducts: [],
    };
  },
  mounted() {
    this.DemoProducts = DemoProducts;
  },
};
</script>
