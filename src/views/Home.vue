<template>
  <div>
    <v-layout class="firstContent" wrap>
      <v-flex xs12 md6 align-center justify-center layout column wrap>
        <p class="name1 mx-3">Hello! i'm Sethupathi</p>
        <div>
          <div class="white--text">
            <v-icon color="orange">mark_email_unread</v-icon>
            <span class="pl-3">sethu1471@gmail.com</span>
          </div>
          <div class="white--text py-2">
            <v-icon color="orange">person</v-icon>
            <span class="pl-3">Sri Krishna College of Technology</span>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/sethu-pathi-580560170"
          target="_blank"
          style="text-decoration: none;"
        >
          <v-btn class="mt-2">
            <v-icon small class="pr-2" color="blue">mdi-linkedin</v-icon>Connect
            me
          </v-btn>
        </a>
      </v-flex>
      <v-flex xs12 md6 align-center justify-center layout>
        <v-img :src="sethu" aspect-ratio="2" contain>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center wrap pt-3>
      <v-flex xs12 md12 class="justify-center layout">
        <p class="heading">intro</p>
      </v-flex>
      <v-flex xs12 md5 style="text-align: justify;" px-3>
        An inspiring engineering student in a track of development, Leadership &
        communities. my passion is through Web Development. Iam easily adaptable
        and approachable person and serve as a team player. Developing a thing
        with the help of technology to help society in an optimised way.
        Leadership is said to be, we are, not I am.
      </v-flex>
      <v-flex xs12 md12 class="justify-center layout align-center" mt-1>
        <span style="font-weight: bold;">வளர்க டெக்னாலஜி</span>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center wrap pt-3>
      <v-flex xs12 md12 class="justify-center layout">
        <p class="heading">experience</p>
      </v-flex>
      <v-flex xs12 md5 style="text-align: justify;" px-3>
        <ul>
          <li>
            Finished Working as React Front-end Developer at MachDatum Company
            as a Intern(3 Months) -
            <a
              target="_blank"
              href="https://Sethu-1471.github.io/myresume-api/offer/machdatum.pdf"
              >Offer Letter</a
            >.<a
              target="_blank"
              href="https://Sethu-1471.github.io/myresume-api/offer/cmachdatum.pdf"
              >Completion Letter</a
            >.
          </li>
          <li>
            Finished one year at DSC SKCT Core Team. Learned lot like Event
            Management,Time Management etc.
          </li>
          <li>
            Revamped my college offcial Website -
            <a href="http://skct.edu.in/#/">Click Here</a>
          </li>
          <li>
            Published NPM packages -
            <a href="https://www.npmjs.com/~sethupathi-palanisamy"
              >Click Here</a
            >
          </li>
          <li>
            Blog at Medium -
            <a href="https://sethu1471.medium.com/">Click Here</a>
          </li>
        </ul>
      </v-flex>
    </v-layout>
    <skillView />
    <communities />
    <projects />
    <certification />
    <education />
    <album />
    <v-footer dark padless class="mt-5">
      <v-card
        flat
        tile
        class="text-center"
        style="background-color: #f9f9ff; width: 100%;"
      >
        <v-card-text>
          <a
            :href="icon.link"
            style="text-decoration: none;"
            target="_blank"
            v-for="(icon, i) in icons"
            :key="i"
          >
            <v-btn class="mx-4" :color="icon.color" icon>
              <v-icon size="24px">{{ icon.icon }}</v-icon>
            </v-btn>
          </a>
        </v-card-text>

        <v-card-text class="pt-0" style="color: #777777;">
          <p style="font-weight: bold;">My Bio</p>
          <div>
            <p>Mr P.Sethupathi</p>
            <p>14-07-2001</p>
            <p>S/o R.D.Palanisamy</p>
            <p>46, Ramapattinam,</p>
            <p>Sivanmalai (po),</p>
            <p>Kangayam. 638701</p>
            <p>India,Tamilnadu,Thirupur District.</p>
            <p>Contact no: 9025548991,8825598814</p>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text style="color: #777777;">
          {{ new Date().getFullYear() }} —
          <strong>Created by Sethu with vue js❤️</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import sethu from "@/assets/sethu.png";
import skillView from "./skillbar";
import education from "./education";
import projects from "./projects";
import communities from "./communities";
import certification from "./certification";
import album from "./album";
export default {
  name: "Home",
  components: {
    skillView,
    education,
    projects,
    communities,
    certification,
    album,
  },
  data: () => ({
    sethu: sethu,
    icons: [
      {
        icon: "mdi-facebook",
        color: "indigo",
        link: "https://www.facebook.com/kongu.sethu.1471",
      },
      {
        icon: "mdi-twitter",
        color: "blue",
        link: "https://twitter.com/sethu_kgm",
      },
      {
        icon: "mdi-linkedin",
        color: "blue",
        link: "https://www.linkedin.com/in/sethu-pathi-580560170",
      },
      {
        icon: "mdi-instagram",
        color: "red",
        link: "https://instagram.com/kongu_tamilan_sethu",
      },
      {
        icon: "mdi-github",
        color: "black",
        link: "https://github.com/Sethu-1471",
      },
      {
        icon: "mdi-npm",
        color: "black",
        link: "https://www.npmjs.com/~sethupathi-palanisamy",
      },
      {
        icon: "mdi-blogger",
        color: "black",
        link: "https://sethu1471.medium.com/",
      },
    ],
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
.firstContent {
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
}
.name1 {
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  text-transform: uppercase;
  color: aliceblue;
  font-weight: 600;
  letter-spacing: 1.5px;
}
.heading {
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  color: black;
  font-weight: 600;
  letter-spacing: 1.5px;
}
.sub-heading {
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  color: black;
  font-weight: 600;
  letter-spacing: 1.2px;
}
.img {
  border: 1px solid #dddddd;
}
</style>
