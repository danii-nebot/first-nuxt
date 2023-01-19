<script lang="ts" setup>
const { x, y } = useMouseTracker();

const counter = useState("counter", () => 1);
function increment() {
  counter.value++;
}

const { data }: any = await useFetch("https://yesno.wtf/api");

const image = data.value.image;
const answer = data.value.answer;

// function load() {
//   $fetch();
// }
</script>
<template>
  <div>
    <h2>Mouse position is at: {{ x }}, {{ y }}</h2>
    <h2>counter is: {{ counter }}</h2>

    <button
      class="p-4 border border-black rounded-xl bg-gray-500"
      @click="increment"
    >
      Increment counter
    </button>

    <!-- <button @click="onLogin">LOGIN</button> -->
    <h1 class="text-3xl font-bold underline flex con">
      This is my landing page!
    </h1>
    <AlertBox type="warning" border> <div>Success!</div></AlertBox>
    <img :src="image" />
  </div>
</template>
