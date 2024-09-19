<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'; // Import Swiper and SwiperSlide components
import 'swiper/css'; // Import basic Swiper styles
import 'swiper/css/effect-coverflow'; // Import effect-specific styles
import 'swiper/css/autoplay'; // Import autoplay-specific styles

import { EffectCoverflow, Autoplay } from 'swiper/modules'; // Import modules

const isOpen = ref(false);

</script>

<template>
    <div class="swiper__carouselWrapper">
        <ClientOnly fallback-tag="span" fallback="Loading Carousel...">
            <Swiper :loop="true" :centeredSlides="true" slides-per-view="4" :space-between="0"
                :modules="[EffectCoverflow, Autoplay]" effect="coverflow" :coverflowEffect="{
                    rotate: 0,
                    stretch: 0,
                    depth: 250,
                    modifier: 1,
                    slideShadows: false
                }">
                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery1.jpg" width="334"
                            height="575" alt="Soap Box Gallery 1 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                        <UButton label="Open" @click="isOpen = true" />

                        <UModal v-model="isOpen" prevent-close>
                            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                                <template #header>
                                    <div class="flex items-center justify-between">
                                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                                            Modal
                                        </h3>
                                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid"
                                            class="-my-1" @click="isOpen = false" />
                                    </div>
                                </template>

                                <Placeholder class="h-32" />
                            </UCard>
                        </UModal>
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery2.jpg" width="334"
                            height="575" alt="Soap Box Gallery 2 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery3.jpg" width="334"
                            height="575" alt="Soap Box Gallery 3 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery4.jpg" width="334"
                            height="575" alt="Soap Box Gallery 4 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery1.jpg" width="334"
                            height="575" alt="Soap Box Gallery 2 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery2.jpg" width="334"
                            height="575" alt="Soap Box Gallery 2 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery3.jpg" width="334"
                            height="575" alt="Soap Box Gallery 3 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery4.jpg" width="334"
                            height="575" alt="Soap Box Gallery 4 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery1.jpg" width="334"
                            height="575" alt="Soap Box Gallery 1 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery2.jpg" width="334"
                            height="575" alt="Soap Box Gallery 2 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery3.jpg" width="334"
                            height="575" alt="Soap Box Gallery 3 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery4.jpg" width="334"
                            height="575" alt="Soap Box Gallery 4 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery1.jpg" width="334"
                            height="575" alt="Soap Box Gallery 1 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery2.jpg" width="334"
                            height="575" alt="Soap Box Gallery 2 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->

                <!-- Repeat this block for each SwiperSlide -->
                <SwiperSlide>
                    <div class="gallery__item w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                        <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery3.jpg" width="334"
                            height="575" alt="Soap Box Gallery 3 Thumbnail" loading="lazy" fit="cover"
                            class="w-full h-auto" />
                    </div>
                </SwiperSlide>
                <!-- Add more SwiperSlide components as needed -->
            </Swiper>
        </ClientOnly>
    </div>
</template>