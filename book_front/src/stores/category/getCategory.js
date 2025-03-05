import {defineStore} from "pinia";
import {client} from "@/Plugins/axios.js";
import {reactive} from "vue";

export const useFetchCategories = defineStore('fetchCategories', () => {
    const state = reactive({
        categories: [],
        count: 0
    })

    function categoriesGet() {
        return new Promise((resolve, reject) => {
            client.get('/categories')
                .then((response) => {
                    console.log('API Response:', response);
                    state.categories = response.data['member'];
                    state.count = response.data['totalItems'];
                    resolve();
                })
                .catch((error) => {
                    console.log('Xatolik yuz berdi!');
                    reject(error);
                });
        });
    }

    return {categoriesGet, state}
})
