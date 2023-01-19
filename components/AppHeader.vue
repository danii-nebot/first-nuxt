<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "~/store/user";
// const { x, y, color } = useMouse("b");
const { x, y } = useMouseTracker();
const userStore = useUserStore();
const { fullName } = storeToRefs(userStore);

const counter = useState("counter", () => 3);
</script>
<template>
  <header class="margin20">
    <div>
      <!-- {{ fullName }} -->
      {{ x }}, {{ y }},
      {{ counter }}
    </div>
    <ul class="flex">
      <li class="p-2">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="p-2">
        <NuxtLink to="/about/myself">About Myself</NuxtLink>
      </li>
      |
      <li class="p-2">
        <NuxtLink to="/about/my-pet">About my pet</NuxtLink>
      </li>
      |
      <li class="p-2">
        <NuxtLink to="/projects">My projects</NuxtLink>
      </li>
      |
      <li class="p-2">
        <NuxtLink to="/asdf">???</NuxtLink>
      </li>
    </ul>
  </header>
</template>
<style scoped>
.margin20 {
  margin: 20px;
}
/* ... */
</style>
