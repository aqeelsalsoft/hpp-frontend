<script lang="ts" setup>

</script>

<template>
    <div class="video__wrapper relative w-[250px] px-[4px] ml-auto">
        <video class="w-full h-[514px] object-cover rounded-[45px]" autoplay loop muted>
            <source src="~/assets/video/testimonial-video.mp4" type="video/mp4" />
        </video>
        <div class="mobile__maskWrap absolute top-0 left-0">
            <NuxtImg loading="lazy" format="webp" src="assets/images/iphone-mockup.png" alt="Iphone Mockup Image"
                width="250" height="515" class="w-full h-auto" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
