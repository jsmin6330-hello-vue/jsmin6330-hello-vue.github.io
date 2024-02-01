<script setup>
import { ref, onUpdated, onMounted, onBeforeUpdate } from 'vue'

const count = ref(0)

onMounted(() => {
  console.log("Component mounted")
})

onBeforeUpdate(() => {
  console.log("Component is about to update")
})

onUpdated(() => { 
	console.log(document.getElementById('count').textContent)})

</script>

<template>
        <button id = "count" @click = "count++"> {{ count }} </button>
</template>

