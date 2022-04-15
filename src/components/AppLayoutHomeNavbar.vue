<template>
    <header class="border-b-2 border-gray-100">
        <div class="md:w-5/6 mx-auto relative">
            <div class="border-b-2 border-gray-100 md:border-b-0 md:border-transparent py-2 px-8 md:px-0 flex justify-between items-center space-x-1 ">
                <a href="#" class="font-bold text-lg">Logo</a>
                
                <div class="hidden md:flex">
                    <div class="text-lg flex mr-4">
                        <a v-for="menu in menus" :key="menu.name" :href="menu.url" class="py-1 px-4 rounded-full border-transparent border-b-2 hover:bg-gray-100">{{ menu.name }}</a>
                    </div>
                
                    <div class="hidden md:flex items-center">
                        <a href="#" class="inline-block px-6 py-2 mr-4 bg-gray-800 hover:bg-gray-900 text-white rounded-full shadow-lg">Login</a>
                        <form action="#" method="get" @submit.prevent="searchPosts">
                            <input v-model="form.keyword" type="text"
                                :class="['ml-2 w-0 outline-none transition-width duration-300 ease-linear', searchExpanded ? 'w-40' : '']" placeholder="Search" ref="keyword">
                            <svg @click="toggleSearchInput" id="search-icon" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block text-gray-900 cursor-pointer"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </form>
                    </div>
                </div>

                <button @click="isMobileNavOpen = !isMobileNavOpen" class="md:hidden" data-role="mobile-nav-button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <!-- mobile menu -->
            <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false">
                <div v-if="isMobileNavOpen" class="md:hidden text-left bg-white absolute w-full border-b-2 border-gray-100" data-role="mobile-nav">
                    <a v-for="menu in menus" :key="menu.name" :href="menu.url" class="block py-2 px-8 hover:bg-gray-100">{{ menu.name }}</a>
                    <div class="flex flex-col mt-4 text-center px-8 mb-8">
                        <a href="#" class="inline-block px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-full shadow-lg">Login</a>
                        <form action="#" method="get" @submit.prevent="searchPosts" class="mt-8 w-full p-2 border border-gray-200 rounded-full flex">
                            <input type="text" class="ml-2 outline-none flex-grow"
                                placeholder="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  text-gray-400" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </form>
                    </div>
                </div>
            </transition>
        </div>
    </header>
</template>

<script>
import Velocity from 'velocity-animate'
import { mapActions } from 'vuex'

export default {
    name: 'AppLayoutHomeNavbar',
    data() {
        return {
            menus: [
                {
                    name: 'Home',
                    url: '#',
                    isActive: false,
                },
                {
                    name: 'Blog',
                    url: '#',
                    isActive: false,
                },
                {
                    name: 'About',
                    url: '#',
                    isActive: false,
                },
                {
                    name: 'Contact',
                    url: '#',
                    isActive: false,
                },
            ],
            searchExpanded: false,
            searchInputFocused: false,
            form: {
                keyword: ''
            },
            isMobileNavOpen: false
        }
    },
    methods: {
        toggleSearchInput() {
            this.searchExpanded = !this.searchExpanded
            this.searchInputFocused = !this.searchInputFocused

            if(this.searchInputFocused) {
                this.$refs.keyword.focus()
            } else {
                this.$refs.keyword.blur()
                this.form.keyword = ''
            }
        },
        beforeEnter(el) {
            el.style.opacity = 0;
            el.style.maxHeight = '0px';
        },
        enter(el, done) {
            Velocity(
                el,
                { opacity: 1, maxHeight: '400px' },
                { duration: 1000, easing: 'easeOutCubic', complete: done }
            )
        },
        leave(el, done) {
            Velocity(
                el,
                { opacity: 0, maxHeight: '0px' },
                { duration: 500, easing: 'easeInCubic', complete: done }
            )
        },
        ...mapActions('post', ['searchPosts']),
    }
}
</script>
