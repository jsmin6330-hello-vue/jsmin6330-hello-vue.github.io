<script setup>
import { ref } from 'vue'

const message = ref('')
</script>

<template>
        <span>Muiltiline message is: </span>
	<p style="white-space: pre-line;"> {{ message }} </p>
	<textarea v-model = "message" placeholder = "add multiple lines" ></textarea>
</template>
