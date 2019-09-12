<template>
    <panel :title="$t('manifesto:title')">
        <p>
          {{$t('manifesto:content')}}
        </p>
        <p>
          {{$t('manifesto:content2')}}
        </p>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>2013</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{$t('manifesto:panel1')}}
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>2014</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{$t('manifesto:panel2')}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'manifesto', {
                title: 'Histoire',
                content: "Lorem ipsum",
                content2: "Appuyer sur tab va ajouter une nouvelle bulle",
                panel1: "Vincent rêve aux minds map",
                panel2: "Vincent, maintenant Chenzo, code des mind map"
            });
            i18n.i18next.addResources('en', 'manifesto', {
                title: 'manifesto',
                content: "Lorem ipsum",
                content2: "Pressing tab will add a new bubble",
                panel1: "Vincent dreams of minds map",
                panel2: "Vincent, now Chenzo, codes mind map"
            });
            return {};
        }
    };
</script>
