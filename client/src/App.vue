<template>
  <div class="vh100 overflow-hidden">
    <CustomNavbar v-if="this.$route.path !== '/login'"/>
    <RouterView />
  </div>
</template>

<script>
import CustomNavbar from './components/CustomNavbar.vue';
export default {
  name: "App",
  components: {
    CustomNavbar
  }
}
</script>

<style>

</style>