<template>
  <v-app-bar app dark dense inverted-scroll>
    <v-toolbar-title>
      <img src="../assets/sonic_logo.png" alt="" height="30px" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tabs mobile-breakpoint right>
      <v-tab href="#intro"> Inicio </v-tab>
      <v-tab href="#servicios"> servicios </v-tab>
      <v-tab href="#portafolio"> Portafolio </v-tab>
      <v-tab href="#renta"> Renta de equipo </v-tab>
      <v-tab href="#contacto"> Contacto </v-tab>
    </v-tabs>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
