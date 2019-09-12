<template>
    <panel :title="$t('founder:title')">
        <p>
          <v-img
            :src="require('@/assets/20190405_173223.jpg')"
            aspect-ratio="1"
            max-width="500"
            max-height="300"
          ></v-img>
        </p>
        <p>
          {{$t('founder:content')}}
        </p>
        <p>
          {{$t('founder:content2')}}
        </p>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>2013</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{$t('founder:panel1')}}
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>2014</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{$t('founder:panel2')}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'founder', {
                title: 'Vincent le fondateur',
                content: "",
                content2: "",
                panel1: "Vincent rêve aux minds map",
                panel2: "Vincent, maintenant Chenzo, code des mind map"
            });
            i18n.i18next.addResources('en', 'founder', {
                title: 'Chenzo, the founder',
                content: "",
                content2: "",
                panel1: "Vincent dreams of minds map",
                panel2: "Vincent, now Chenzo, codes mind map"
            });
            return {};
        }
    };
</script>
