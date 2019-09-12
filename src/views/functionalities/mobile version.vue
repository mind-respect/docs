<template>
    <panel :title="$t('mobile:title')">
        <p>
          {{$t('mobile:content')}}
        </p>
        <p>
          {{$t('mobile:content2')}}
        </p>
    </panel>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data: function () {
            i18n.i18next.addResources('fr', 'mobile', {
                title: 'Version mobile',
                content: "MindRespect.com est accessible par navigateur. 'Responsive', elle peut être utilisée aussi bien sur un ordniateur, une tablette ou un téléphone cellulaire",
                content2: "MindRespect.com ne fonctionne pas hors-ligne, et la version 'app' n'a pas encore été développée",
            });
            i18n.i18next.addResources('en', 'mobile', {
                title: 'mobile',
                content: "MindRespect.com can be used on any browser (but Safari or explorer, wich are bullshit anyway), from your computer, phone or tablet",
                content2: "MindRespect.com's app is not yet available, and it does not function offline"
            });
            return {};
        }
    };
</script>
