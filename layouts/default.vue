<template>
<NavBar/>
<slot/>
<Footer/>
</template>

<script setup>
import NavBar from '~/src/components/common/Layout/NavBar.vue';
import Footer from '~/src/components/common/Layout/Footer.vue';
</script>

<style  scoped>

</style>