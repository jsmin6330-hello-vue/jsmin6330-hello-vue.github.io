<script setup>
import { ref, onUpdated, onMounted, onBeforeUpdate } from 'vue'

const count = ref(0)

onMounted(() => {
  console.log("onMounted count: ",document.getElementById('count').textContent)
})

onBeforeUpdate(() => {
  console.log("onBeforeUpdate: count: ",document.getElementById('count').textContent)
})

onUpdated(() => { 
	console.log(document.getElementById('count').textContent)})

</script>

<template>
        <button id = "count" @click = "count++"> {{ count }} </button>
</template>

