<script setup>
import { computed, onMounted } from "vue";
import { useFetchCategories } from "@/stores/category/getCategory.js";

const categoryStore = useFetchCategories();

onMounted(() => {
    categoryStore.categoriesGet();
});

const categories = computed(() => categoryStore.state.categories);

</script>

<template>
    <div class="hidden sm:flex space-y-4 flex-col p-2 bg-gray-100 shadow-sm w-1/4">
        <a v-for="category in categories" :key="category.id">
            {{ category.name }}
        </a>
    </div>
</template>

<style scoped>

</style>
