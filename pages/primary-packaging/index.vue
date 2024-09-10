<template>
    <div class="hpp__primaryPackagingPageWrapper">

        <div class="breadcrumbs__wrap py-[50px]">
            <div class="container mx-auto px-[15px]">
                <ul class="flex items-center gap-[10px]">
                    <li><a href="#" aria-label="Home Page Link"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg></a></li>
                    <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg></span></li>
                    <li><span>Primary Packaging</span></li>
                </ul>
            </div>
        </div>
        <div class="section__headerWrap">
            <div class="container mx-auto px-[15px]">
                <div class="inner__wrap w-[800px] mx-auto mb-[50px] text-center">
                    <h1 class="font-headings text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Crafting Your Product's Best First Impression</h1>
                    <p class="font-description mt-6 text-[16px] leading-[24px] text-gray-600 mb-[30px]">Primary packaging is the first point of contact with your customers. That’s why we offer an extensive range of materials and design options to make your first contact memorable.</p>
                </div>
            </div>
        </div>
        <LazyPrimaryPackagingProductsWrapper />
        <LazyPrimaryPackagingFaqWrapper />
        <LazyGeneralSampleKitWrapper />

    </div>
</template>