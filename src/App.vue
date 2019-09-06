<template>
    <v-app>
        <v-app-bar
                color="transparent"
                class="black--text vh-center elevation-1"
                fixed
                app
        >
            <v-toolbar-title class="vh-center">
                {{$t('nav:title')}}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-if="$store.state.locale === 'en'" @click="switchLanguage('fr')" text light>
                Français
            </v-btn>
            <v-btn v-if="$store.state.locale === 'fr'" @click="switchLanguage('en')" text light>
                English
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer
                v-model="drawer"
                absolute
                bottom
                app
        >
            <v-list>
                <template v-for="(item, i) in menuItems">
                    <v-subheader
                            v-if="item.header"
                            :key="item.header"
                            class="text-uppercase"
                    >
                        {{$t('nav:' + item.header)}}
                    </v-subheader>
                    <v-divider
                            v-else-if="item.divider"
                            :key="i"
                            :inset="item.inset"
                    ></v-divider>
                    <v-list-item
                            v-else
                            :key="i"
                            value="true"
                            @click="goTo(item.path)"
                            :class="{
                              'side-menu-active': item.path === $route.path && (!item.isActive || item.isActive()),
                              'pl-8': item.level === 1
                            }"
                    >
                        <!--                        <v-list-item-action>-->
                        <!--                            <v-icon v-html="item.icon"></v-icon>-->
                        <!--                        </v-list-item-action>-->
                        <v-list-item-title color="secondary">
                            {{$t('nav:' + item.title)}}
                        </v-list-item-title>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-content>
            <router-view/>
        </v-content>
        <v-footer :fixed="fixed">
            <span></span>
        </v-footer>
    </v-app>
</template>

<script>
    import i18n from '@/I18n'

    export default {
        data() {
            i18n.i18next.addResources('fr', 'nav', {
                gettingStarted: 'Pour commencer',
                welcome: 'Bienvenue',
                newUser: 'Nouvel utilisateur',
                tree101: 'Arborescence 101',
                title: 'Documentation de mindrespect.com',
                logout: 'Déconnexion',
                requestError: 'Il y a un problème de connexion avec notre serveur. Essayez de nouveau plus tard.',
                ingredients: 'Ingrédients',
                results: 'Résultats',
                entries: 'Entrées',
            });
            i18n.i18next.addResources('en', 'nav', {
                gettingStarted: 'Getting started',
                welcome: 'Welcome',
                newUser: 'New user',
                tree101: 'Tree 101',
                title: 'mindrespect.com documentation',
                logout: 'Logout',
                requestError: 'There\'s a connection problem with our server. Try again later.',
                ingredients: 'Ingredients',
                results: 'Results',
                entries: 'Entries'
            });
            return {
                clipped: false,
                drawer: true,
                fixed: false,
                menuItems: [
                    {header: 'gettingStarted'},
                    {
                        title: 'welcome',
                        path: '/'
                    },
                    {
                        title: 'newUser',
                        path: '/start/arborescence',
                        isActive: () => {
                            return false;
                        }
                    },
                    {
                        title: 'tree101',
                        path: '/start/arborescence',
                        level: 1
                    },
                    {header: 'vision'},
                ],
                miniVariant: false,
                right: true
            }
        },
        name: 'App',
        methods: {
            switchLanguage: function (locale) {
                this.$store.dispatch('setLocale', locale)
            },
            goTo: function (path) {
                if (this.$route.path === path) {
                    return;
                }
                this.$router.push({
                    path: path
                })
            }
        }
    }
</script>

<style>
    .vh-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .v-center {
        display: flex;
        align-items: center;
    }

    .side-menu-active {
        background: rgba(0, 0, 0, 0.04) !important;
    }

    * {
      font-family: 'Quattrocento', serif;
    }
</style>
