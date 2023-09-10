<script setup land="ts">
const props = defineProps({
    md: Boolean
})
</script>


<template>
    <v-container class="d-flex justify-center align-center flex-column pa-10" fluid>
        <v-carousel hide-delimiters>
            <v-carousel-item src="https://themewagon.github.io/anime/img/hero/hero-1.jpg" cover>
                <v-container class="pa-15 h-100 d-flex flex-column justify-end align-center " fluid>
                    <v-btn class="mb-5 text-none">
                        Adventure
                    </v-btn>
                    <h1 class="text-white">Fate / Stay Night: Unlimited Blade Works</h1>
                    <h3 v-if="!props.md" class="text-white">After 30 days of travel across the world...</h3>
                </v-container>
            </v-carousel-item>
            <v-carousel-item src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/06/Gurren-Lagann-1.jpg"
                cover>
                <v-container class="pa-15 h-100 d-flex flex-column justify-end align-center " fluid>
                    <v-btn class="mb-5 text-none">
                        Adventure
                    </v-btn>
                    <h1 class="text-white">Tengen Toppa Guren Lagann</h1>
                    <h3 v-if="!props.md" class="text-white">Guerra de robos</h3>
                </v-container>
            </v-carousel-item>
        </v-carousel>


    </v-container>
</template>