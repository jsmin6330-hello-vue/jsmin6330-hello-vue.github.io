<script setup>
import { ref } from 'vue'
import amibodata from "@/assets/amiibo.json"

const amibolist = ref(amibodata)

function keyword(name){
	return name.includes('z');
}

</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>이름(영문)</th>
          <th>이름(한국어)</th>
          <th>주로 하는 생각</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(amiibo) in amibolist">
          <template v-if="keyword(amiibo.name)">
	  <td>{{ amiibo.name }}</td>
          <td>{{ amiibo.translations.kRko }}</td>
          <td>{{ amiibo.thoughtBubble }}</td>
	</template>
        </tr>
      </tbody>
    </table>
  </div>
</template>
