<template>
    <panel :title="$t('compare:title')">
        <p>
          {{$t('compare:content')}}
        </p>
        <p>
          {{$t('compare:content2')}}
        </p>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>MindMup</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{$t('compare:panel1')}}
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Linkurious</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{$t('compare:panel2')}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'compare', {
                title: "Comparaison avec d'autres applications",
                content: "Applications de prise de note",
                content2: "Applications de mind map",
                panel1: "Mind Mup est joyeux",
                panel2: "Lunkurious est... curieux!"
            });
            i18n.i18next.addResources('en', 'compare', {
                title: 'Comparison with other apps',
                content: "Lorem ipsum",
                content2: "Pressing tab will add a new bubble",
                panel1: "Mind Mup is goofy",
                panel2: "Linkurious is... curious?"
            });
            return {};
        }
    };
</script>
