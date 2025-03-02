<script setup>

</script>

<template>
    <nav class=" flex bg-black justify-between items-center p-2 text-gray-400">
        <div class="relative">
            <input type="checkbox" id="mobileMenuToggle" class="peer hidden">
            <label for="mobileMenuToggle" class="md:hidden flex items-center gap-2 px-4 py-2rounded-lg">
                Home
                <svg class="w-4 h-4 transition-transform peer-checked:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </label>
            <ul class="absolute left-0 w-48 bg-white border border-gray-300 rounded-lg shadow-lg hidden peer-checked:block md:static md:flex md:gap-4 md:w-auto md:border-none md:shadow-none md:bg-transparent">
                <li><a href="#" class="block px-4 py-2 hover:bg-gray-200 md:hover:bg-transparent">Home</a></li>
                <li><a href="#" class="block px-4 py-2 hover:bg-gray-200 md:hover:bg-transparent">Link</a></li>
                <li class="relative">
                    <input type="checkbox" id="dropdownToggle" class="peer hidden">
                    <label for="dropdownToggle" class="flex items-center gap-2 px-4 py-2 cursor-pointer md:bg-transparent">
                        Menyu
                        <svg class="w-4 h-4 transition-transform peer-checked:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </label>
                    <div class="absolute mt-2 w-40 bg-gray-50 border border-gray-300 rounded-lg shadow-lg hidden peer-checked:block">
                        <a href="#" class="block px-4 py-2 hover:bg-gray-200">Option 1</a>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-200">Option 2</a>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-200">Option 3</a>
                    </div>
                </li>
                <li><a href="#" class="block px-4 py-2 hover:bg-gray-200 md:hover:bg-transparent">Disabled</a></li>
            </ul>
        </div>

        <div class="flex gap-4">
            <input type="text" placeholder="Search"
                   class="md:w-auto w-24 py-1 text-center rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"/>
            <button class="border border-green-300 rounded-xl px-4 py-1 text-green-300 hidden md:block">Search</button>
        </div>
    </nav>
</template>

<style scoped>

</style>
