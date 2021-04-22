<template>
  <v-app>
    <v-main>
      <!--  intro area  -->
      <section id="intro" class="intro-section">
        <v-container grid-list-xs>
          <v-img id="intro-img" src="../assets/sonic_studio.jpg">
            <v-container>
              <v-row justify="center">
                <v-col md="auto">
                  <v-img
                    class="animate__animated animate__bounce"
                    max-height="400"
                    max-width="400"
                    src="../assets/sonic_logo.png"
                    alt="Sonic Beam"
                  >
                  </v-img>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col md="8">
                  <p>
                    ¡Bienvenido a Sonic Beam! En esta página podrás encontrar,
                    el portafolio de alguno de los proyectos realizados en las
                    áreas como de Diseño de sonido, captura de sonido directo,
                    Mezcla o mastering, Voz n off o ya sea musicalización para
                    proyectos audio visuales.
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn href="#about">Descubre mas</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-container>
      </section>
      <!-- #intro -->

      <!-- About -->
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
              <v-img
                max-width="800"
                max-height="800"
                src="../assets/about2.png"
              ></v-img>
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
        <splide>
          <!-- slides -->
          <splide-slide>
            <v-container id="splideContainer">
              <v-row>
                <v-col>
                  <h4>Sonido directo</h4>
                  <p>
                    Contamos con una amplia experiencia en colaboración de
                    varios proyectos Películas como chivas la película, Poderoso
                    victoria, volverá el polvo a la tierra. Documentales
                    musicales como Music hunters, Telefunka, Followings
                    políticos y deportivos y registro de eventos como El FICG,
                    La FIL Guadalajara.
                  </p>
                </v-col>
                <v-col>
                  <v-img
                    src="../assets/servicios/sonidodirecto.png"
                    alt=""
                    max-width="800"
                    max-height="800"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </splide-slide>
          <!--  -->
          <splide-slide>
            <v-container>
              <v-row>
                <v-col>
                  <h4>Diseño de Sonido</h4>
                  <p>
                    Nuestro lema es innovar y experimentar. Generando así
                    diseños de sonido en busca de el alma de un proyecto, a
                    veces alejándonos de los clichés para encontrar un sello
                    único de la voz creativa que queremos encontrar. Proyectos
                    como Volverá el polvo a la tierra, meatus, videojuegos,
                    spots publicitarios entre otros.
                  </p>
                </v-col>
                <v-col>
                  <v-img
                    src="../assets/servicios/disenosonoro.png"
                    alt=""
                    max-width="800"
                    max-height="800"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </splide-slide>
          <!--  -->
          <splide-slide>
            <v-container>
              <v-row>
                <v-col>
                  <h4>Mezcla y Master</h4>
                  <p>
                    Realizamos diversas mezclas mastering, tanto como para
                    proyectos musicales como audiovisuales. Contando con un
                    equipo de estudio con la mas alta fidelidad
                  </p>
                </v-col>
                <v-col>
                  <v-img
                    src="../assets/servicios/sonidodirecto.png"
                    alt=""
                    max-width="800"
                    max-height="800"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </splide-slide>
        </splide>
      </section>

      <!--  --------------------------------------------------------------------------------------- -->
      <!-- ----------------------------------------------------------------------------------------------- -->

      <!-- VIDEO PLAYER -->
      <section id="videoPlayer" class="home-section bg-white">
        <v-container grid-list-md>
          <div class="item">
            <div class="player">
              <video-player
                ref="videoPlayer"
                class="vjs-custom-skin"
                :options="playerOptions"
              >
              </video-player>
            </div>
          </div>
        </v-container>
      </section>

      <!-- Contact -->

      <section id="contact" class="home-section">
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
              <v-btn
                icon
                href="https://www.facebook.com/Sonic-Beam-1172548622817110/?eid=ARD_PeqrZivYhPYB3Kzpt2CQb3JXBtTfsUBGARocnmbetElW2fDsLJ5Ffd8d8bt5zMwqeFnDitQ98c5J&fref=tag"
              >
                <v-icon>mdi-Facebook</v-icon>
              </v-btn>
              <v-btn
                icon
                href="https://www.instagram.com/splushions_in_da_sky/"
              >
                <v-icon>mdi-Instagram</v-icon>
              </v-btn>
              <v-btn icon href="https://vimeo.com/user47738037">
                <v-icon>mdi-Vimeo</v-icon>
              </v-btn>
              <v-btn icon href="https://soundcloud.com/user-750602236">
                <v-icon>mdi-Soundcloud</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>
<script>
// Similarly, you can also introduce the plugin resource pack you want to use within the component
// import 'some-videojs-plugin'
export default {
  data() {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        language: "en",
        fluid: "true",
        sources: [
          {
            type: "video/webm",
            src: "./assets/video/mujeres.webm",
          },
        ],
      },
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  mounted() {
    console.log("this is current player instance object", this.player);
  },
};
</script>
