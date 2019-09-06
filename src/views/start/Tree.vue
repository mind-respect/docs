<template>
    <panel :title="$t('tree:title')">
        <p>
          {{$t('tree:content')}}
        </p>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'tree', {
                title: 'Arborescence',
                content: "Lorem ipsum"
            });
            i18n.i18next.addResources('en', 'tree', {
                title: 'Arborescence',
                content: "Lorem ipsum"
            });
            return {};
        }
    };
</script>
