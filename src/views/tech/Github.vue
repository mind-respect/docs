<template>
    <panel :title="$t('github:title')">
        <p>
          {{$t('github:content')}}
        </p>
        <p>
          {{$t('github:content2')}}
        </p>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>2013</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{$t('github:panel1')}}
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>2014</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{$t('github:panel2')}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'github', {
                title: 'Histoire',
                content: "Lorem ipsum",
                content2: "Appuyer sur tab va ajouter une nouvelle bulle",
                panel1: "Vincent rêve aux minds map",
                panel2: "Vincent, maintenant Chenzo, code des mind map"
            });
            i18n.i18next.addResources('en', 'github', {
                title: 'github',
                content: "Lorem ipsum",
                content2: "Pressing tab will add a new bubble",
                panel1: "Vincent dreams of minds map",
                panel2: "Vincent, now Chenzo, codes mind map"
            });
            return {};
        }
    };
</script>
