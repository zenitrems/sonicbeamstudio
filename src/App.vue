<template>
  <div id="app">
    <NavBar />
    <Content />
    <Footer />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Content,
    Footer,
  },
};
</script>
<style scoped>
#app {
  text-align: center;
  align-content: center;
}
</style>
