<script setup>
const props = defineProps({
    screen: Boolean
})
const reactives = reactive({
    items: [
        { title: 'Novidades' },
        { title: 'Lançamentos' },
        { title: 'Live Action' },
    ],
})

</script>

<template>
    <v-toolbar :elevation="8">
        <v-container class="d-flex flex-row">
            <h1 class="ml-10">
                Anime
            </h1>
            <h1 class="text-red">
                List
            </h1>
        </v-container>

        <v-container class="d-flex" v-if="!props.screen" fluid>

            <v-btn>
                HomePage
            </v-btn>
            <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" v-bind="props">
                        Categorias
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(item, index) in reactives.items" :key="index">
                        <v-list-item-title @click="">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn>
                Blog
            </v-btn>
            <v-btn>
                Contact
            </v-btn>
        </v-container>

        <v-container class="d-flex justify-end" fluid>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon class="mr-5">
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-container>

    </v-toolbar>
</template>