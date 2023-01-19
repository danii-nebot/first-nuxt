<script setup lang="ts">
import { AlertBoxPropsType } from "~/library/types";
const props = defineProps<AlertBoxPropsType>();

const computedClass = computed(() => {
  switch (props.type) {
    case "error":
      return "red";
    case "warning":
      return "orange";
    case "success":
      return "green";
    case "info":
      return "blue";
  }
});
</script>

<template>
  <div :class="computedClass">
    <span>this is an alert!</span>
    <slot />
  </div>
</template>

<style scoped>
.red {
  color: red;
}

.green {
  color: green;
}

.orange {
  color: orange;
}

.blue {
  color: blue;
}
</style>
