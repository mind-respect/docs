<template>
    <panel :title="$t('search:title')">
        <p>
          {{$t('search:content')}}
        </p>
        <p>
          {{$t('search:content2')}}
        </p>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'search', {
                title: 'Recherche',
                content: "Wow! Une barre de recherche! Trop classe!",
                content2: "Le portail de vos bulles centrales vous permet également de voir d'un coup d'oeil les dernières bulles visitées",
            });
            i18n.i18next.addResources('en', 'search', {
                title: 'Search',
                content: "Wow! A search bar! How modern!",
                content2: "Your center buble page allows you to see in a glance your last visited bubles"
            });
            return {};
        }
    };
</script>
