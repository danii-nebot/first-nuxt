<script setup>
let filters = "";
const { data, refresh } = useFetch("/api/counter/pet?filters=" + filters);

function reloadCounter() {
  // fetches "/api/counter/pet" and updates reactive data
  refresh();
}
</script>
<template>
  <div>
    {{ data.counter }}
    <p>my pet is great</p>
    <img src="" />
    <button @click="reloadCounter">+1</button>
  </div>
</template>
