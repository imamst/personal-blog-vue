<template>
    <footer class="flex justify-center w-5/6 mx-auto py-4">
        <span>&copy; {{ year }} | All Rights Reserved</span>
    </footer>
</template>

<script>
export default {
    name: 'AppLayoutHomeFooter',
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>
