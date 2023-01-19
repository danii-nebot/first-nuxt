<script setup>
const props = defineProps({
  title: String,
});
</script>
<template>
  <Head>
    <Title>{{ props.title }}</Title>
    <Meta name="description" :content="props.title" />
  </Head>
</template>
