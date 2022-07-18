<template>
  <div class="container flex flex-wrap m-16 p-2 lg:p-10 border border-gray-200 rounded-lg">
    <h2 class="text-3xl text-gray-600 w-full mb-6">
      <p v-for="slider in sliders" :key="slider.id">
        <img alt="Midone - HTML Admin Template" class="rounded-full" :src="slider.image">
      </p>
      <!-- {{val[0].name}} -->
        About Us
    </h2>
    <div class="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-7 leading-7 text-gray-500">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <div class="w-full lg:w-1/2 lg:pl-7 leading-7 text-gray-500">
    Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
  </div>
</template>

<script>

export default {
  name: 'about',

  data(){
    return {
       sliders: [],
    }
  },
  
  async fetch() {

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    const restaurants = await fetch(
      'https://helloeats-api.upground.work/api/admin/slider/index', {
        method: "GET",
        headers,
      }).then((res) => res.json());

    this.sliders = restaurants.data;
    // console.log(this.val);
  }
}
</script>
