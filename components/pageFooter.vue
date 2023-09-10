<script setup>
function top() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

</script>

<template>
    <v-row class="align-start justify-center w-100">
        <v-btn icon="mdi-chevron-up" color="red" size="large" style="z-index: 1;" @click="top" />
    </v-row>
    <v-card class="d-flex w-100 h-auto pa-5 justify-center" color="red" fluid>
        <v-row>

            <v-row class="pa-5 align-center justify-center">
                <h1 class="ml-10">
                    Anime
                </h1>
                <h1 class="text-black">
                    List
                </h1>
            </v-row>


            <v-col>
                <v-container class="d-flex justify-end" fluid>
                    <h1 class="text-h5">
                        Copyright © 2023 All rights reserved |
                        Feito com <v-icon icon="mdi-heart"></v-icon> por AmosPk2
                    </h1>
                </v-container>
            </v-col>
        </v-row>
    </v-card>
</template>