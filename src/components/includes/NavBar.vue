<template>
  <div>
    <v-app-bar app dark dense inverted-scroll>
      <v-app-bar-nav-icon>
        <v-img contain src="../../assets/sonic_logo.png" width="60"></v-img>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn text> INICIO </v-btn>
      <v-btn text> SERVICIOS </v-btn>
      <v-btn text> PORTAFOLIO </v-btn>
      <v-btn text> RENTA DE EQUIPO </v-btn>
      <v-btn text> CONTACTO </v-btn>
      <v-btn icon @click="toggle_dark_mode">
        <v-icon>mdi-brightness-5np</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>
