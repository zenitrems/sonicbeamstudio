<template>
  <div id="app">
    <navigation />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Navigation from "./components/NavBar";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
};
</script>
