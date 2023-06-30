<template>
    <div>
        <input v-model="name" type="text" placeholder="Tên"/>
        <span v-if="!$v.name.required"> Tên không được để trống </span>
        <span v-if="!$v.name.minLength"> Tên phải có ít nhất 3 kí tự</span>
        <button @click="validateForm"> Kiểm tra </button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';

const name = ref<string>('');

const rules = {
    name: {
        required,
        minLength: minLength(3),
    }
};

const $v = useVuelidate(rules, {name});

const validateForm = () => {
    $v.value.$touch();

    // Co bao loi 
    console.log($v.value.$error);

    // Cac loai loi
    console.log($v.value.$errors);

    // Ten loi (validator)
    console.log($v.value.$errors[0].$validator);
};
</script>
