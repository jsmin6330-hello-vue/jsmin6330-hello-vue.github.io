<script setup>
import {reactive, computed, ref} from 'vue'

const author = ref({
	name: 'John Doe',
	books: [1, 2, 3]
})
</script>

<template>
	<p>Has published books:</p>
	<span>{{ author.books.length > 2? 'Yes' : 'No' }} </span>
</template>
