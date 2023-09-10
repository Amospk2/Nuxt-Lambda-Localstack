<script setup land="ts">
const props = defineProps({
    md: Boolean,
    images: Array
})
</script>

<template>
    <div class="w-75 d-flex justify-space-between pl-15" fluid>
        <h1 class="text-h3">
            Popular Shows
        </h1>
        <h1 v-if="!props.md" class="mr-10">
            <v-btn border class="text-none" variant="text">
                View All
            </v-btn>
        </h1>
    </div>

    <v-row class="pl-15 pr-15">

        <popular :md="props.md" :images="props.images" />
        <side :md="props.md" />
        
    </v-row>
</template>