<script setup>

</script>

<template>
    <div
        class=" grid grid-cols-1">
        <div class="bg-white rounded-lg shadow-md border border-gray-200 ">
            <img class="w-full h-60 object-cover" src="https://via.placeholder.com/200x300" alt="Kitob rasmi">

            <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">Kitob nomi</h3>
                <p class="text-gray-700 mt-2 line-clamp-3">
                    Bu yerda kitob haqida qisqacha ma'lumot yoziladi. O'quvchini qiziqtiradigan tavsif.
                </p>

                <div class="mt-4 flex justify-between items-center">
                        <router-link to="/book_info"
                                     class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">O'qish
                        </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>