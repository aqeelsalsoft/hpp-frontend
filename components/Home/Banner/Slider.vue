<script lang="ts" setup></script>

<template>
    <div class="hpp__bannerSliderWrap">
        <div class="slide__wrap relative">
            <div class="slide__imageWrap">
                <NuxtImg preload format="webp" src="assets/images/home-banner/banner-slider-image.jpg"
                    alt="Home Banner Image" width="1920" height="800" class="w-full h-auto" />
            </div>
            <div class="slider__innerWrap absolute w-full left-0 top-2/4 -translate-y-1/2">
                <div class="container mx-auto px-[15px]">
                    <div class="slide__content px-[15px] w-[600px]">
                        <h1 class="text-[70px] leading-[76px] text-white font-bold mb-6">Eco-Friendly Packaging Bags</h1>
                        <p class="text-[24px] leading-[34px] text-white font-normal mb-10">Explore, design and order environmentally conscious packaging.</p>
                        <NuxtLink to="#"
                            class="inline-block ease-in-out duration-[0.3s] text-black text-[16px] leading-[26px] font-bold uppercase text-center bg-white rounded-[50px] py-[10px] px-[40px] border border-white border-solid hover:text-white hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                            Request A Quote</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
