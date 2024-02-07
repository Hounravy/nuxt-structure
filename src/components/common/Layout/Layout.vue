<template>
    <div>
        <NavBar/>
        <slot/>
        <Footer/>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
    export default {
        name: 'Layout',
        components: {
            NavBar,
            Footer
            
        }
    }
</script>

<style lang="scss" scoped>

</style>