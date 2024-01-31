<script setup>
import { ref } from 'vue'

const message = ref('Hello World')
const message_info = ref({name: "soomin", age: 29})

</script>

<template>
	<h1>{{ message }}</h1>
	<h1>{{ message_info }}</h1>
</template>
