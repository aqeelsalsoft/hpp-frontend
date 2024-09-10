<script lang="ts" setup></script>

<template>
    <div class="hpp__featuredProductsWrapper">
        <div class="hpp__productsInner">
            <ClientOnly fallbackTag="span">
                <ProductDetailRelatedProductsItemSlider />
            </ClientOnly>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
