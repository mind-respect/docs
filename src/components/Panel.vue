<template>
    <v-layout class="vh-center">
        <v-flex md8 xs12>
            <v-card flat class="pt-8" color="transparent">
                <v-card-title v-if="title" class="font-weight-bold display-2">
                    {{title}}
                </v-card-title>
                <v-card-text class="pt-2 pb-2 mb-5 black--text body-1">
                    <slot></slot>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Panel",
        props: ['title']
    }
</script>

<style scoped>

</style>
