<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'

const sliderRef = ref(null)
const thumbnailRef = ref(null)
let slider
let thumbnail

function ThumbnailPlugin(main) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    main.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            addActive(slider.track.details.rel)
            addClickEvents()
            main.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

onMounted(() => {
    if (sliderRef.value && thumbnailRef.value) {
        slider = new KeenSlider(sliderRef.value, {
            loop: true // Add any KeenSlider configuration options here
        })

        thumbnail = new KeenSlider(
            thumbnailRef.value,
            {
                initial: 0,
                slides: {
                    perView: 3,
                    spacing: 20,
                },
            },
            [ThumbnailPlugin(slider)]
        )
    }
})

onBeforeUnmount(() => {
    if (slider) slider.destroy()
    if (thumbnail) thumbnail.destroy()
})

// Slides Array
const slides = [
    {
        src: '/images/products/kraft-soap-boxes/gallery/kraft-soap-boxes-in-bulk.jpg',
        alt: 'Kraft Soap Boxes In Bulk Thumbnail',
    },
    {
        src: '/images/products/kraft-soap-boxes/gallery/kraft-soap-boxes-with-logo.jpg',
        alt: 'Kraft Soap Boxes With Logo Thumbnail',
    },
    {
        src: '/images/products/kraft-soap-boxes/gallery/kraft-soap-boxes-pop-up.jpg',
        alt: 'Kraft Soap Boxes Pop Up Thumbnail',
    },
    // Add more slides as needed
]
</script>

<template>
    <div class="hpp__productGalleryCarousel w-[550px]">
        <div class="carousel__wrapper">
            <!-- Slider Main Container -->
            <div ref="sliderRef" class="keen-slider mb-[20px]">
                <div v-for="(slide, index) in slides" :key="index" class="keen-slider__slide rounded-[32px]">
                    <NuxtImg format="webp" :src="slide.src" :alt="slide.alt" width="800" height="800" loading="lazy"
                        fit="cover" class="w-full h-auto" />
                </div>
            </div>

            <!-- Thumbnail Slider Container -->
            <div ref="thumbnailRef" class="keen-slider thumbnail">
                <div v-for="(slide, index) in slides" :key="index" class="keen-slider__slide rounded-[16px]">
                    <NuxtImg format="webp" :src="slide.src" :alt="slide.alt" width="300" height="300" loading="lazy"
                        fit="cover" class="w-full h-auto" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.thumbnail .keen-slider__slide {
    cursor: pointer;
}

.thumbnail .keen-slider__slide.active {
    border: 2px dashed black;
}
</style>