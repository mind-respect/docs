<template>
    <panel :title="$t('developer:title')">
        <p>
          {{$t('developer:content')}}
        </p>
        <p>
          {{$t('developer:content2')}}
        </p>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>2013</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{$t('developer:panel1')}}
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>2014</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{$t('developer:panel2')}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'developer', {
                title: 'Bienvenue, développeur ou développeuse!',
                content: "C'est le moment d'installer ton environnement de travail",
                content2: "Et comme premier test de ta patience et de ta volonté: arranges-toi tu seule!"
            });
            i18n.i18next.addResources('en', 'developer', {
                title: 'Welcome, new developer',
                content: "Installing your workspace is the first step",
                content2: "Will you pass this first test and prove your worth by doing so alone?"
            });
            return {};
        }
    };
</script>
