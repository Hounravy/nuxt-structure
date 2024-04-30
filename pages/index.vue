<template>
    <div>
   <PagesHomePage :products="products"/>
    </div>
</template>

<script setup>

const {apiBase} = useRuntimeConfig().public;
 const { data: products } = await useFetch(`${apiBase}/products?limit=12&sort=desc`);

</script>
<style  scoped>

</style>