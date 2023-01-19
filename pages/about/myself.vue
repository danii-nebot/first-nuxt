<script setup>
const { data, error } = await useFetch("/api/counter/overwrite", {
  method: "POST",
  body: { counter: 17 },
});
</script>
<template>
  {{ error }}
  {{ data }}
  <div>me, me, me</div>
</template>
