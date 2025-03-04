<script setup>
defineProps({
    labelName: {
        type: String,
        required: true,
    },
    propsId: {
        required: true,
    },
    inputType: {
        default: 'text',
    },
})

defineEmits(['update:modelValue'])
</script>

<template>
    <div>
        <label class="block text-sm font-medium text-gray-700 mb-1" v-bind:for="propsId">{{ labelName }}</label>
        <input

            @input="$emit('update:modelValue', $event.target.value)"
            :id="propsId"
            :type="inputType"
            placeholder="Enter your email"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
    </div>
</template>

<style scoped>

</style>
