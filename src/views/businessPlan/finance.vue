<template>
    <panel :title="$t('finance:title')">
        <p>
          {{$t('finance:content')}}
        </p>
        <p>
          {{$t('finance:content2')}}
        </p>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>Phase 1</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{$t('finance:panel1')}}
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Phase 2</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{$t('finance:panel2')}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'finance', {
                title: 'Financement',
                content: "Combien ça coûte?",
                content2: "Comment on va faire du cash",
                panel1: "On est pauvre",
                panel2: "On est riche"
            });
            i18n.i18next.addResources('en', 'finance', {
                title: 'finance',
                content: "Lorem ipsum",
                content2: "Pressing tab will add a new bubble",
                panel1: "On est pauvre",
                panel2: "On est riche"
            });
            return {};
        }
    };
</script>
