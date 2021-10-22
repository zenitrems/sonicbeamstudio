<template>
  <v-app-bar app dark dense inverted-scroll>
    <v-toolbar-title>
      <img src="../assets/sonic_logo.png" alt="" height="30px" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text href="#intro">INICIO</v-btn>
    <v-btn text href="#servicios">SERVICIOS</v-btn>
    <v-btn text href="#portafolio">PORTAFOLIO</v-btn>
    <v-btn text href="#renta">RENTA DE EQUIPO</v-btn>
    <v-btn text href="#contacto">CONTACTO</v-btn>
    <v-btn icon @click="toggle_dark_mode">
      <v-icon>mdi-compare</v-icon>
    </v-btn>
    
    <v-menu transition="slide-y-transition" bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="yellow" v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
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
  data: () => ({
    items: [
      { title: "Inicio" },
      { title: "Servicios" },
      { title: "Portafolio" },
      { title: "Renta de equipo" },
      { title: "Contacto" },
    ],
  }),
};
</script>
