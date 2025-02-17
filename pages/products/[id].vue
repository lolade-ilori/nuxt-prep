<template>
    <div>
        <h2>This is for Product {{ id }}</h2>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, odit consequatur deleniti ratione cupiditate quos libero recusandae pariatur, sit quas corrupti. Quam doloribus similique obcaecati rerum recusandae dolor laboriosam porro.</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params

definePageMeta({
    layout: 'products'
})
</script>

<style lang="scss" scoped>

</style>