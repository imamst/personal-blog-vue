<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import AppLayoutHome from "@/layouts/AppLayoutHome";
import { markRaw, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "AppLayout",
  setup() {
    const layout = markRaw(AppLayoutHome);
    const route = useRoute();

    watch(
      () => route.meta,
      async meta => {
        try {
          const component = await import(`@/layouts/${meta.layout}.vue`);
          layout.value = component?.default || AppLayoutHome
        } catch (e) {
          layout.value = AppLayoutHome
        }
      },
      { immediate: true }
    )

    return { layout }
  }
};
</script>

<style></style>
