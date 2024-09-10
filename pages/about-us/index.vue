<template>
    <div class="hpp__blogListingPageWrapper">

        <div class="breadcrumbs__wrap py-[50px]">
            <div class="container mx-auto px-[15px]">
                <ul class="flex items-center gap-[10px]">
                    <li>
                        <NuxtLink to="/" aria-label="Home Page Link"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg></NuxtLink>
                    </li>
                    <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg></span></li>
                    <li><span>About Us</span></li>
                </ul>
            </div>
        </div>

        <div class="section__headerWrap mb-[100px]">
            <div class="container mx-auto px-[15px]">
                <div class="inner__wrap flex flex-wrap items-center">
                    <div class="content__wrapper basis-[55%] pr-[50px]">
                        <h1 class="font-headings text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">About
                            Us</h1>
                        <p class="font-description text-[16px] leading-[24px] text-gray-600 mb-[40px]">We give your
                            product the attention they deserve.</p>
                        <div class="btn__wrapper flex">
                            <NuxtLink to="#"
                                class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#ef4b5f] rounded-[35px] py-[8px] px-[40px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
                                Meet The Team</NuxtLink>
                            <NuxtLink to="#"
                                class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#ef4b5f] rounded-[35px] py-[8px] px-[40px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f] ml-[10px]">
                                Location</NuxtLink>
                        </div>
                    </div>
                    <div class="thumb__wrapper basis-[45%] text-right">
                        <NuxtImg preload format="webp" src="/images/about-us/about-banner-thumb.jpg"
                            alt="Banner Box By Material" width="488" height="417"
                            class="max-w-full h-auto inline-block" />
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-100 py-[10px]">
            <div class="container mx-auto px-6 lg:px-8">
                <div
                    class="grid grid-cols-8 gap-[30px] items-center">
                    <NuxtImg class="max-w-full h-auto object-contain"
                        src="/images/brand-icons/BONLOGO.svg" alt="BONLOGO Logo"
                        width="158" height="48" loading="lazy" />
                    <NuxtImg class="max-w-full w-auto h-[48px] object-contain"
                        src="/images/brand-icons/citrix.svg" alt="Citrix Logo"
                        width="158" height="48" loading="lazy" />
                    <NuxtImg class="max-w-full w-auto h-[48px] object-contain"
                        src="/images/brand-icons/netflix.svg" alt="Netflix Logo"
                        width="158" height="48" loading="lazy" />
                    <NuxtImg class="max-w-full w-auto h-[48px] object-contain"
                        src="/images/brand-icons/poplogo.svg" alt="Pop Logo"
                        width="158" height="48" loading="lazy" />
                    <NuxtImg class="max-w-full w-auto h-[48px] object-contain"
                        src="/images/brand-icons/rallyLogo.svg" alt="Rally Logo"
                        width="158" height="48" loading="lazy" />
                    <NuxtImg class="max-w-full w-auto h-[48px] object-contain"
                        src="/images/brand-icons/samsung.svg" alt="Samsung Logo"
                        width="158" height="48" loading="lazy" />
                    <NuxtImg class="max-w-full w-auto h-[48px] object-contain"
                        src="/images/brand-icons/telogis.svg" alt="Telogis Logo"
                        width="158" height="48" loading="lazy" />
                    <NuxtImg class="max-w-full w-auto h-[48px] object-contain"
                        src="/images/brand-icons/topilogo.svg" alt="Topilogo Logo"
                        width="158" height="48" loading="lazy" />
                </div>
            </div>
        </div>

        <LazyGeneralSampleKitWrapper />
    </div>
</template>
