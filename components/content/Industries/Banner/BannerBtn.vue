<template>
    <NuxtLink to="#"
        class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#ef4b5f] rounded-[35px] py-[8px] px-[40px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
        <ContentSlot :use="$slots.default" unwrap="p" />
    </NuxtLink>
    <!-- <div class="btn__wrapper">
        <NuxtLink to="#"
            class="font-description inline-block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#ef4b5f] rounded-[35px] py-[8px] px-[40px] border border-[#ef4b5f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">
            Browse Products</NuxtLink>
    </div> -->
</template>
