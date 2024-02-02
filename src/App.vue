<script setup>
import { ref } from 'vue'

const show = ref(true)
const list = ref([1, 2, 3])
let person = 4

function onoff(){
	show.value = !show.value
}
function addlist(){
	list.value.push(person++)
}
function removelist(){
	list.value.pop()
}
function reverselist(){
	list.value.reverse()
}

</script>

<template>
        <button @click="onoff()">List 랜더링 On/Off </button>
        <button @click="addlist()">List 추가 </button>
        <button @click="removelist">List 제거 </button>
        <button @click="reverselist()">List 뒤집기 </button>
	
	<template v-if="show">
        <ul>
                <li v-for="item of list"> {{ item }} </li>
        </ul>
	</template>
        <p v-else-if= "list.length">List is not empty, but hidden.</p>
        <p v-else>List is empty.</p>
</template>
