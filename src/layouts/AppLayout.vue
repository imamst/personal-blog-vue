<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import AppLayoutHome from "@/layouts/AppLayoutHome";

export default {
  name: "AppLayout",
  data: () => ({
    layout: AppLayoutHome,
  }),
  watch: {
    $route: {
      immediate: true, //immediate fired on created
      async handler(route) {
        try {
          const component = await import(`@/layouts/${route.meta.layout}.vue`);
          this.layout = component?.default || AppLayoutHome;
        } catch (e) {
          this.layout = AppLayoutHome;
        }
      },
    },
  },
};
</script>

<style></style>
