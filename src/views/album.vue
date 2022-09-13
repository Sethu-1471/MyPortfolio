<template>
  <div>
    <v-layout align-center justify-center wrap mt-3 pt-3 style="background:white">
      <v-flex xs12 md12 class="justify-center layout">
        <p class="heading">my album</p>
      </v-flex>
      <v-flex xs12 md8 px-3>
        <v-layout align-center justify-start row wrap>
          <v-flex v-for="(i,j) in album" :key="j" xs12 md4 pa-3>
            <v-hover v-slot:default="{ hover }">
              <v-img :src="i.image" :lazy-src="lazy" contain aspect-ratio="2">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="indigo accent-3"></v-progress-circular>
                  </v-row>
                </template>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out v-card--reveal indigo accent-4 white--text"
                    style="height: 100%;"
                  >
                    {{ i.theme }}
                    <v-btn icon fab small @click="open(j)" color="orange">
                      <v-icon>zoom_in</v-icon>
                    </v-btn>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <div>
      <image-viewer-vue
        v-if="imageViewerFlag"
        @closeImageViewer="imageViewerFlag = false"
        @clickImage="clickImage"
        :imgUrlList="imgUrlList"
        :index="currentIndex"
        :title="title"
        :closable="true"
        :cyclical="true"
      ></image-viewer-vue>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import lazy from "../assets/blurd.jpg";
export default {
  data() {
    return {
      album: [],
      lazy: lazy,
      imageViewerFlag: false,
      currentIndex: 0,
      title: "Sethu Album",
      imgUrlList: []
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    open(e) {
      this.imageViewerFlag = true;
      this.currentIndex = e;
    },
    clickImage: function(index) {
      console.log(index);
    },
    update() {
      let url = "https://Sethu-1471.github.io/myresume-api/myresume.json";
      try {
        axios.get(url).then(e => {
          e.data.album.forEach(e => {
            this.album.push(e);
            this.imgUrlList.push(e.image);
          });
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
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