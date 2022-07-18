<template>
    <div>
        <Services />
        <div class="bg-gray-100">
            <div class="container mt-10 px-2 xl:px-0 py-8 xl:py-20">
                <nuxt-link to="/" class="font-medium mb-8 w-full xl:w-1/3 flex items-center text-xl">
                    <img class="mr-3" src="~/assets/images/logo.png" alt=""> Bengal shop
                </nuxt-link>
                <div class="lg:flex lg:pl-6 xl:pl-0">
                    <div class="footer-widget w-full xl:w-2/5 mr-40 lg:mr-14">
                        <p class="mb-7 text-gray-500 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam ornare nam est gravida. Netus viverra rhoncus sit magna sapien ac eget parturient id. Est luctus dapibus quam aliquam in nisl turpis. Elit et dictum lacus morbi nec accumsan a in.</p>
                        <div class="apps flex">
                            <nuxt-link class="mr-5" to="">
                                <img src="~/assets/images/Applebadge.png" alt="Applebadge">
                            </nuxt-link>
                            <nuxt-link to="">
                                <img src="~/assets/images/play.png" alt="play">
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="footer-widget my-8 lg:my-0 mr-0 xl:mr-32 w-full xl:w-28">
                        <p class="text-lg mb-3">About Us</p>
                        <nuxt-link class="text-gray-400 text-sm py-2 flex" to="/contact">
                            Contact
                        </nuxt-link>
                        <nuxt-link class="text-gray-400 text-sm py-2 flex" to="/construction">
                            Career
                        </nuxt-link>
                        <nuxt-link class="text-gray-400 text-sm py-2 flex" to="/about">
                            Terms
                        </nuxt-link>
                        <nuxt-link class="text-gray-400 text-sm py-2 flex" to="/construction">
                            Category
                        </nuxt-link>
                    </div>
                    <div class="footer-widget w-full xl:w-28">
                        <p class="text-lg mb-3">Info</p>
                        <nuxt-link class="text-gray-400 text-sm py-2 flex" to="/construction">
                            Information
                        </nuxt-link>
                        <nuxt-link class="text-gray-400 text-sm py-2 flex" to="/construction">
                            Payment
                        </nuxt-link>
                        <nuxt-link class="text-gray-400 text-sm py-2 flex" to="/construction">
                            Return
                        </nuxt-link>
                        <nuxt-link class="text-gray-400 text-sm py-2 flex" to="/construction">
                            Blog
                        </nuxt-link>
                    </div>
                </div>
                <div class="lg:flex pt-10 lg:pl-6 xl:pl-0 items-center">
                    <div class="social w-full mb-6 xl:mb-0 lg:w-1/2 justify-start flex">
                        <nuxt-link class="mr-4" to="">
                            <img src="~/assets/images/fb.png" alt="fb">
                        </nuxt-link>
                        <nuxt-link class="mr-4" to="">
                            <img src="~/assets/images/ins.png" alt="fb">
                        </nuxt-link>
                        <nuxt-link class="mr-4" to="">
                            <img src="~/assets/images/twi.png" alt="fb">
                        </nuxt-link>
                        <nuxt-link to="">
                            <img src="~/assets/images/sky.png" alt="fb">
                        </nuxt-link>
                    </div>
                    <div class="payment w-full lg:w-1/2 sm:flex justify-end">
                        <img class="sm:mr-4 mb-3 sm:mb-0" src="~/assets/images/paypal.png" alt="">
                        <img class="sm:mr-4 mb-3 sm:mb-0" src="~/assets/images/visa.png" alt="">
                        <img class="sm:mr-4 mb-3 sm:mb-0" src="~/assets/images/apay.png" alt="">
                        <img src="~/assets/images/gpay.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <back-to-top text="Back to top">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 text-yellow-600 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
            </svg>
        </back-to-top>
        <div class="container">
            <p class="text-gray-400 text-sm text-center py-5 font-light">&copy;2022 Copyright All Right Reserved by Bengal Shop</p>
        </div>
        <footer-modal />
    </div>
</template>

<script>
import FooterModal from './Footer-modal.vue'
import Services from './Services.vue'
export default {
  components: { FooterModal, Services },
    name:"Footer",
}
</script>