<template>
  <div>
    <accordion>
    <accordion-item :openByDefault="true">
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <template slot="accordion-trigger">
        <h3 class="bs-light-green-bg p-5 rounded-t-xl cursor-pointer flex justify-between">
          Categories

          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </h3>
      </template>
      <!-- This slot will handle all the content that is passed to the accordion -->
      <template slot="accordion-content">
        <div class="border border-t-0 border-gray-200 p-6">
          <ul class="leading-10">
            <li>
              <accordion>
                <accordion-item>
                  <template slot="accordion-trigger">
                    <div class="flex justify-between cursor-pointer items-center hover:text-green-600">
                      Fruits
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </template>

                  <template slot="accordion-content">
                    <ul class="pl-4 text-sm leading-8 mb-4">
                      <li><nuxt-link class="hover:text-green-600" to="/construction">Apple</nuxt-link></li>
                      <li><nuxt-link class="hover:text-green-600" to="/construction">Pineapple</nuxt-link></li>
                      <li><nuxt-link class="hover:text-green-600" to="/construction">Watermelon</nuxt-link></li>
                    </ul>
                  </template>
                </accordion-item>
              </accordion>
            </li>
            <li><nuxt-link class="hover:text-green-600" to="/construction">Vagetables</nuxt-link></li>
            <li><nuxt-link class="hover:text-green-600" to="/construction">Fish</nuxt-link></li>
          </ul>
        </div>
      </template>
    </accordion-item>
  </accordion>
  <div class="my-8">
    <div class="fruits bg-cover bg-gray-500 bg-center p-12 rounded">
        <div class="w-2/3 py-6">
        <h3 class="font-bold text-2xl md:text-3xl mb-10">Fresh Fruits</h3> 
        <a href="/shop" class="bg-white bs-cl-or self-end font-bold rounded-full px-5 py-4 text-center">
                    →
        </a>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import Accordion from "./accordian";
import AccordionItem from "./accordian-item";
export default {
  name: "Sidebar",
  components:{Accordion, AccordionItem},
}
</script>
