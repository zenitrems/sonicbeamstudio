<template>
  <div id="app">
    <navigation />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Navigation from "./components/includes/NavBar.vue";
import Footer from "./components/includes/Footer.vue";
export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
};
</script>
