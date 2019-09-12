<template>
    <panel :title="$t('tree:title')">
        <img src="" alt="">
        <p>
          {{$t('tree:content')}}
        </p>
        <p>
          {{$t('tree:content2')}}
        </p>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'tree', {
                title: 'Arborescence',
                content: "Lorem ipsum",
                content2: "Appuyer sur tab va ajouter une nouvelle bulle"
            });
            i18n.i18next.addResources('en', 'tree', {
                title: 'Tree 101',
                content: "Lorem ipsum",
                content2: "Pressing tab will add a new bubble"
            });
            return {};
        }
    };
</script>
