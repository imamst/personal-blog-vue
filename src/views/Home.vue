<template>
  <div class="text-left flex-grow py-14 w-5/6 lg:w-3/5 mx-auto">
    <div v-if="post.posts.length == 0" class="animate-pulse">
      <h1 class="h-10 w-72 bg-gray-200"></h1>
      <PostItemSkeleton v-for="n in 10" :key="n" />
    </div>
    <div v-else>
      <h1 class="font-bold text-3xl my-6">Latest Tutorials</h1>
      <PostItem v-for="post in post.posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import PostItemSkeleton from "@/components/PostItemSkeleton.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    PostItem,
    PostItemSkeleton
  },
  created() {
    this.fetchPosts();
  },
  computed: {
    ...mapState(['post'])
  },
  methods: {
    ...mapActions('post', ['fetchPosts'])
  }
};
</script>
