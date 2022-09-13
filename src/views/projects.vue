<template>
  <div>
    <v-layout
      align-center
      justify-center
      wrap
      mt-3
      pt-3
      style="background: white;"
    >
      <v-flex xs12 md12 class="justify-center layout">
        <p class="heading">Projects</p>
      </v-flex>
      <v-flex xs12 md8 px-3>
        <!-- <v-layout align-center justify-start row wrap>
          <v-flex v-for="(i,j) in images" :key="j" xs6 md4 pa-3>
            <v-hover v-slot:default="{ hover }">
              <v-img :src="i.pathLong" contain class="img" :lazy-src="lazy">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="indigo accent-4"></v-progress-circular>
                  </v-row>
                </template>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out v-card--reveal indigo accent-4 white--text"
                    style="height: 100%;"
                  >{{ content[j] }}</div>
                </v-expand-transition>
              </v-img>
            </v-hover>
          </v-flex>
        </v-layout> -->
      </v-flex>
      <v-flex xs12 md12 align-center justify-center layout column>
        <p class="sub-heading pt-3">For Projects Visit my Github Repo</p>
        <a
          href="https://github.com/Sethu-1471"
          target="_blank"
          style="text-decoration: none;"
        >
          <v-btn class="mt-2 white--text" color="indigo accent-4 ">
            <v-icon small class="pr-2" color="white">mdi-github</v-icon>Github
          </v-btn>
        </a>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import lazy from "../assets/blurd.jpg";
export default {
  data() {
    return {
      images: [],
      lazy: lazy,
      content: [
        "Sri Krishna College Official Website - skct.edu.in",
        "Covid19-Quiz APP",
        "Avantaa 2020 Official Website",
        "Avantaa 2020 CSE Department Official Website",
        "Avantaa 2020 other department Official Website",
      ],
    };
  },
  mounted() {
    this.importAll(require.context("../assets/projects/", true, /\.png$/));
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    },
  },
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
  padding: 0 10px;
}
</style>
