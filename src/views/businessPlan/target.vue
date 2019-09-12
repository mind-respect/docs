<template>
    <panel :title="$t('target:title')">
        <p>
          {{$t('target:content')}}
        </p>
        <p>
          {{$t('target:content2')}}
        </p>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'target', {
                title: 'Public cible',
                content: "Lorem ipsum",
                content2: "Appuyer sur tab va ajouter une nouvelle bulle"
            });
            i18n.i18next.addResources('en', 'target', {
                title: 'Ideal client',
                content: "Lorem ipsum",
                content2: "Pressing tab will add a new bubble"
            });
            return {};
        }
    };
</script>
