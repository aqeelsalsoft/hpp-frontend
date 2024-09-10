<script lang="ts" setup></script>

<template>
    <div class="hpp__reviewsLogosWrapper bg-gray-100">
        <div class="container mx-auto px-[15px]">
            <div class="flex items-center py-[20px]">
                <div class="reviews__wrapper w-[300px] pr-[15px]">
                    <span class="block font-description font-medium text-[15px] leading-[19px] mb-[10px]">More than 5,000 customers love us:</span>
                    <div class="flex items-center -mx-[15px]">
                        <div class="item__wrap basis-[50%] px-[15px]">
                            <NuxtLink to="#" aria-label="Google Customer Reviews Logo">
                                <NuxtImg prelaod class="max-w-full w-full h-auto object-contain mx-auto"
                                src="/images/google-reviws-logo.png" alt="Google Customer Reviews Logo"
                                width="145" height="58" />
                            </NuxtLink>
                        </div>
                        <div class="item__wrap basis-[50%] px-[15px]">
                            <NuxtLink to="#" aria-label="Trust Pilot Reviews logo">
                                <NuxtImg preload class="max-w-full w-full h-auto object-contain mx-auto"
                                    src="/images/trustpilot-stars-logo.png" alt="Trustpilot Starts Logo"
                                    width="145" height="58" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="logos__wrapper w-[calc(100%_-_300px)] pl-[50px]">
                    <div class="grid grid-cols-8 gap-[30px] items-center">
                        <div class="grid__item">
                            <NuxtImg class="max-w-full w-full h-full object-contain mx-auto"
                                src="/images/brand-icons/BONLOGO.svg" alt="BONLOGO Logo" width="158" height="48"
                                loading="lazy" />
                        </div>
                        <div class="grid__item">
                            <NuxtImg class="max-w-full w-full h-full object-contain mx-auto"
                                src="/images/brand-icons/citrix.svg" alt="Citrix Logo" width="158" height="48"
                                loading="lazy" />
                        </div>
                        <div class="grid__item">
                            <NuxtImg class="max-w-full w-full h-full object-contain mx-auto"
                                src="/images/brand-icons/netflix.svg" alt="Netflix Logo" width="158" height="48"
                                loading="lazy" />
                        </div>
                        <div class="grid__item">
                            <NuxtImg class="max-w-full w-full h-full object-contain mx-auto"
                                src="/images/brand-icons/poplogo.svg" alt="Pop Logo" width="158" height="48"
                                loading="lazy" />
                        </div>
                        <div class="grid__item">
                            <NuxtImg class="max-w-full w-full h-full object-contain mx-auto"
                                src="/images/brand-icons/rallyLogo.svg" alt="Rally Logo" width="158" height="48"
                                loading="lazy" />
                        </div>
                        <div class="grid__item">
                            <NuxtImg class="max-w-full w-full h-full object-contain mx-auto"
                                src="/images/brand-icons/samsung.svg" alt="Samsung Logo" width="158" height="48"
                                loading="lazy" />
                        </div>
                        <div class="grid__item">
                            <NuxtImg class="max-w-full w-full h-full object-contain mx-auto"
                                src="/images/brand-icons/telogis.svg" alt="Telogis Logo" width="158" height="48"
                                loading="lazy" />
                        </div>
                        <div class="grid__item">
                            <NuxtImg class="max-w-full w-full h-full object-contain mx-auto"
                                src="/images/brand-icons/topilogo.svg" alt="Topilogo Logo" width="158" height="48"
                                loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>