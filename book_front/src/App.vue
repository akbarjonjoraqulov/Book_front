<script setup>

import HeaderRow from "@/components/HeaderRow.vue";
import CategoriesCol from "@/components/CategoriesCol.vue";
import PaginationRow from "@/components/PaginationRow.vue";
import FooterRow from "@/components/FooterRow.vue";
import BooksRow from "@/components/BooksRow.vue";
</script>

<template>
    <div class="w-full ">
        <HeaderRow/>
        <div class="flex">
            <CategoriesCol/>
            <div class="w-full md:w-3/4">
                <div class="w-full grid grid-cols-1 gap-4 p-4 lg:grid-cols-3 md:grid-cols-2 md:gap-4 sm:grid-cols-1 md:gap-4">
                    <BooksRow/>
                    <BooksRow/>
                    <BooksRow/>
                    <BooksRow/>
                </div>
                <div class="sm:justify-end w-full flex justify-center">
                    <PaginationRow/>
                </div>
            </div>
        </div>
        <FooterRow/>
    </div>
</template>

<style scoped>

</style>
