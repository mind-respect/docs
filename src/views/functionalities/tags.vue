<template>
    <panel :title="$t('tags:title')">
        <p>
          {{$t('tags:content')}}
        </p>
        <p>
          {{$t('tags:content2')}}
        </p>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'tags', {
                title: 'Étiquettes',
                content: "C'est trop compliqué, on vous expliquera ça une autre fois",
                content2: "Ça crée un lien avec une autre bulle, mais contrairement à la fusion, les bulles restent autonomes et font maintenant référence à un concept commun"
            });
            i18n.i18next.addResources('en', 'tags', {
                title: 'Tags',
                content: "It's too complicated, come back later for more info",
                content2: "Similar but different to fusion: this time, bubles stay apart and autonomus, and refer to a common idea"
            });
            return {};
        }
    };
</script>
