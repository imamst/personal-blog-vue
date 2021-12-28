<template>
    <div class="py-8 border-b-2 border-gray-200">
        <div>
        <a href="#">
            <img src="../assets/profile.jpg" alt="Profile picture" class="rounded-full h-8 w-8 inline-block">
            <span class="ml-2">{{ post.author_name }}</span>
        </a>
        <span class="text-gray-400 ml-2">{{ dayjs(post.published_date).format("DD MMMM YYYY") }}</span>
        </div>
        <div class="flex justify-between space-x-10 mt-4">
            <div class="w-3/4">
                <a href="#">
                    <h2 class="text-xl md:text-2xl font-bold mb-2">{{ post.title }}</h2>
                </a>
                <div class="hidden md:block">
                    {{ post.excerpt }}
                </div>
                <CategoryBadgeGroup :categories="post.categories" />
            </div>
            <div class="w-1/4">
                <img :src="post.featured_img" :alt="post.title">
            </div>
        </div>
    </div>
</template>

<script>
import CategoryBadgeGroup from "@/components/CategoryBadgeGroup.vue";

export default {
    name: "PostItem",
    components: {
        CategoryBadgeGroup
    },
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    inject: {
        dayjs: {
            from: 'dayjs'
        }
    }
}
</script>
