<template>
    <a href="#" class="rounded-full px-4 py-1 border border-gray-900 hover:bg-gray-900 hover:text-white">{{ category.name }}</a>
</template>

<script>
export default {
    props: {
        category: {
            required: true,
            type: Object
        }
    }
}
</script>

<style>

</style>