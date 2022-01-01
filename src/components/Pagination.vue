<template>
    <div class="flex mt-12 justify-center">
        <a type="button" @click="goToFirstPage" :disabled="isPaginationFirstDisabled" :class="['pagination-button rounded-l-md', isPaginationFirstDisabled ? 'disabled' : '']">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
        </a>
        <a type="button" @click="goToPrevPage" :disabled="isPaginationFirstDisabled" :class="['pagination-button', isPaginationFirstDisabled ? 'disabled' : '']">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        </a>
        <a type="button" @click="goToPage(n)" :class="['pagination-button', meta.current_page == n ? 'active' : '']" v-for="n in meta.last_page" :key="n">
            {{ n }}
        </a>
        <a type="button" @click="goToNextPage" :disabled="isPaginationLastDisabled" :class="['pagination-button', isPaginationLastDisabled ? 'disabled' : '']">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </a>
        <a type="button" @click="goToLastPage" :disabled="isPaginationLastDisabled" :class="['pagination-button rounded-r-md', isPaginationLastDisabled ? 'disabled' : '']">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </a>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    beforeUpdate() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    },
    updated() {
        this.$emit('toggleLoading')
    },
    props: [
        'meta',
    ],
    emits: [
        'toggleLoading',
    ],
    computed: {
        isPaginationFirstDisabled() {
            return this.meta.current_page == 1
        },
        isPaginationLastDisabled() {
            return this.meta.current_page == this.meta.last_page
        },
    },
    methods: {
        ...mapActions('post', ['fetchPosts']),
        refreshPosts(page = 1) {
            this.$emit('toggleLoading')
            this.fetchPosts(page)
        },
        goToFirstPage() {
            this.refreshPosts()
        },
        goToPrevPage() {
            this.refreshPosts(this.meta.current_page - 1)
        },
        goToPage(page) {
            this.refreshPosts(page)
        },
        goToNextPage() {
            this.refreshPosts(this.meta.current_page + 1)
        },
        goToLastPage() {
            this.refreshPosts(this.meta.last_page);
        },
    },
}
</script>

<style>
.pagination-button {
    @apply py-2 px-4 border border-gray-300 cursor-pointer hover:bg-gray-900 hover:text-white hover:border-gray-900;
}
.pagination-button.active {
    @apply bg-gray-900 text-white border-gray-900;
}
.disabled {
    @apply pointer-events-none cursor-default bg-gray-200 hover:bg-gray-200 hover:text-current hover:border-gray-300 opacity-50;
}
</style>
