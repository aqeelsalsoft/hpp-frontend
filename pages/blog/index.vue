<template>
    <div class="hpp__blogListingPageWrapper">

        <div class="breadcrumbs__wrap py-[50px]">
            <div class="container mx-auto px-[15px]">
                <ul class="flex items-center gap-[10px]">
                    <li><a href="/" aria-label="Home Page Link"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg></a></li>
                    <li><span class="divider"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg></span></li>
                    <li><span>Blog</span></li>
                </ul>
            </div>
        </div>

        <div class="section__headerWrap mb-[50px]">
            <div class="container mx-auto px-[15px]">
                <div class="inner__wrap w-[800px] mx-auto mb-[50px] text-center">
                    <h1 class="font-headings text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Read inspiring
                        stories about</h1>
                    <p class="font-description mt-6 text-[16px] leading-[24px] text-gray-600 mb-[30px]">Find a variety
                        of informative and engaging blogs, articles, and other resources to help you stay up-to-date on
                        the latest industry trends and insights.</p>

                </div>
            </div>
        </div>

        <div class="blog__listWrapper pt-[50px] pb-[100px]">
            <div class="container mx-auto px-[15px]">

                <div class="grid grid-cols-3 gap-[30px]">

                    <article class="blog__item rounded-[30px] overflow-hidden bg-white border border-[#e5e5e5] shadow-[-1px_3px_10px_0_rgb(0_0_0_/_6%)]">
                        <div class="thumb__wrap">
                            <NuxtLink to="#" class="block relative pt-[55%]">
                                <NuxtImg format="webp" src="/images/blog/cannabis-seed-packaging.webp" alt="Banner Box By Material"
                                    loading="lazy" width="420" height="245"
                                    class="w-full h-full object-cover absolute top-0 left-0" />
                            </NuxtLink>
                        </div>
                        <div class="desc__wrap px-[30px] pt-[30px] pb-[30px]">
                            <div class="blog__metaWrap">
                                <ul class="flex gap-[20px] mb-[20px]">
                                    <li>
                                        <span
                                            class="font-description hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">Knowledge
                                            Base</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="font-headings text-[20px] leading-[24px] font-bold mt-0 mb-[20px]">
                                <NuxtLink to="#">A Guide to
                                    Cannabis Seed Packaging: Everything You Need to Know</NuxtLink>
                            </h2>
                            <NuxtLink to="#"
                                class="group text-[#ef4b5f] inline-flex items-center">
                                <span class="font-description text-[16px]">Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2.5" stroke="currentColor" class="size-4 ml-[10px] transition-all duration-400 ease-in-out group-hover:ml-[15px]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </NuxtLink>
                        </div>
                    </article>

                    <article class="blog__item rounded-[30px] overflow-hidden bg-white border border-[#e5e5e5] shadow-[-1px_3px_10px_0_rgb(0_0_0_/_6%)]">
                        <div class="thumb__wrap">
                            <NuxtLink to="#" class="block relative pt-[55%]">
                                <NuxtImg format="webp" src="/images/blog/custom-gift-boxes.webp" alt="Banner Box By Material"
                                    loading="lazy" width="420" height="245"
                                    class="w-full h-full object-cover absolute top-0 left-0" />
                            </NuxtLink>
                        </div>
                        <div class="desc__wrap px-[30px] pt-[30px] pb-[30px]">
                            <div class="blog__metaWrap">
                                <ul class="flex gap-[20px] mb-[20px]">
                                    <li>
                                        <span
                                            class="font-description hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">Knowledge
                                            Base</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="font-headings text-[20px] leading-[24px] font-bold mt-0 mb-[20px]">
                                <NuxtLink to="#">Custom Shape Gift Boxes With Unique Designs for Special Occasions</NuxtLink>
                            </h2>
                            <NuxtLink to="#"
                                class="group text-[#ef4b5f] inline-flex items-center">
                                <span class="font-description text-[16px]">Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2.5" stroke="currentColor" class="size-4 ml-[10px] transition-all duration-400 ease-in-out group-hover:ml-[15px]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </NuxtLink>
                        </div>
                    </article>

                    <article class="blog__item rounded-[30px] overflow-hidden bg-white border border-[#e5e5e5] shadow-[-1px_3px_10px_0_rgb(0_0_0_/_6%)]">
                        <div class="thumb__wrap">
                            <NuxtLink to="#" class="block relative pt-[55%]">
                                <NuxtImg format="webp" src="/images/blog/corrugated-bins.webp" alt="Banner Box By Material"
                                    loading="lazy" width="420" height="245"
                                    class="w-full h-full object-cover absolute top-0 left-0" />
                            </NuxtLink>
                        </div>
                        <div class="desc__wrap px-[30px] pt-[30px] pb-[30px]">
                            <div class="blog__metaWrap">
                                <ul class="flex gap-[20px] mb-[20px]">
                                    <li>
                                        <span
                                            class="font-description hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">Knowledge
                                            Base</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="font-headings text-[20px] leading-[24px] font-bold mt-0 mb-[20px]">
                                <NuxtLink to="#">How Corrugated Bins Are Revolutionizing E-commerce Packaging: Key Applications</NuxtLink>
                            </h2>
                            <NuxtLink to="#"
                                class="group text-[#ef4b5f] inline-flex items-center">
                                <span class="font-description text-[16px]">Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2.5" stroke="currentColor" class="size-4 ml-[10px] transition-all duration-400 ease-in-out group-hover:ml-[15px]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </NuxtLink>
                        </div>
                    </article>

                    <article class="blog__item rounded-[30px] overflow-hidden bg-white border border-[#e5e5e5] shadow-[-1px_3px_10px_0_rgb(0_0_0_/_6%)]">
                        <div class="thumb__wrap">
                            <NuxtLink to="#" class="block relative pt-[55%]">
                                <NuxtImg format="webp" src="/images/blog/pr-box.webp" alt="Banner Box By Material"
                                    loading="lazy" width="420" height="245"
                                    class="w-full h-full object-cover absolute top-0 left-0" />
                            </NuxtLink>
                        </div>
                        <div class="desc__wrap px-[30px] pt-[30px] pb-[30px]">
                            <div class="blog__metaWrap">
                                <ul class="flex gap-[20px] mb-[20px]">
                                    <li>
                                        <span
                                            class="font-description hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">Knowledge
                                            Base</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="font-headings text-[20px] leading-[24px] font-bold mt-0 mb-[20px]">
                                <NuxtLink to="#">What Is a PR Box? A Guide to Designing PR Boxes for Maximum Brand Impact</NuxtLink>
                            </h2>
                            <NuxtLink to="#"
                                class="group text-[#ef4b5f] inline-flex items-center">
                                <span class="font-description text-[16px]">Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2.5" stroke="currentColor" class="size-4 ml-[10px] transition-all duration-400 ease-in-out group-hover:ml-[15px]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </NuxtLink>
                        </div>
                    </article>

                    <article class="blog__item rounded-[30px] overflow-hidden bg-white border border-[#e5e5e5] shadow-[-1px_3px_10px_0_rgb(0_0_0_/_6%)]">
                        <div class="thumb__wrap">
                            <NuxtLink to="#" class="block relative pt-[55%]">
                                <NuxtImg format="webp" src="/images/blog/designing-limited-edition-packaging.webp" alt="Banner Box By Material"
                                    loading="lazy" width="420" height="245"
                                    class="w-full h-full object-cover absolute top-0 left-0" />
                            </NuxtLink>
                        </div>
                        <div class="desc__wrap px-[30px] pt-[30px] pb-[30px]">
                            <div class="blog__metaWrap">
                                <ul class="flex gap-[20px] mb-[20px]">
                                    <li>
                                        <span
                                            class="font-description hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">Knowledge
                                            Base</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="font-headings text-[20px] leading-[24px] font-bold mt-0 mb-[20px]">
                                <NuxtLink to="#">Designing Limited Edition Packaging: Essential Tips for Impactful Results</NuxtLink>
                            </h2>
                            <NuxtLink to="#"
                                class="group text-[#ef4b5f] inline-flex items-center">
                                <span class="font-description text-[16px]">Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2.5" stroke="currentColor" class="size-4 ml-[10px] transition-all duration-400 ease-in-out group-hover:ml-[15px]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </NuxtLink>
                        </div>
                    </article>

                    <article class="blog__item rounded-[30px] overflow-hidden bg-white border border-[#e5e5e5] shadow-[-1px_3px_10px_0_rgb(0_0_0_/_6%)]">
                        <div class="thumb__wrap">
                            <NuxtLink to="#" class="block relative pt-[55%]">
                                <NuxtImg format="webp" src="/images/blog/pr-boxes.webp" alt="Banner Box By Material"
                                    loading="lazy" width="420" height="245"
                                    class="w-full h-full object-cover absolute top-0 left-0" />
                            </NuxtLink>
                        </div>
                        <div class="desc__wrap px-[30px] pt-[30px] pb-[30px]">
                            <div class="blog__metaWrap">
                                <ul class="flex gap-[20px] mb-[20px]">
                                    <li>
                                        <span
                                            class="font-description hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">Knowledge
                                            Base</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="font-headings text-[20px] leading-[24px] font-bold mt-0 mb-[20px]">
                                <NuxtLink to="#">How to Maximize the Benefits of PR Boxes in Your Marketing Strategy</NuxtLink>
                            </h2>
                            <NuxtLink to="#"
                                class="group text-[#ef4b5f] inline-flex items-center">
                                <span class="font-description text-[16px]">Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2.5" stroke="currentColor" class="size-4 ml-[10px] transition-all duration-400 ease-in-out group-hover:ml-[15px]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </NuxtLink>
                        </div>
                    </article>

                    <article class="blog__item rounded-[30px] overflow-hidden bg-white border border-[#e5e5e5] shadow-[-1px_3px_10px_0_rgb(0_0_0_/_6%)]">
                        <div class="thumb__wrap">
                            <NuxtLink to="#" class="block relative pt-[55%]">
                                <NuxtImg format="webp" src="/images/blog/inspiring-yellow-packaging-ideas.jpg" alt="Banner Box By Material"
                                    loading="lazy" width="420" height="245"
                                    class="w-full h-full object-cover absolute top-0 left-0" />
                            </NuxtLink>
                        </div>
                        <div class="desc__wrap px-[30px] pt-[30px] pb-[30px]">
                            <div class="blog__metaWrap">
                                <ul class="flex gap-[20px] mb-[20px]">
                                    <li>
                                        <span
                                            class="font-description hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">Knowledge
                                            Base</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="font-headings text-[20px] leading-[24px] font-bold mt-0 mb-[20px]">
                                <NuxtLink to="#">10 Inspiring Packaging Ideas to Go Yellow This Season</NuxtLink>
                            </h2>
                            <NuxtLink to="#"
                                class="group text-[#ef4b5f] inline-flex items-center">
                                <span class="font-description text-[16px]">Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2.5" stroke="currentColor" class="size-4 ml-[10px] transition-all duration-400 ease-in-out group-hover:ml-[15px]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </NuxtLink>
                        </div>
                    </article>

                    <article class="blog__item rounded-[30px] overflow-hidden bg-white border border-[#e5e5e5] shadow-[-1px_3px_10px_0_rgb(0_0_0_/_6%)]">
                        <div class="thumb__wrap">
                            <NuxtLink to="#" class="block relative pt-[55%]">
                                <NuxtImg format="webp" src="/images/blog/garment-packaging.jpg" alt="Banner Box By Material"
                                    loading="lazy" width="420" height="245"
                                    class="w-full h-full object-cover absolute top-0 left-0" />
                            </NuxtLink>
                        </div>
                        <div class="desc__wrap px-[30px] pt-[30px] pb-[30px]">
                            <div class="blog__metaWrap">
                                <ul class="flex gap-[20px] mb-[20px]">
                                    <li>
                                        <span
                                            class="font-description hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">Knowledge
                                            Base</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="font-headings text-[20px] leading-[24px] font-bold mt-0 mb-[20px]">
                                <NuxtLink to="#">Inspirational Garment Packaging Ideas: 6 Best Designs</NuxtLink>
                            </h2>
                            <NuxtLink to="#"
                                class="group text-[#ef4b5f] inline-flex items-center">
                                <span class="font-description text-[16px]">Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2.5" stroke="currentColor" class="size-4 ml-[10px] transition-all duration-400 ease-in-out group-hover:ml-[15px]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </NuxtLink>
                        </div>
                    </article>

                    <article class="blog__item rounded-[30px] overflow-hidden bg-white border border-[#e5e5e5] shadow-[-1px_3px_10px_0_rgb(0_0_0_/_6%)]">
                        <div class="thumb__wrap">
                            <NuxtLink to="#" class="block relative pt-[55%]">
                                <NuxtImg format="webp" src="/images/blog/clothing-business.webp" alt="Banner Box By Material"
                                    loading="lazy" width="420" height="245"
                                    class="w-full h-full object-cover absolute top-0 left-0" />
                            </NuxtLink>
                        </div>
                        <div class="desc__wrap px-[30px] pt-[30px] pb-[30px]">
                            <div class="blog__metaWrap">
                                <ul class="flex gap-[20px] mb-[20px]">
                                    <li>
                                        <span
                                            class="font-description hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">Knowledge
                                            Base</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="font-headings text-[20px] leading-[24px] font-bold mt-0 mb-[20px]">
                                <NuxtLink to="#">Essential Packaging Ideas for Clothing Business | Guide for Fashion Entrepreneurs</NuxtLink>
                            </h2>
                            <NuxtLink to="#"
                                class="group text-[#ef4b5f] inline-flex items-center">
                                <span class="font-description text-[16px]">Read More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2.5" stroke="currentColor" class="size-4 ml-[10px] transition-all duration-400 ease-in-out group-hover:ml-[15px]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </NuxtLink>
                        </div>
                    </article>

                </div>

            </div>
        </div>

        <LazyGeneralSampleKitWrapper />
    </div>
</template>
