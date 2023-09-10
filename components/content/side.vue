<script setup land="ts">
const props = defineProps({
    md: Boolean
})
</script>
<template>
    <v-container :class="props.md ? 'w-100' : 'w-25'" fluid>
        <v-col>
            <v-card class="mb-5" @click="">
                <v-img class="text-white" height="250"
                    src="https://metagalaxia.com.br/wp-content/uploads/2020/09/Berserk.webp" cover>
                    <div class="d-flex flex-column h-100 justify-space-between pa-2" fluid>
                        <div class="pa-2 d-flex flex-row align-start justify-space-between" fluid>
                            <v-btn class="ma-2" color="gray">
                                <v-icon class="me-1" icon="mdi-chat"></v-icon>
                                256
                            </v-btn>
                            <v-btn class="ma-2" color="gray" label>
                                <v-icon class="me-1" icon="mdi-eye"></v-icon>
                                45
                            </v-btn>
                        </div>

                    </div>
                </v-img>
                <div class="d-flex pa-2 justify-center" fluid>
                    <h1 class="text-h5">
                        Berserk
                    </h1>
                </div>
            </v-card>


            <v-card class="mb-5" @click="">
                <v-img class="text-white" height="250"
                    src="https://miro.medium.com/v2/resize:fit:697/1*jXOShVLQUDm5tZPS6YGeJg.png" cover>
                    <div class="d-flex flex-column h-100 justify-space-between pa-2" fluid>
                        <div class="pa-2 d-flex flex-row align-start justify-space-between" fluid>
                            <v-btn class="ma-2" color="gray">
                                <v-icon class="me-1" icon="mdi-chat"></v-icon>
                                256
                            </v-btn>
                            <v-btn class="ma-2" color="gray" label>
                                <v-icon class="me-1" icon="mdi-eye"></v-icon>
                                45
                            </v-btn>
                        </div>
                    </div>


                </v-img>

                <div class="d-flex pa-2 justify-center" fluid>
                    <h1 class="text-h5 text-black">
                        Oyasumi Punpun
                    </h1>
                </div>
            </v-card>
        </v-col>
    </v-container>
</template>