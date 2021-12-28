<template>
    <header class="border-b-2 border-gray-100">
        <div class="w-5/6 mx-auto">
            <div class="py-2 flex justify-between items-center space-x-1 ">
                <a href="#" class="font-bold text-lg">Logo</a>
                
                <button class="md:hidden" data-role="mobile-nav-button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                
                <div class="hidden md:flex">
                    <div class="text-lg flex mr-4">
                        <a href="#" class="py-1 px-4 rounded-full border-transparent border-b-2 hover:bg-gray-100">Home</a>
                        <a href="#" class="py-1 px-4 rounded-full border-transparent border-b-2 hover:bg-gray-100">Blog</a>
                        <a href="#" class="py-1 px-4 rounded-full border-transparent border-b-2 hover:bg-gray-100">About</a>
                        <a href="#" class="py-1 px-4 rounded-full border-transparent border-b-2 hover:bg-gray-100">Contact</a>
                    </div>
                
                    <div class="hidden md:flex items-center">
                        <a href="#" class="inline-block px-6 py-2 mr-4 bg-gray-800 hover:bg-gray-900 text-white rounded-full shadow-lg">Login</a>
                        <form action="#" method="get">
                            <input id="search-field" type="text"
                                class="ml-2 w-0 outline-none transition-width duration-300 ease-linear" placeholder="Search">
                            <svg id="search-icon" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block text-gray-900 cursor-pointer"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </form>
                    </div>
                </div>
            </div>

            <!-- mobile menu -->
            <div class="hidden md:hidden pb-8" data-role="mobile-nav">
                <a href="#" class="block p-2 hover:bg-gray-100 hover:border-l-2 hover:border-gray-800">Home</a>
                <a href="#" class="block p-2 hover:bg-gray-100 hover:border-l-2 hover:border-gray-800">Blog</a>
                <a href="#" class="block p-2 hover:bg-gray-100 hover:border-l-2 hover:border-gray-800">About</a>
                <a href="#" class="block p-2 hover:bg-gray-100 hover:border-l-2 hover:border-gray-800">Contact</a>
                <div class="flex flex-col mt-4 text-center">
                    <a href="#" class="inline-block px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-full shadow-lg">Login</a>
                    <form action="#" method="get" class="mt-8 w-full p-2 border border-gray-200 rounded-full flex">
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
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppLayoutHomeNavbar'
}
</script>
