<template>
  <div class="text-left flex-grow py-14 w-5/6 lg:w-3/5 mx-auto">
      <h1 class="font-bold text-3xl my-6">Latest Tutorials</h1>
      <CategoryBadgeGroup />
      <PostItem />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import CategoryBadgeGroup from "@/components/CategoryBadgeGroup.vue";

export default {
  name: "Home",
  components: {
    PostItem,
    CategoryBadgeGroup
  }
};
</script>
