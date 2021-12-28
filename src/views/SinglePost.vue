<template>
    <div class="flex-grow justify-inline-start py-14 w-5/6 lg:w-3/5 mx-auto">
        <h1 class="font-bold text-3xl">Laravel Best Practices You Should Follow</h1>
        <div class="mt-2 flex items-center space-x-4 text-gray-500">
            <small>In <a href="#" class="border-b border-gray-200 text-gray-900">Laravel</a></small>
            <small>Tags <a href="#" class="border-b border-gray-200 text-gray-900">php</a></small>
            <small>December 24, 2021</small>
            <a href="#">
                <img src="../assets/profile.jpg" alt="Profile picture" class="rounded-full h-6 w-6 inline-block">
                <small class="ml-2 border-b border-gray-200 text-gray-900">Imam Setiawan</small>
            </a>
        </div>
        <div class="mt-8 mb-2">
            <img class="rounded-lg" src="../assets/img.jpg" alt="Featured image">
        </div>
        <div class="py-6">
            <p>To make Laravel development a breeze, you need to follow the best practices from time to time. Here in this article, I
            will be taking up the opportunity to discuss some of such best practices that you should follow in your Laravel project.</p>
            <h2 class="font-bold">Best Practices for Laravel Development</h2>
            <h3 class="font-bold">Single responsibility principle</h3>
            <p>A class and a method should have only one responsibility.</p>
            <p>Wrong approach:</p>
            <code>
                public function getFullNameAttribute()
                {
                    return "Imam Setiawan"
                }
            </code>
        </div>
        <div class="py-8 border-y-2 border-gray-100 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div class="w-20">
                <a href="#">
                    <img src="../assets/profile.jpg" alt="Profile picture" class="rounded-full">
                </a>
            </div>
            <div>
                <p class="font-bold">Imam Setiawan</p>
                <p class="text-sm mt-2">I’m a professional and passionate Full Stack Developer with ability to write Test-Driven and
                    Clean code from scratch
                    through Laravel and Vue.JS/ React.Js.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SinglePost'
}
</script>

<style>

</style>