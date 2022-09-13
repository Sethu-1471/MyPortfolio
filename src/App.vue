<template>
  <div class="disableselect">
    <v-app v-if="state">
      <v-layout align-center justify-center>
        <v-flex xs12 md12>
          <center>
            <v-progress-circular
              indeterminate
              color="indigo accent-4"
            ></v-progress-circular>
          </center>
        </v-flex>
      </v-layout>
    </v-app>
    <v-app v-if="!state">
      <v-app-bar app color="white" dark>
        <div class="d-flex">
          <div class="name">Sethupathi Palanisamy</div>
        </div>
        <v-spacer></v-spacer>
        <!-- <v-switch
  label="Toggle dark them"
  @change="toggleDarkTheme()"
></v-switch> -->
        <a
          href="https://Sethu-1471.github.io/myresume-api/sethuresume.pdf"
          target="_blank"
          style="text-decoration: none;"
          download
        >
          <v-btn class="mt-2 hidden-sm-and-down" color="indigo accent-4">
            <v-icon small class="pr-2" color="white">mdi-download</v-icon
            >Download Resume
          </v-btn>
        </a>
        <a
          href="https://Sethu-1471.github.io/myresume-api/sethuresume.pdf"
          target="_blank"
          style="text-decoration: none;"
          download
        >
          <v-btn
            class="mt-2 hidden-md-and-up"
            fab
            small
            color="indigo accent-4"
          >
            <v-icon small color="white">mdi-download</v-icon>
          </v-btn>
        </a>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
      <v-snackbar v-model="snackbar" :timeout="timeout" right shaped top>
        Last Updated on 01-09-2021
        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false"
            >close</v-btn
          >
        </template>
      </v-snackbar>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    snackbar: true,
    timeout: 20000,
    state: true,
  }),
  methods: {
    //     toggleDarkTheme() {
    //       this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    //       console.log(this.$vuetify.theme.dark);
    // },
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.state = false;
      }
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
.name {
  background: -webkit-linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Poppins", sans-serif;
  font-size: 20px;

  font-weight: 600;
  letter-spacing: 1.5px;
}
@media print {
  .disableselect {
    display: none;
  }
}
.disableselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge*/
  user-select: none; /* Non-prefixed version, currentl not supported by any browser */
}
</style>
