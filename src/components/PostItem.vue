<template>
    <div class="py-8 border-b-2 border-gray-200">
        <div>
        <a href="#">
            <img src="../assets/profile.jpg" alt="Profile picture" class="rounded-full h-8 w-8 inline-block">
            <span class="ml-2">Imam Setiawan</span>
        </a>
        <span class="text-gray-400 ml-2">Des 21</span>
        </div>
        <div class="flex justify-between space-x-10 mt-4">
            <div class="w-3/4">
                <a href="#">
                    <h2 class="text-xl md:text-2xl font-bold mb-2">Laravel Best Practices You Should Follow</h2>
                </a>
                <div class="hidden md:block">
                    <p>To make Laravel development a breeze, you need to follow the best practices from time to time. Here
                        in this article,
                        I
                        will be taking up the opportunity to discuss some of such best practices that you should follow...
                    </p>
                </div>
                <div class="mt-4">
                    <a href="#" class="rounded-full px-4 py-1 border border-gray-900 hover:bg-gray-900 hover:text-white">Laravel</a>
                </div>
            </div>
            <div class="w-1/4">
                <img src="../assets/img.jpg" alt="Laravel">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostItem"
}
</script>

<style>

</style>