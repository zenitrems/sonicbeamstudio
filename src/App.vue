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
import "./styles/style.scss";
export default {
  name: "App",
  components: {
    NavBar,
    Content,
    Footer,
  },
};
</script>
