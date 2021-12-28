<template>
  <div class="text-left flex-grow py-14 w-5/6 lg:w-3/5 mx-auto">
      <h1 class="font-bold text-3xl my-6">Latest Tutorials</h1>
      <CategoryBadges />
      <PostItem />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import CategoryBadges from "@/components/CategoryBadges.vue";

export default {
  name: "Home",
  components: {
    PostItem,
    CategoryBadges
  }
};
</script>
