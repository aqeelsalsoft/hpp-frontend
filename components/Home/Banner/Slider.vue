<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue';
import { useKeenSlider } from 'keen-slider/vue.es';
import 'keen-slider/keen-slider.min.css';

// Declare a reference for the KeenSlider instance
const slider = ref<any>(null);
const current = ref(0);

// Initialize the KeenSlider instance
const [mainSlider, keenSlider] = useKeenSlider({
    initial: current.value,
    loop: true,
    slideChanged: (s) => {
        current.value = s.track.details.rel;
    },
});

// Compute the dots based on the number of slides
const dotHelper = computed(() => {
    return keenSlider.value ? [...Array(keenSlider.value.track.details.slides.length).keys()] : [];
});

const sliderImgOne = '/images/home-banner/banner-slider-image.jpg'
const sliderImgTwo = '/images/home-banner/banner-slider-image2.png'

// Define reactive properties for width and height
const imageWidth = ref(0)
const imageHeight = ref(0)
const imageTwoWidth = ref(0)
const imageTwoHeight = ref(0)

// Ensure slider instance is correctly assigned on mounted
onMounted(async () => {
    if (slider.value) {
        keenSlider.value = new KeenSlider(slider.value, {
            // Your KeenSlider options here
        });
    }

    // Fetch the image details using useImage
    const { src, width, height } = await useImage({ src: sliderImgOne });
    // Set the image dimensions
    imageWidth.value = width
    imageHeight.value = height

    // Fetch the image details using useImage
    const { srcTwo, widthTwo, heightTwo } = await useImage({ src: sliderImgTwo });
    // Set the image dimensions
    imageTwoWidth.value = width
    imageTwoHeight.value = height

});

const onImageLoad = (event) => {
    // Optional: Check the rendered size after the image has loaded
    const imgElement = event.target

    imageWidth.value = imgElement.clientWidth
    imageHeight.value = imgElement.clientHeight
}

const onImageLoadTwo = (event) => {
    // Optional: Check the rendered size after the image has loaded
    const imgElement = event.target

    imageTwoWidth.value = imgElement.clientWidth
    imageTwoHeight.value = imgElement.clientHeight
}


</script>

<template>
    <div class="hpp__bannerSliderWrap">
        <div class="slider__innerWrap relative">
            <div ref="mainSlider" class="keen-slider w-full">
                <div class="keen-slider__slide w-full">
                    <div class="slide__wrap relative w-full">
                        <div class="slide__imageWrap">
                            <!-- <NuxtImg preload format="webp" :src=sliderImgOne alt="Home Banner Image" :width=imageWidth
                                :height=imageHeight class="w-full h-[490px] object-cover" @load="onImageLoad" /> -->
                            <NuxtImg preload format="webp" width="1920" height="490" :src=sliderImgOne
                                alt="Home Banner Image" class="w-full h-[490px] object-cover"
                                sizes="100% xl:1350px xxl:1920px" />
                        </div>
                        <div class="slider__innerWrap absolute w-full left-0 top-2/4 -translate-y-1/2">
                            <div class="px-[120px]">
                                <div class="slide__content w-[600px]">
                                    <h1 class="font-headings text-[50px] leading-[56px] text-white font-bold mb-6">
                                        Premium Custom Boxes at Unbeatable Prices!</h1>
                                    <p class="font-description text-[20px] leading-[30px] text-white font-light mb-14">
                                        Discover custom packaging solutions crafted with perfection, to meet your unique
                                        needs</p>
                                    <NuxtLink to="#"
                                        class="font-description inline-block ease-in-out duration-[0.3s] text-black text-[16px] leading-[24px] font-semibold text-center bg-white rounded-[50px] py-[10px] px-[40px] border border-white border-solid hover:text-white hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                                        Browse Our Catalogue</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="keen-slider__slide w-full">
                    <div class="slide__wrap relative w-full">
                        <div class="slide__imageWrap">
                            <!-- <NuxtImg loading="lazy" format="webp" :src=sliderImgTwo alt="Home Banner Image"
                                :width=imageTwoWidth :height=imageTwoHeight class="w-full h-[490px] object-cover" @load="onImageLoadTwo" /> -->
                            <NuxtImg loading="lazy" format="webp" width="1920" height="490" :src=sliderImgTwo
                                alt="Home Banner Image" class="w-full h-[490px] object-cover"
                                sizes="100% xl:1350px xxl:1920px" />
                        </div>
                        <div class="slider__innerWrap absolute w-full left-0 top-2/4 -translate-y-1/2">
                            <div class="px-[120px]">
                                <div class="slide__content w-[600px]">
                                    <h1 class="font-headings text-[50px] leading-[56px] text-white font-bold mb-4">
                                        Premium Custom Boxes at Unbeatable Prices!</h1>
                                    <p class="font-description text-[20px] leading-[30px] text-white font-light mb-14">
                                        Discover custom packaging solutions crafted with perfection, to meet your unique
                                        needs</p>
                                    <NuxtLink to="#"
                                        class="font-description inline-block ease-in-out duration-[0.3s] text-black text-[16px] leading-[24px] font-semibold text-center bg-white rounded-[50px] py-[10px] px-[40px] border border-white border-solid hover:text-white hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                                        Browse Our Catalogue</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button @click="keenSlider?.prev()" aria-label="previous"
                class="rounded-full shadow-icon-button border-2 border-transparent bg-white transition-all hover:bg-[#ebebf1] active:border-core-purple-90 absolute top-2/4 -translate-y-1/2 left-[2rem] group"><svg
                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                    class="w-6 h-6 m-2 group-hover:fill-black" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg></button>
            <button @click="keenSlider?.next()" aria-label="next"
                class="rounded-full shadow-icon-button border-2 border-transparent bg-white transition-all hover:bg-[#ebebf1] active:border-core-purple-90 absolute top-2/4 -translate-y-1/2 right-[2rem] group"><svg
                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                    class="w-6 h-6 m-2 group-hover:fill-black" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                </svg></button>

            <div v-if="slider" class="dots">
                <button v-for="(_slide, idx) in dotHelper" @click="slider.moveToIdx(idx)"
                    :class="{ dot: true, active: current === idx }" :key="idx"></button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
