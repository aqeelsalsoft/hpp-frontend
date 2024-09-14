<script lang="ts" setup></script>

<template>
    <div class="hpp__startJourneyCTAWrapper">
        <div class="flex">
            <div class="main__gridWrap basis-1/2">
                <ClientOnly fallback-tag="span" fallback="Loading comments...">
                    <GeneralGreenInitiativeLargeGrid />
                </ClientOnly>
            </div>
            <div class="flex flex-wrap basis-1/2">
                <ClientOnly fallback-tag="span" fallback="Loading comments...">
                    <GeneralGreenInitiativeSmallGridOne />
                </ClientOnly>
                <ClientOnly fallback-tag="span" fallback="Loading comments...">
                    <GeneralGreenInitiativeSmallGridTwo />
                </ClientOnly>
                <ClientOnly fallback-tag="span" fallback="Loading comments...">
                    <GeneralGreenInitiativeSmallGridThree />
                </ClientOnly>
                <ClientOnly fallback-tag="span" fallback="Loading comments...">
                    <GeneralGreenInitiativeSmallGridFour />
                </ClientOnly>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
