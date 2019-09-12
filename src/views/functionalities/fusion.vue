<template>
    <panel :title="$t('fusion:title')">
        <p>
          {{$t('fusion:content')}}
        </p>
        <p>
          {{$t('fusion:content2')}}
          <v-icon>merge_type</v-icon>      
        </p>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'fusion', {
                title: 'Fusion',
                content: "L'option de fusion permet de jumeler deux bulles pour n'en faire qu'une",
                content2: "Utilisez la fonctionnalité de fusion avec le raccourci clavier ctrl-m ou le symbole qui représente la fusion:   "
            });
            i18n.i18next.addResources('en', 'fusion', {
                title: 'Fusion',
                content: "Make one from two",
                content2: "Use fusion functionality with Ctrl-M or fusion's symbol:   "
            });
            return {};
        }
    };
</script>
