<template>
    <panel :title="$t('share:title')">
        <p>
          <v-icon>lock</v-icon>
          {{$t('share:content')}}
        </p>
        <p>
          <v-icon>public</v-icon>
          {{$t('share:content2')}}
        </p>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'share', {
                title: 'Options de partage',
                content: "pour garder le contenu privé",
                content2: "pour rendre le contenu public",
            });
            i18n.i18next.addResources('en', 'share', {
                title: 'Share your thoughts with your friends! (or not...)',
                content: "when you want the content to be private",
                content2: "when you want the content to be public",
            });
            return {};
        }
    };
</script>
