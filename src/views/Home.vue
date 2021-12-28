<template>
  <div class="text-left flex-grow py-14 w-5/6 lg:w-3/5 mx-auto">
      <h1 class="font-bold text-3xl my-6">Latest Tutorials</h1>
      <PostItem v-for="post in post.posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    PostItem
  },
  created() {
    this.fetchPosts()
      .catch(error => {
        console.log(error);
      })
  },
  computed: {
    ...mapState(['post'])
  },
  methods: {
    ...mapActions('post', ['fetchPosts'])
  }
};
</script>
