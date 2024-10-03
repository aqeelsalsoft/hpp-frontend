<script setup lang="ts">
import { computed } from 'vue';
// import { useFetch } from '#app';  // Import useFetch composable from Nuxt 3

// // Fetch data from the Laravel API
// const { data, status, error, refresh, clear, pending } = await useFetch('https://admin.halfpricepackaging.com/api/v1/shapes-and-materials', {
//   params: {
//     industry: 'cosmetics',
//     type: 0
//   }
// });

const { data, status, error, refresh, clear } = await useAsyncData(
  'mountains',
  () => $fetch('https://admin.halfpricepackaging.com/api/v1/shapes-and-materials?industry=cosmetics&type=0')
);


console.log("dataa", data.value.category, data.value.category.title);

// Create the image link dynamically
// const featuredImageLink = computed(() => {
//   return data.value?.category?.feature_image_path
//     ? `https://www.halfpricepackaging.com/${data.value.category.feature_image_path}`
//     : '';
// });

</script>

<template>
  <div>
    <pre>{{ data.category }}</pre>
    <h1>Title: {{ data.category.title }}</h1>
    <h2>Subtitle: {{ data.category.sub_title }}</h2>
    <p>Description: {{ data.category.sub_text }}</p>
    <!-- <NuxtImg :src=featuredImageLink :alt=data.category.title /> -->
    
  </div>
</template>

<style scoped>
/* Add some basic styling if necessary */
</style>
