<script lang="ts" setup></script>

<template>
    <div class="hpp__mainNavigationWrapper border-[#f2f2f2] border-y relative">
        <div class="container mx-auto px-[15px]">
            <div class="flex items-center justify-center">
                <nav class="hpp__navWrapper px-[15px]">
                    <ul class="flex gap-x-[30px]">
                        <li class="group">
                            <NuxtLink to="/" class="flex items-center block hover:text-[#ef4b5f] megaMenuLink py-[15px]">
                                <span
                                    class="font-description font-semibold text-[14px] leading-[20px]">Industries</span>
                                <svg class="w-2 h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </NuxtLink>
                            <!-- Dropdown menu -->
                            <div
                                class="dropdownMenuWrap animate-fade z-10 lg:absolute top-full left-0 right-0 m-auto bg-white shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] lg:px-10 xl:px-8 md:px-5 p-4 max-w-screen-2xl xl:py-8 lg:py-4 md:py-2l opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                <div class="flex">
                                    <div class="grid grid-cols-5 gap-[20px] w-[calc(100%_-_300px)] border-r pr-[30px]">
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/cosmetics-boxes.jpg"
                                                        alt="Soap Sleeves Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Cosmetics & Skincare</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/bakery-boxes.jpg"
                                                        alt="Kraft Soap Boxes Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Bakery</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/retail-boxes.jpg"
                                                        alt="Soap Boxes With Window Thumbnail" loading="lazy"
                                                        fit="cover" width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Retail</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/soap-boxes-with-window.jpg"
                                                        alt="Die Cut Soap Boxes Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Soap</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/luxury-candle-boxes.jpg"
                                                        alt="Soap Wraps Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Candles</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div class="w-[300px] pl-[30px]">
                                        <ul class="font-description font-medium text-gray-500 text-[14px] mb-[30px]">
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Gift Boxes
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Pharma Packaging
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Fragrance Packaging
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Candy & Sweets Packaging
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Jewelry Boxes
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Ecommerce Packaging
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Coffee and Tea Packaging
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                        </ul>
                                        <div class="view__allBtnWrapper">
                                            <NuxtLink to="#"
                                                class="font-description inline-block ease-in-out duration-[0.3s] text-white text-[12px] leading-[18px] font-semibold text-center bg-[#ef4b5f] rounded-[50px] py-[8px] px-[25px] border border-[#ef4b5f] border-solid">
                                                View All Industries</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="group">
                            <NuxtLink to="/" class="flex items-center block hover:text-[#ef4b5f] megaMenuLink py-[15px]">
                                <span
                                    class="font-description font-semibold text-[14px] leading-[20px]">Product Packaging Styles</span>
                                <svg class="w-2 h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </NuxtLink>
                            <div
                                class="dropdownMenuWrap animate-fade z-10 lg:absolute top-full left-0 right-0 m-auto bg-white shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] lg:px-10 xl:px-8 md:px-5 p-4 max-w-screen-2xl xl:py-8 lg:py-4 md:py-2l opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                <div class="flex">
                                    <div class="grid grid-cols-5 gap-[20px] w-[calc(100%_-_300px)] border-r pr-[30px]">
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/shapes-and-styles/mailer-box-thumbnail.jpg"
                                                        alt="Soap Sleeves Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Mailer boxes</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/shapes-and-styles/tuck-snap-bottom-thumbnail.jpg"
                                                        alt="Kraft Soap Boxes Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Tuck boxes</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/shapes-and-styles/mylar-bags-thumbnail-alt.jpg"
                                                        alt="Soap Boxes With Window Thumbnail" loading="lazy"
                                                        fit="cover" width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Myler Bags and Pouches</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/shapes-and-styles/white-rigid-gift-boxes.jpg"
                                                        alt="Die Cut Soap Boxes Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Rigid boxes</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/home-featured-industries/labels-and-stickers.jpg"
                                                        alt="Soap Wraps Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="336" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Labels and stickers</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div class="w-[300px] pl-[30px]">
                                        <ul class="font-description font-medium text-gray-500 text-[14px] mb-[30px]">
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Dispenser Boxes
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Sleeve & Tray Boxes
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Pillow Box
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Cigarette Boxes
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Child Resistant
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Window Boxes
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f]">
                                                    Gable Boxes
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                        </ul>
                                        <div class="view__allBtnWrapper">
                                            <NuxtLink to="#"
                                                class="font-description inline-block ease-in-out duration-[0.3s] text-white text-[12px] leading-[18px] font-semibold text-center bg-[#ef4b5f] rounded-[50px] py-[8px] px-[25px] border border-[#ef4b5f] border-solid">
                                                View All Packaging Styles</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="group">
                            <NuxtLink to="/" class="flex items-center block hover:text-[#ef4b5f] megaMenuLink py-[15px]">
                                <span
                                    class="font-description font-semibold text-[14px] leading-[20px]">Client Success Stories</span>
                                <svg class="w-2 h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </NuxtLink>
                            <div
                                class="dropdownMenuWrap animate-fade z-10 lg:absolute top-full left-0 right-0 m-auto bg-white shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] lg:px-10 xl:px-8 md:px-5 p-4 max-w-screen-2xl xl:py-8 lg:py-4 md:py-2l opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                <div class="flex">
                                    <div class="grid grid-cols-3 gap-[20px] w-[calc(100%_-_300px)] border-r pr-[30px]">
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/client-success-stories/olive-knives.webp"
                                                        alt="Soap Sleeves Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="236" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Olive Knives <span class="text-[#ef4b5f] text-[24px] leading-[20px] font-headings font-bold align-top">X</span> HPP</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/client-success-stories/eight-plus-face-cream.webp"
                                                        alt="Kraft Soap Boxes Thumbnail" loading="lazy" fit="cover"
                                                        width="336" height="236" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        8+ Face Cream <span class="text-[#ef4b5f] text-[24px] leading-[20px] font-headings font-bold align-top">X</span> HPP</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                        <div class="item__wrap">
                                            <NuxtLink to="#"
                                                class="relative block cursor-pointer rounded-[20px] transition-all duration-300">
                                                <div
                                                    class="thumb__wrap w-[100%] bg-[#efefef] rounded-[24px] overflow-hidden">
                                                    <NuxtImg format="webp"
                                                        src="/images/client-success-stories/intoxicated-cosmetics.webp"
                                                        alt="Soap Boxes With Window Thumbnail" loading="lazy"
                                                        fit="cover" width="336" height="236" class="w-full h-auto" />
                                                </div>
                                                <div class="desc__wrap py-[10px]">
                                                    <h3
                                                        class="font-headings text-[16px] leading-[20px] text-acai font-bold mb-0.5 text-center">
                                                        Intoxicated Cosmetics <span class="text-[#ef4b5f] text-[24px] leading-[20px] font-bold align-top">X</span> HPP</h3>
                                                </div>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div class="w-[300px] pl-[30px]">
                                        <ul class="font-description font-medium text-gray-500 text-[14px] leading-[20px] mb-[30px]">
                                            <li class="mb-[10px]">
                                                <a href="#"
                                                    class="group flex items-center pr-[34px] relative hover:text-[#ef4b5f] font-description">
                                                    Mermaid Cove <span class="font-headings text-[#ef4b5f] text-[24px] leading-[20px] font-bold align-top mx-[5px]">X</span> HPP
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                                                        class="absolute top-[50%] right-0 translate-y-[-50%] size-4 ml-[10px] group-hover:text-[#ef4b5f]">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>

                                                </a>
                                            </li>
                                        </ul>
                                        <div class="view__allBtnWrapper">
                                            <NuxtLink to="#"
                                                class="font-description inline-block ease-in-out duration-[0.3s] text-white text-[12px] leading-[18px] font-semibold text-center bg-[#ef4b5f] rounded-[50px] py-[8px] px-[25px] border border-[#ef4b5f] border-solid">
                                                View All Stories</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!-- <li>
                            <NuxtLink to="/" class="flex items-center block hover:text-[#ef4b5f] py-[15px]"><span
                                    class="font-description text-[14px] leading-[20px]">Client Success Stories</span>
                            </NuxtLink>
                        </li> -->
                    </ul>
                </nav>
                <!-- <div class="hpp__headerBtnsWrap">
                    <NuxtLink to="/"
                        class="ease-in-out duration-[0.3s] inline-block rounded-[8px] border border-[#ef4b5f] px-[20px] py-[10px] text-[#ef4b5f] text-[14px] uppercase font-semibold hover:text-[#ffffff] hover:bg-[#ef4b5f] mr-[15px]">
                        Beat the Price</NuxtLink>
                    <NuxtLink to="/"
                        class="ease-in-out duration-[0.3s] inline-block rounded-[8px] border border-[#ef4b5f] px-[20px] py-[10px] text-[#ef4b5f] text-[14px] uppercase font-semibold hover:text-[#ffffff] hover:bg-[#ef4b5f]">
                        Request a Quote</NuxtLink>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
