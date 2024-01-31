<script setup>
import { ref } from 'vue'
const awesome = ref(true)

function toggleAwesome(){
	isAwesome()
}

function isAwesome(){
	awesome.value = !awesome.value
}

</script>

<template>
	<button @click = "toggleAwesome">toggle</button>

	<h1 v-if="awesome">Vue is awesome!</h1>
	<h1 v-else>Oh no 🥲</h1>

	<h4 v-if="awesome">True</h4>
	<h4 v-show="awesome">True</h4>
</template>
