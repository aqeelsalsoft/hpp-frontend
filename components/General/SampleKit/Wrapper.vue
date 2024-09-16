<script lang="ts" setup></script>

<template>
    <div class="hpp__instantPricesWrapper relative pt-[30px] pb-[30px] bg-[#f9f9f9] overflow-hidden">
        <div class="section__bgWrapper absolute w-full h-full top-0">
            <NuxtImg format="webp" src="/images/sample-kit.jpg" alt="Sample Kit Thumbnail" loading="lazy"
                class="absolute w-full h-full object-contain top-0 -right-[100px]" />
        </div>
        <div class="container mx-auto px-[15px]">
            <GeneralSampleKitForm />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
