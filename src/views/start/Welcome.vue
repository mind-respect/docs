<template>
    <panel :title="$t('welcome:title')">
        <p class="body-1">
          {{$t('welcome:content')}}
          <a href="mailto:contact@mindrespect.com">contact@mindrespect.com</a>
        </p>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'welcome', {
                title: 'Bienvenue',
                content: "Site de la documentation. Pour toute question, contactez nous"
            });
            i18n.i18next.addResources('en', 'welcome', {
                title: 'Welcome',
                content: "Documentation site. For any question, contact us"
            });
            return {};
        }
    };
</script>
