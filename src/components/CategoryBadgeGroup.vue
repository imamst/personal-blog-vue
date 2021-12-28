<template>
    <div class="my-4 flex flex-wrap items-start gap-2">
        <CategoryBadge v-for="category in categories" :key="category.id" :category="category" />
    </div>
</template>

<script>
import CategoryBadge from "@/components/CategoryBadge.vue"

export default {
    name: "CategoryBadgeGroup",
    components: {
        CategoryBadge
    },
    props: {
        categories: {
            required: true,
            type: Object
        }
    }
}
</script>
