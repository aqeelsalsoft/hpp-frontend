<script lang="ts" setup></script>

<template>
    <div class="hpp__customPackagingSuccessHeader mx-auto max-w-2xl lg:text-center mb-16">
        <div class="video__popupWrapper relative mb-12">
            <NuxtImg format="webp" src="assets/images/videobg.webp" alt="Popup Video Background Thumbnail"
                loading="lazy" width="600" height="219" class="w-[600px] max-w-full h-auto mx-auto" />
            <button class="play__iconWrap absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] before:content[''] before:block before:w-full before:h-full bg-[rgba(239,75,95,0.9)] before:bg-[rgba(239,75,95,0.8)] w-[100px] h-[100px] rounded-[50%] before:rounded-[50%] before:absolute before:top-0 before:left-0 before:animate-ping before:z-[1] before:duration-[1000ms]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="#ffffff" class="size-[40px] mx-auto relative z-[2]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
            </button>
        </div>
        <h2 class="text-[#7157f8] text-base font-semibold leading-7">Our Approach</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Custom packaging success with 360°
            <span class="text-[#ef4b5f]">Half Price Packaging</span> approach
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit
            eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In
            mi viverra elit nunc.</p>
    </div>
</template>

<style lang="scss" scoped></style>