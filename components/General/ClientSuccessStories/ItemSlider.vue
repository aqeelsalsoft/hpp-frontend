<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, computed, watch } from 'vue';
import { useKeenSlider } from 'keen-slider/vue.es';
import KeenSlider from 'keen-slider';

const slider = ref<HTMLElement | null>(null); // Ref for the slider container
let keenSlider: KeenSlider | null = null; // Declare keenSlider in the outer scope

const current = ref(0);
// const [container] = useKeenSlider({
//     initial: current.value,
//     slideChanged: (s) => {
//         current.value = s.track.details.rel;
//     },
// });

onMounted(() => {
    if (slider.value) {
        keenSlider = new KeenSlider(slider.value, {
            // mode: "free-snap",
            loop: true,
            slides: {
                perView: 4,
                spacing: 30,
            },
            slideChanged: (s) => {
                current.value = s.track.details.rel;
            },
        });
    }
});

const isFirstSlide = computed(() => current.value === 0);
const isLastSlide = computed(() =>
    keenSlider ? current.value === keenSlider.track.details.slides.length - 1 : false
);
// Watch the isLastSlide value
watch(isLastSlide, (newVal) => {
    console.log('isLastSlide:', newVal);
});
// Cleanup on component unmount
onBeforeUnmount(() => {
    if (keenSlider) keenSlider.destroy();
});
</script>

<template>
    <!-- <div class="hpp__industryCarouselWrapper px-[120px] relative overflow-hidden"> -->
    <div class="hpp__industryCarouselWrapper relative overflow-hidden">
        <div ref="slider" class="keen-slider !hidden sm:!flex !overflow-visible overflow-y-hidden grow-0">
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <NuxtLink to="#"
                        class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/home-featured-industries/cosmetics-boxes.jpg"
                                alt="Cosmetic Boxes Thumbnail" loading="lazy" fit="cover" width="336" height="420"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-3">How Do Olive Knives Get the Functional Luxury Packaging for Their Survival Gear</h3>
                            <p class="font-description text-acai text-[12px] lg:text-[14px]">Half Price Packaging broadens the scope of sustainable packaging solutions including not only cost reduction efforts but also innovation. We use a clear strategic...</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <NuxtLink to="#"
                        class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/home-featured-industries/mailer-boxes.jpg"
                                alt="Mailer Boxes Thumbnail" loading="lazy" fit="cover" width="336" height="420"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-3">Packaging with Bold Colors & Luxury Vibes - All That 8+ Face Cream for Men's Needed</h3>
                            <p class="font-description text-acai text-[12px] lg:text-[14px]">For Half Price Packaging, business is all about being true to our clients, trying new ideas, and focusing on the essentials of packaging. Our unwavering commitment...</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <NuxtLink to="#"
                        class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/home-featured-industries/candle-boxes.jpg"
                                alt="Candle Boxes Thumbnail" loading="lazy" fit="cover" width="336" height="420"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-3">Intoxicated Cosmetics Meeting Skincare Revolution with Our Packaging Innovation</h3>
                            <p class="font-description text-acai text-[12px] lg:text-[14px]">At Half Price Packaging, we pride ourselves on delivering customized packaging solutions that cater to diverse business needs. One of our recent collaborations was with...</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <NuxtLink to="#"
                        class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/home-featured-industries/soap-boxes.jpg"
                                alt="Soap Boxes Thumbnail" loading="lazy" fit="cover" width="336" height="420"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-3">Mermaid Cove and Half Price Packaging: A Green Style Collaboration</h3>
                            <p class="font-description text-acai text-[12px] lg:text-[14px]">This client story is about another successful collaboration that exemplifies how teaming up can make big dreams happen. “Mermaid Cove” is an eco-friendly...</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <NuxtLink to="#"
                        class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/home-featured-industries/display-boxes.jpg"
                                alt="Soap Boxes Thumbnail" loading="lazy" fit="cover" width="336" height="420"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-3">How Do Olive Knives Get the Functional Luxury Packaging for Their Survival Gear</h3>
                            <p class="font-description text-acai text-[12px] lg:text-[14px]">Half Price Packaging broadens the scope of sustainable packaging solutions including not only cost reduction efforts but also innovation. We use a clear strategic...</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <NuxtLink to="#"
                        class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/home-featured-industries/beverage-boxes.jpg"
                                alt="Soap Boxes Thumbnail" loading="lazy" fit="cover" width="336" height="420"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-3">Packaging with Bold Colors & Luxury Vibes - All That 8+ Face Cream for Men's Needed</h3>
                            <p class="font-description text-acai text-[12px] lg:text-[14px]">For Half Price Packaging, business is all about being true to our clients, trying new ideas, and focusing on the essentials of packaging. Our unwavering commitment...</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <NuxtLink to="#"
                        class="relative flex items-center sm:block bg-white px-4 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300">
                        <div class="thumb__wrap w-[100%] bg-[#efefef] rounded-[32px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/home-featured-industries/ecofriendly-boxes.jpg"
                                alt="Soap Boxes Thumbnail" loading="lazy" fit="cover" width="336" height="420"
                                class="w-full h-auto" />
                        </div>
                        <div class="desc__wrap py-[10px]">
                            <h3 class="font-headings text-[18px] leading-[22px] text-acai font-bold mb-3">Intoxicated Cosmetics Meeting Skincare Revolution with Our Packaging Innovation</h3>
                            <p class="font-description text-acai text-[12px] lg:text-[14px]">At Half Price Packaging, we pride ourselves on delivering customized packaging solutions that cater to diverse business needs. One of our recent collaborations...</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <button @click="keenSlider?.prev()" aria-label="previous"
            class="rounded-full shadow-icon-button border-2 border-transparent bg-white transition-all hover:bg-[#7157f8] active:border-core-purple-90 absolute top-2/4 -translate-y-1/2 left-[2rem] group"><svg
                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                class="w-6 h-6 m-2 group-hover:fill-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
            </svg></button>
        <button @click="keenSlider?.next()" aria-label="next"
            class="rounded-full shadow-icon-button border-2 border-transparent bg-white transition-all hover:bg-[#7157f8] active:border-core-purple-90 absolute top-2/4 -translate-y-1/2 right-[2rem] group"><svg
                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                class="w-6 h-6 m-2 group-hover:fill-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
            </svg></button>
    </div>
</template>

<style lang="scss" scoped></style>
