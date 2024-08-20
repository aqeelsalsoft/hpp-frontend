<script lang="ts" setup></script>

<template>
    <div class="hpp__searchBarWrapper px-[15px]">
        <div class="search__innerWrap relative w-[460px]">
            <div class="field__wrap">
                <input type="text" name="hpp__search" id="hpp__search" placeholder="Search" class="w-full bg-[#f2f2f2] rounded-[30px] py-[10px] pr-[55px] pl-[25px] focus:outline-none active:outline-none" />
            </div>
            <button class="search__btnWrap absolute top-0 right-0 h-[100%] py-[3px] pl-[8px] pr-[20px]" aria-label="Search Button">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-[20px]" width="29.414" height="29.414" viewBox="0 0 29.414 29.414">
                    <g id="Group_21863" data-name="Group 21863" transform="translate(1 1)">
                        <path id="Path_40" data-name="Path 40" d="M28.5,16.5a12,12,0,1,1-12-12A12,12,0,0,1,28.5,16.5Z"
                            transform="translate(-4.5 -4.5)" fill="none" stroke="#828282" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_41" data-name="Path 41" d="M31.5,31.5l-6.525-6.525"
                            transform="translate(-4.5 -4.5)" fill="none" stroke="#828282" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" />
                    </g>
                </svg>

            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
