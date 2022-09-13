<template>
  <div>
    <v-layout align-center justify-center wrap mt-3 pt-3 style="background:white">
      <v-flex xs12 md12 class="justify-center layout">
        <p class="heading">certifications</p>
      </v-flex>
      <v-flex xs12 md8 px-3>
        <v-layout align-center justify-start row wrap>
          <v-flex v-for="(i,j) in certification" :key="j" xs6 md4 pa-3>
              <v-img :src="i.image" contain :lazy-src="lazy">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="indigo accent-4"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
      
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import lazy from '../assets/blurd.jpg'
export default {
  data() {
    return {
      certification: [],
      lazy: lazy
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      let url = "https://Sethu-1471.github.io/myresume-api/myresume.json";
      try {
        axios.get(url).then(e => {
          e.data.certification.forEach(e => {
            this.certification.push(e);
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