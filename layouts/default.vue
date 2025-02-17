<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Nuxt Prep</NuxtLink>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.router-link-active, .router-link-exact-active {
    color: green;
}
</style>