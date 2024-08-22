<script lang="ts" setup></script>

<template>
    <div class="hpp__instantFormWrapper">
        <div class="px-4 flex flex-wrap items-center justify-center">
            <div class="text-center basis-full mb-[50px] max-w-2xl">
                <h3 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold mb-[15px]">Order a Sample Kit</h3>
                <p class="font-description text-[#212529] text-[14px] leading-[22px]">Get Free Consultation and Order Your Sample Kit to
                    feel More Confident for Choosing Half Price Packaging as your product packaging partner.</p>
            </div>
            <div class="w-full bg-white max-w-[880px] shadow-2xl sm:rounded-3xl flex overflow-hidden">
                <div class="thumbnail__wrap relative overflow-hidden w-[350px]">
                    <NuxtImg format="webp" src="assets/images/sample-kit.jpg" alt="Sample Kit Thumbnail" loading="lazy" width="350"
                        height="457" class="absolute w-full h-full object-cover" />
                </div>
                <div class="form__wrap w-[calc(100%_-_350px)] p-[30px]">
                    <form id="hpp__instantPricesForm" class="mb-0">
                        <div class="flex flex-wrap ml-[-5px] mr-[-5px]">
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-full-name" class="sr-only">Full Name</label>
                                <input type="text" placeholder="Full Name" id="ipf-full-name"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-100 hover:border-gray-300 py-[10px] px-[17px]" />
                            </div>
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-email" class="sr-only">Email</label>
                                <input type="email" placeholder="Email" id="ipf-email"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-100 hover:border-gray-300 py-[10px] px-[17px]" />
                            </div>
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-phone" class="sr-only">Phone</label>
                                <input type="text" placeholder="Phone" id="ipf-phone"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-100 hover:border-gray-300 py-[10px] px-[17px]" />
                            </div>
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-company-name" class="sr-only">Company Name</label>
                                <input type="text" placeholder="Company Name" id="ipf-company-name"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-100 hover:border-gray-300 py-[10px] px-[17px]" />
                            </div>
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-website" class="sr-only">Website</label>
                                <input type="text" placeholder="Website" id="ipf-website"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-100 hover:border-gray-300 py-[10px] px-[17px]" />
                            </div>
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-address" class="sr-only">Physical Address</label>
                                <input type="text" placeholder="Physical Address" id="ipf-address"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-100 hover:border-gray-300 py-[10px] px-[17px]" />
                            </div>
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-quantity" class="sr-only">Quantity</label>
                                <input type="text" placeholder="Quantity" id="ipf-quantity"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-100 hover:border-gray-300 py-[10px] px-[17px]" />
                            </div>
                            <div class="relative basis-[50%] px-[5px] mb-[10px]">
                                <label for="ipf-select-industry" class="sr-only">Select Industry</label>
                                <select name="box-type" id="ipf-select-industry"
                                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-100 hover:border-gray-300 py-[10px] px-[17px]">
                                    <option value="">Select Industry</option>
                                    <option value="Automotive">Automotive</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Bakery">Bakery</option>
                                    <option value="Apparel Fashion">Apparel Fashion</option>
                                    <option value="CBD">CBD</option>
                                    <option value="Tobacco Cigarette">Tobacco Cigarette</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Marijuana Cannabis">Marijuana Cannabis</option>
                                    <option value="Candy Sweets">Candy Sweets</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Food Restaurant">Food Restaurant</option>
                                    <option value="Pharma">Pharma</option>
                                    <option value="Ecommerce">Ecommerce</option>
                                    <option value="Soap">Soap</option>
                                    <option value="Gift">Gift</option>
                                    <option value="Candle">Candle</option>
                                    <option value="Chocolate">Chocolate</option>
                                    <option value="Vape E-Cigarette">Vape E-Cigarette</option>
                                    <option value="Toy Games">Toy Games</option>
                                    <option value="Coffee Tea">Coffee Tea</option>
                                    <option value="Holiday">Holiday</option>
                                    <option value="Pet">Pet</option>
                                    <option value="Presentation">Presentation</option>
                                    <option value="Shipping">Shipping</option>
                                    <option value="Sustainable Packaging">Sustainable Packaging</option>
                                    <option value="Stationery">Stationery</option>
                                    <option value="Baby Products">Baby Products</option>
                                    <option value="Gadgets Accessories">Gadgets Accessories</option>
                                    <option value="Jewelry">Jewelry</option>
                                    <option value="Office Workplace">Office Workplace</option>
                                    <option value="Beverage, Wine, Liqour">Beverage, Wine, Liqour</option>
                                    <option value="Fragrance">Fragrance</option>
                                </select>
                            </div>
                            <div class="flex items-end justify-center basis-full px-[5px] mb-[10px]">
                                <NuxtImg format="webp" src="assets/images/recaptcha-placeholder.png" alt="Sample Kit Thumbnail" loading="lazy" width="350" height="88" class="w-[350px] h-auto" />
                            </div>
                            <div class="flex items-end justify-center basis-full px-[5px]">
                                <button
                                    class="font-description text-[#ffffff] text-[14px] font-medium border border-[#ef4b5f] bg-[#ef4b5f] select-none transition-all py-[8px] px-[35px] rounded-[35px] no-underline select-none font-normal"
                                    type="submit">Order Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
