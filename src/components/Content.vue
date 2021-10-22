<template>
  <v-app>
    <v-main>

      <v-parallax dark height="1000" src="../assets/sonic_studio.webp">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <img class="animate__animated animate__headShake" id="soniclogo" src="../assets/sonic_logo.png" />
            
          </v-col>
        </v-row>
      </v-parallax>

      <section id="about" class="home-section">
        <v-container>
          <v-row>
            <v-col>
              <div class="section-heading">
                <h2>Acerca de nosotros</h2>
                <div class="heading-line"></div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-img src=../assets/about.png max-width="868px"></v-img>
            </v-col>
            <v-col id="textabout">
              <h2>
                Somos un estudio de mezcla y diseño de sonido enfocados en
                proyectos musicales y audiovisuales. Con una amplia experiencia
                en el ámbito de posproducción y grabaciones sonoras.
              </h2>
              <h3>
                Nuestros proyectos abarcan Peliculas, cortometrajes,
                documentales ,live seccions , spots publicitarios , grabación de
                sonido en campo, diseño de sonido y musicalización de
                videojuegos, mezcla y mastering.
              </h3>
              <p>
                También contando con la colaboración con grandes empresas y
                casas productoras.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Services -->
      <section id="servicios" class="home-section">
        <v-container>
          <v-row>
            <v-col>
              <div class="section-heading">
                <h2>Servicios</h2>
                <div class="heading-line"></div>
                <p></p>
              </div>
            </v-col>
          </v-row>
        </v-container>


        <!-- Splide slide -->
        <splide id="slide">
          <!-- slides -->
          <splide-slide>
            <v-row align="center" justify="center" >
              <v-col class="text-center">
                <v-container>
                  <h4>Sonido directo</h4>
                  <p>
                    Contamos con una amplia experiencia en colaboración de
                    varios proyectos Películas como chivas la película,
                    Poderoso victoria, volverá el polvo a la tierra.
                    Documentales musicales como Music hunters, Telefunka,
                    Followings políticos y deportivos y registro de eventos
                    como El FICG, La FIL Guadalajara.
                  </p>
                </v-container>
              </v-col>
              <v-col >
                <v-container>
                  <v-img max-width="700" src="../assets/servicios/sonidodirecto.png" alt=""></v-img>
                </v-container>
              </v-col>
            </v-row>
          </splide-slide>
          <!--  -->
          <splide-slide>
            <v-row align="center" justify="center">
              <v-col class="text-center" >
                <v-container>
                  <h4>Diseño de Sonido</h4>
                  <p>
                    Nuestro lema es innovar y experimentar. Generando así
                    diseños de sonido en busca de el alma de un proyecto, a
                    veces alejándonos de los clichés para encontrar un sello
                    único de la voz creativa que queremos encontrar. Proyectos
                    como Volverá el polvo a la tierra, meatus, videojuegos,
                    spots publicitarios entre otros.
                  </p>
                </v-container>
              </v-col>
              <v-col>
                <v-container>
                  <v-img max-width="700" src="../assets/servicios/disenosonoro.png" alt=""></v-img>
                </v-container>
              </v-col>
            </v-row>
          </splide-slide>
          <!--  -->
          <splide-slide>
            <v-row lign="center" justify="center">
              <v-col class="text-center">
                <v-container>
                  <h4>Mezcla y Master</h4>
                  <p>
                    Realizamos diversas mezclas mastering, tanto como para
                    proyectos musicales como audiovisuales. Contando con un
                    equipo de estudio con la mas alta fidelidad
                  </p>
                </v-container>
              </v-col>
              <v-col>
                <v-container>
                  <v-img max-width="700" src="../assets/servicios/mezclaymaster.webp" alt=""></v-img>
                </v-container>
              </v-col>
            </v-row>
          </splide-slide>
        </splide>

      </section>

      <!-- Video -->
      <v-container>
        <div class="player-container">
          <vue-core-video-player src="../assets/videos/mujeres_talentosas.webm"></vue-core-video-player>
        </div>
      </v-container>

      <!-- Contact -->
      <section id="contacto" class="home-section">
        <v-container>
          <v-row>
            <v-col>
              <h5>Estudio</h5>
              <p>
                Placeres 723 Int 1 Col Jardines del bosque<br />Guadalajara,
                Jal. Mexico
              </p>
            </v-col>
            <v-col>
              <h5>Telefono</h5>
              <p>33 1830 6084<br /></p>
            </v-col>
            <v-col>
              <h5>Email</h5>
              <p>sonicbeamstudio@gmail.com<br /></p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h5>Redes sociales</h5>
              <v-btn icon
                href="https://www.facebook.com/Sonic-Beam-1172548622817110/?eid=ARD_PeqrZivYhPYB3Kzpt2CQb3JXBtTfsUBGARocnmbetElW2fDsLJ5Ffd8d8bt5zMwqeFnDitQ98c5J&fref=tag"
                target="blank">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon href="https://www.instagram.com/sonic_beam_studio/" target="blank">
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon href="https://vimeo.com/user47738037" target="blank">
                <v-icon>mdi-vimeo</v-icon>
              </v-btn>
              <v-btn icon href="https://soundcloud.com/user-750602236" target="blank">
                <v-icon>mdi-soundcloud</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<script>
  import "../styles/content.scss";
  import "animate.css";
  import {
    Splide,
    SplideSlide
  } from "@splidejs/vue-splide";
  import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";

  export default {
    name: "app",
    components: {
      Splide,
      SplideSlide,
    },
  };

</script>
