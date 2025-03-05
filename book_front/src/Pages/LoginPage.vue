<script setup>
import FormInput from "@/components/tags/FormInput.vue";
import FormButton from "@/components/tags/FormButton.vue";
import {reactive, ref} from "vue";
import {useAuthorization} from "@/stores/users/authorization.js";
import {useRouter} from "vue-router";

const router = useRouter();
console.log(router);

let isLoading = ref();
let authorization = reactive({
    email: "",
    password: "",
});

function auth() {
    isLoading.value = true
    useAuthorization().userAuth(authorization)
        .then(() => {
            router.push("/")
        })
}

</script>

<template>

    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
            <form @submit.prevent="auth" class="space-y-4">
                <FormInput v-model="authorization.email" props-id="email" label-name="email" input-type="email"/>
                <FormInput v-model="authorization.password" props-id="password" label-name="password"/>
                <FormButton text="Login" :loading="isLoading"/>
            </form>
        </div>
    </div>

</template>

<style scoped>

</style>
