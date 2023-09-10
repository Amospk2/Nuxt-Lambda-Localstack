<script setup land="ts">
const props = defineProps({
    md: Boolean,
    images: Object
})
</script>
<template>
    <v-container :class="props.md ? 'w-100' : 'w-75'" fluid>
        <v-row dense>
            <v-col class="pa-2" v-for="n in props.images.length" :key="n" :cols="props.md ? '' : '4'">
                <v-sheet color="grey-lighten-2">
                    <v-card @Click="">
                        <v-img class=" align-start text-white" height="350" :src="props.images[n - 1].image" cover>
                            <div class="pa-2 d-flex flex-row justify-space-between" fluid>

                                <v-btn class="ma-2">
                                    <v-icon class="me-1" icon="mdi-chat"></v-icon>
                                    256
                                </v-btn>

                                <v-btn class="ma-2" label>
                                    <v-icon class="me-1" icon="mdi-eye"></v-icon>
                                    45
                                </v-btn>


                            </div>
                        </v-img>

                        <h1 class="text-h4 pa-2">
                            {{ props.images[n-1].name }}
                        </h1>


                    </v-card>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>