<script setup>

import FooterRow from "@/components/FooterRow.vue";
import CategoriesCol from "@/components/CategoriesCol.vue";
import HeaderRow from "@/components/HeaderRow.vue";
</script>

<template>
    <div class="w-full ">
        <HeaderRow/>
        <div class="flex w-full">
            <CategoriesCol/>
            <router-view/>
        </div>
        <FooterRow/>
    </div>
</template>

<style scoped>

</style>