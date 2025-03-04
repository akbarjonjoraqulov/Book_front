<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
    loading: {
        type: Boolean,
        default: false,
    }
})
</script>

<template>
    <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
    >
        <span>{{ text }}</span>
        <span v-if="loading"
              class="spinner border-2 border-t-transparent border-white rounded-full w-4 h-4 mr-2"></span>
    </button>
</template>

<style scoped>

</style>
