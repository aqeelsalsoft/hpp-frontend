<script lang="ts" setup></script>

<template>
    <div class="hpp__productBannerWrapper pt-[70px] pb-[100px] bg-[#f9fafb]">
        <div class="container mx-auto px-[15px]">
            <div class="flex flex-wrap">
                <div class="breadcrumbs__wrap basis-full mb-[20px]">
                    <ul class="flex items-center gap-[10px]">
                        <li><a href="#" aria-label="Home Page Link"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg></a></li>
                        <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg></span></li>
                        <li><a href="#">Industry</a></li>
                        <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg></span></li>
                        <li><a href="#">Soap</a></li>
                        <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg></span></li>
                        <li><span>Kraft Soap Boxes</span></li>
                    </ul>
                </div>
                <div class="thumb__wrapper w-[55%]">
                    <ClientOnly fallbackTag="span">
                        <ProductDetailBannerGalleryCarousel />
                    </ClientOnly>
                </div>
                <div class="content__wrap w-[45%]">
                    <div class="hpp__categoryBannerContentWrapper pl-[15px] pr-[50px]">
                        <div class="desc__wrap">
                            <h1 class="font-headings text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kraft
                                Soap Boxes</h1>
                            <p class="font-description mt-6 text-[16px] leading-[24px] text-gray-600 mb-[30px]">Attract
                                a massive number of eco-minded customers with custom-designed and eco-friendly kraft
                                soap packaging boxes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
