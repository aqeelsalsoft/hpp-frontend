<script lang="ts" setup></script>

<template>
    <div class="hpp__mainNavigationWrapper border-[#f2f2f2] border-y">
        <div class="container mx-auto px-[15px]">
            <div class="flex items-center justify-center">
                <nav class="hpp__navWrapper py-[15px] px-[15px]">
                    <ul class="flex gap-x-[30px]">
                        <li>
                            <NuxtLink to="/" class="flex items-center block hover:text-[#ef4b5f]">
                                <span class="font-description font-semibold text-[14px] leading-[20px]">Industries</span>
                                <svg class="w-2 h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/" class="flex items-center block hover:text-[#ef4b5f]">
                                <span class="font-description font-semibold text-[14px] leading-[20px]">Categories</span>
                                <svg class="w-2 h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/" class="flex items-center block hover:text-[#ef4b5f]"><span class="font-description text-[14px] leading-[20px]">Client Success Stories</span></NuxtLink>
                        </li>
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
