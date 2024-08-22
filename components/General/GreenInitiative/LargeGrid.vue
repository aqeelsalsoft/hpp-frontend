<script lang="ts" setup></script>

<template>
    <div class="flex items-center h-screen bg-[#333333] relative overflow-hidden">
        <div class="thumb__wrapper w-full h-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[rgba(0,0,0,0.6)]">
            <NuxtImg format="webp" src="assets/images/sustainability-grid/grid1.jpg" alt="Sustainability Grid Thumbnail"
                loading="lazy" class="w-full h-full object-cover" />
        </div>
        <div class="Inner absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
            <div class="py-14 pl-14 pr-40">
                <span class="font-description block text-white text-[14px] leading-[18px] font-medium tracking-[5px] mb-3 uppercase">Green Initiatives</span>
                <h2 class="font-headings text-white mb-12 text-3xl font-bold tracking-tight sm:text-4xl">Half Price Packaging's
                    commitment
                    to a sustainable tomorrow</h2>
                <NuxtLink to="#"
                    class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#7157f8] rounded-[35px] py-[8px] px-[30px] border border-[#7157f8] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                    Start Your Journey Towards Sustainability</NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
