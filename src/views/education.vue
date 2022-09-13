<template>
  <div>
    <v-layout align-center justify-center wrap mt-3 pt-3 style="background:white">
      <v-flex xs12 md12 class="justify-center layout">
        <p class="heading">Education</p>
      </v-flex>
      <v-flex xs12 md7 pr-3>
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item color="indigo accent-4" right small>
            <v-card>
              <v-card-title class="firstContent">
                <p style="color:white;" class="pt-3">Sri Krishna College of Technology</p>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="10">
                    Degree: BE
                    <br />Field: Computer Science
                    <br />Started Year: 2018
                    <br />Graduation Year:2022
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="indigo accent-4" left small>
            <v-card>
              <v-card-title class="firstContent">
                <p style="color:white;" class="pt-3">Global Matric Hr Sec School</p>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="10">
                     Higher Studies / 12th
                    <br />Field: Computer Science
                    <br />Started Year: 2017
                    <br />Graduation Year:2018
                    <br />Mark:1109/1200
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="indigo accent-4" right small>
            <v-card>
              <v-card-title class="firstContent">
                <p style="color:white;" class="pt-3">Global Matric Hr Sec School</p>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="10">
                    Studies / 10th
                    <br />Started Year: 2015
                    <br />Graduation Year:2016
                    <br />Mark:469/500
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>