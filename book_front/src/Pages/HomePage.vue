<script setup>

import BooksRow from "@/components/BooksRow.vue";
import PaginationRow from "@/components/PaginationRow.vue";
</script>

<template>
<div class="w-3/4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
        <BooksRow/>
        <BooksRow/>
        <BooksRow/>
        <BooksRow/>
        <BooksRow/>
        <BooksRow/>
    </div>
    <div class="sm:justify-end w-full flex justify-center">
        <PaginationRow/>
    </div>
</div>
</template>

<style scoped>

</style>
