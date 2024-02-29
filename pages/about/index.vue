<template>
    <div>
<p>about: {{ slug }}</p>
    </div>
</template>

<script setup>
const route = useRoute();
const path = route.path;
const slug = path === '/' ? '' : path.substring(1); 
</script>

<style  scoped>

</style>