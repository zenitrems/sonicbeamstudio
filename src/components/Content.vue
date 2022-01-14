<template>
  <v-app>
    <v-main>
      
      <v-parallax height="1000" src=@/assets/sonic_studio.webp> <v-row align="center" justify="center">
        <v-col>
          <v-container grid-list-xl fluid>
            <div class="animate__animated animate__backInDown" id="soniclogo">
              <img src="@/assets/sonic_logo.png" />
            </div>
          </v-container>
        </v-col>
        </v-row>
      </v-parallax>
      
      <!-- about ##################################################-->
      <section id="about" class="home-section">
        <v-row>
          <v-col>
            <v-container grid-list-md fluid>
              <div data-aos="fade-up" class="section-heading">
                <h2>Acerca de nosotros</h2>
                <div class="heading-line"></div>
              </div>
            </v-container>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col md="4">
            <v-container grid-list-md fluid>
              <div data-aos="fade-right" id="aboutimg">
                <v-img src=@/assets/about.png> </v-img> </div> </v-container> </v-col> <v-col md="4">
                  <v-container grid-list-md fluid>
                    <div data-aos="fade-left" id="textabout">
                      <h2>
                        Somos un estudio de mezcla y diseño de sonido enfocados en
                        proyectos musicales y audiovisuales. Con una amplia experiencia
                        en el ámbito de posproducción y grabaciones sonoras.
                      </h2>
                      <h3>
                        Nuestros proyectos abarcan Peliculas, cortometrajes,
                        documentales, live sessions, spots publicitarios, grabación de
                        sonido en campo, diseño de sonido y musicalización de
                        videojuegos, mezcla y mastering.
                      </h3>
                    </div>
                  </v-container>
          </v-col>
        </v-row>
      </section>
      <!-- Servicios###################################### -->
      <section id="servicios" class="home-section">
        <v-row>
          <v-col>
            <v-container fluid>
              <div data-aos="fade-up" class="section-heading">
                <h2>Servicios</h2>
                <div class="heading-line"></div>
                <p></p>
              </div>
            </v-container>
          </v-col>
        </v-row>
        <!-- carrousel -->
        <div data-aos="fade-in">
          <v-container>          
          <v-carousel hide-delimiters cycle interval="5500" :show-arrows="false">
            <!-- ############## -->
            <v-carousel-item reverse-transition="fade-transition" transition="fade-transition">
              <v-card>
                <v-row align="center" justify="center">
                  <v-col md="4">
                    <v-container grid-list-md fluid>
                      <div class="servicioImg">
                        <v-img src=@/assets/servicios/mezclaymaster.webp> </v-img> </div> </v-container> </v-col> <v-col
                          md="4">
                          <v-container grid-list-md fluid>
                            <div>
                              <h4>Mezcla y Master</h4>
                              <p>
                                Realizamos diversas mezclas mastering, tanto como para
                                proyectos musicales como audiovisuales. Contando con un
                                equipo de estudio con la mas alta fidelidad.
                              </p>
                            </div>
                          </v-container>
                  </v-col>
                </v-row>
              </v-card>
            </v-carousel-item>
            <!-- ############ -->
            <v-carousel-item reverse-transition="fade-transition" transition="fade-transition">
              <v-card>
                <v-row align="center" justify="center">
                  <v-col md="4">
                    <v-container grid-list-md fluid>
                      <div class="servicioImg">
                        <v-img src=@/assets/servicios/disenosonoro.png> </v-img> </div> </v-container> </v-col> <v-col
                          md="4">
                          <v-container grid-list-md fluid>
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
                </v-row>
              </v-card>
            </v-carousel-item>
            <!-- ######### -->
            <v-carousel-item reverse-transition="fade-transition" transition="fade-transition">
              <v-card>
                <v-row align="center" justify="center">
                  <v-col md="4">
                    <v-container grid-list-md fluid>
                      <div class="servicioImg">
                        <v-img src=@/assets/servicios/sonidodirecto.png> </v-img> </div> </v-container> </v-col> <v-col
                          md="4">
                          <v-container grid-list-md fluid>
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
                </v-row>
              </v-card>
            </v-carousel-item>
            <!-- ################# -->
          </v-carousel>
          </v-container>
        </div>
      </section>
      <!-- PORTAFOLIO ####################-->
      <section id="portafolio" class="home-section">
        <v-container grid-list-md fluid>
          <v-row>
            <v-col>
              <div data-aos="fade-up" class="section-heading">
                <h2>Portafolio</h2>
                <div class="heading-line"></div>
                <p></p>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <!-- VIDEOCARD!!!!!!!!!! -->
        <!-- ############################## -->
        <v-carousel :show-arrows="false" hide-delimiters>
          <!-- ############ -->
          <v-carousel-item>
            <v-row align="center" justify="center">
              <v-col md="4">
                <v-container grid-list-md fluid>
                  <div data-aos="fade-in">
                    <h3 class="headline mb-0">Mujeres Talentosas</h3>
                    <v-spacer></v-spacer>
                    <v-btn insetcolor="secondary">anterior</v-btn>
                    <v-btn color="primary">siguiente</v-btn>
                  </div>
                </v-container>
              </v-col>
              <v-col md="4">
                <v-container grid-list-md fluid>
                  <div id="cardVideo">
                    <video class="video" ref="video" controls="true" preload="none"
                      poster="@/assets/videos/MujeresTalentosas.png">
                      <source src=@/assets/videos/MujeresTalentosas.webm type="video/webm">
                    </video>
                  </div>
                </v-container>
              </v-col>
            </v-row>

          </v-carousel-item>
          <!-- ########## -->
        </v-carousel>
        <!-- ############################## -->
      </section>
      <section id="renta" class="home-section">
          <v-row>
            <v-col>
              <div data-aos="fade-in" class="section-heading">
                <h2>Renta de equipo</h2>
                <div class="heading-line"></div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card>
                <v-card-title primary-title>
                  Grabadoras
                </v-card-title>
                <v-row>
                  <v-col>
                    <v-hover v-slot="{ hover }">
                      <v-card class="mx-auto" color="grey lighten-4" max-width="250">
                        <v-img :aspect-ratio="16/9" src=@/assets/equipo/zoomf8n.jpg>
                          <v-expand-transition>
                            <div v-if="hover"
                              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                              style="height: 100%;">
                              ZOOM F8n
                            </div>
                          </v-expand-transition>
                        </v-img>
                      </v-card>
                    </v-hover>
                  </v-col>
                  <v-col>
                    <v-hover v-slot="{ hover }">
                      <v-card class="mx-auto" color="grey lighten-4" max-width="250">
                        <v-img :aspect-ratio="16/9" src=@/assets/equipo/zoomh6.jpg>
                          <v-expand-transition>
                            <div v-if="hover"
                              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                              style="height: 100%;">
                              ZOOM H6
                            </div>
                          </v-expand-transition>
                        </v-img>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-hover v-slot="{ hover }">
                      <v-card class="mx-auto" color="grey lighten-4" max-width="250">
                        <v-img :aspect-ratio="16/9" src=@/assets/equipo/zoomh1.jpg>
                          <v-expand-transition>
                            <div v-if="hover"
                              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                              style="height: 100%;">
                              ZOOM H1
                            </div>
                          </v-expand-transition>
                        </v-img>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col>
              <v-card>
                <v-card-title primary-title>
                  Microfonía
                </v-card-title>
                <v-row>
                  <v-col>
                    <v-hover v-slot="{ hover }">
                      <v-card class="mx-auto" color="grey lighten-4" max-width="200">
                        <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
                          <v-expand-transition>
                            <div v-if="hover"
                              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                              style="height: 100%;">
                              Shotgun Senheisser me66 /supercadioide
                            </div>
                          </v-expand-transition>
                        </v-img>
                      </v-card>
                    </v-hover>
                  </v-col>
                  <v-col>
                    <v-hover v-slot="{ hover }">
                      <v-card class="mx-auto" color="grey lighten-4" max-width="200">
                        <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
                          <v-expand-transition>
                            <div v-if="hover"
                              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                              style="height: 100%;">
                            </div>
                          </v-expand-transition>
                        </v-img>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col>
              <v-card>
                <v-card-title primary-title>
                  Misceláneos
                </v-card-title>
                <v-row>
                  <v-col>
                    <v-hover v-slot="{ hover }">
                      <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                        <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
                          <v-expand-transition>
                            <div v-if="hover"
                              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                              style="height: 100%;">
                              ZOOM
                            </div>
                          </v-expand-transition>
                        </v-img>
                      </v-card>
                    </v-hover>
                  </v-col>
                  <v-col>
                    <v-hover v-slot="{ hover }">
                      <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                        <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
                          <v-expand-transition>
                            <div v-if="hover"
                              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                              style="height: 100%;">
                              ZOOM
                            </div>
                          </v-expand-transition>
                        </v-img>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </section> 
        
      <!-- contacto -->
      <section id="contacto" class="bottom-section">
        <div data-aos="fade-up">
          <v-row align="center" justify="center">
            <v-col md="4">
              <v-icon>mdi-map-marker</v-icon>
              <h5>Estudio</h5>
              <p>
                Placeres 723 Int 1 Col Jardines del bosque<br />Guadalajara,
                Jal. Mexico
              </p>
            </v-col>
            <v-col md="4">
              <v-icon>mdi-phone</v-icon>
              <h5>Telefono</h5>
              <p>33 1830 6084<br /></p>
            </v-col>
            <v-col md="4">
              <v-icon>mdi-email</v-icon>
              <h5>Email</h5>
              <p>sonicbeamstudio@gmail.com<br /></p>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col md="4">
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
        </div>
      </section>
    </v-main>
  </v-app>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default {
  data: () => ({
    isActive: false,
  }),
  computed: {
    videoElement() {
      return this.$refs.video;
    },
  },
};
</script>
