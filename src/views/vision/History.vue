<template>
    <panel :title="$t('history:title')">
        <p>
          {{$t('history:content')}}
        </p>
        <p>
          {{$t('history:content2')}}
        </p>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'history', {
                title: 'Histoire',
                content: "Lorem ipsum",
                content2: "Appuyer sur tab va ajouter une nouvelle bulle"
            });
            i18n.i18next.addResources('en', 'history', {
                title: 'History',
                content: "Lorem ipsum",
                content2: "Pressing tab will add a new bubble"
            });
            return {};
        }
    };
</script>
