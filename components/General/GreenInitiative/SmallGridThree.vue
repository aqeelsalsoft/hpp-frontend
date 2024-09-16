<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const imgSrc = '/images/sustainability-grid/kraft-mylar-bags.jpg'

// Define reactive properties for width and height
const imageWidth = ref(0)
const imageHeight = ref(0)

// Ensure slider instance is correctly assigned on mounted
onMounted(async () => {

    // Fetch the image details using useImage
    const { src, width, height } = await useImage({ src: imgSrc });
    // Set the image dimensions
    imageWidth.value = width
    imageHeight.value = height

});

const onImageLoad = (event) => {
    // Optional: Check the rendered size after the image has loaded
    const imgElement = event.target

    imageWidth.value = imgElement.clientWidth
    imageHeight.value = imgElement.clientHeight
}
</script>

<template>
    <div class="flex items-center h-[calc(100vh_/_2)] w-6/12 bg-[#333333] relative overflow-hidden">
        <div
            class="thumb__wrapper w-full h-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[rgba(0,0,0,0.6)]">
            <NuxtImg format="webp" :src=imgSrc alt="Eco-Friendly Boxes Thumbnail"
            loading="lazy" width="600" height="600" class="w-full h-full object-cover" />
            <!-- loading="lazy" :width=imageWidth :height=imageHeight class="w-full h-full object-cover" @load="onImageLoad" /> -->
        </div>
        <div class="Inner absolute bottom-0 left-0 w-full">
            <div class="py-6 px-8">
                <h2 class="font-headings text-white text-[18px] font-bold">
                    <NuxtLink to="#">Kraft Mylar Bags</NuxtLink>
                </h2>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
