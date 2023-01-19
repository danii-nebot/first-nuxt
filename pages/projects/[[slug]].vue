<script setup>
import { useUserStore } from "~/store/user";
const userStore = useUserStore();

const route = useRoute();
const titleText =
  route.params.slug === "best" ? "My best project" : "My worst project";
const title = ref(titleText);

const counter = useState("counter", () => 2);

definePageMeta({
  // middleware: ["auth"],
});
</script>
<template>
  <div>
    <SeoHead :title="title" />

    The counter is: {{ counter }}
    This is my awesome projects page
    <br />
    {{ $route.params.slug }}
  </div>
</template>
