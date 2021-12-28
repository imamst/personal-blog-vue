<template>
    <div class="2xl:container mx-auto min-h-screen flex flex-col justify-between">
        <AppLayoutHomeNavbar />
        <slot />
        <AppLayoutHomeFooter />
    </div>
</template>

<script>
import AppLayoutHomeNavbar from "@/components/AppLayoutHomeNavbar.vue";
import AppLayoutHomeFooter from "@/components/AppLayoutHomeFooter.vue";

export default {
    name: "AppLayoutHome",
    components: {
        AppLayoutHomeNavbar,
        AppLayoutHomeFooter
    }
};
</script>
