<template>
    <v-app>
        <v-app-bar
                color="transparent"
                class="black--text elevation-1"
                fixed
                app
        >
            <v-toolbar-title>
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
                            @click="goTo(item)"
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
                newDeveloper: "Nouvelle recrue au développement",
                developer: "Installation de l'environnement de travail",
                tree101: 'Arborescence 101',
                functionalities: 'Fonctionnalités',
                tags: 'Étiquettes',
                search: 'Recherche',
                share: 'Options de partage',
                mobile: 'Version mobile',
                history: 'Histoire',
                values: 'Valeurs',
                philosophy: 'Philosophie',
                founder: 'Fondateur',
                manifesto: 'Manifeste',
                tech: 'Choix technologiques',
                businessPlan: "Plan d'action stratégique",
                compare:  'Comparaison',
                target: 'Public cible',
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
                newDeveloper: 'New Developer',
                developer: 'Install your Workspace',
                tree101: 'Tree 101',
                functionalities: 'Functionalities',
                tags: 'Tags',
                search: 'Search',
                share: 'Share',
                mobile: 'Mobile Version',
                history: 'History',
                values: 'Values',
                philosophy: 'Philosophy',
                founder: 'Founder',
                manifesto: 'Manifesto',
                tech: 'Tekky',
                businessPlan: 'Business Plan',
                compare: 'Comparison',
                target: 'Target Market!',
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
                    {
                        title: 'newDeveloper',
                        path: '/start/developer',
                        isActive: () => {
                            return false;
                        }
                    },{
                        title: 'developer',
                        path: '/start/developer',
                        level: 1
                    },
                    {header: 'vision'},
                    {
                        title: 'Mission',
                        path: '/vision/mission'
                    },
                    {
                        title: 'values',
                        path: '/vision/values'
                    },
                    {
                        title: 'philosophy',
                        path: '/vision/philosophy'
                    },
                    {
                        title: 'founder',
                        path: '/vision/founder'
                    },
                    {
                        title: 'history',
                        path: '/vision/history'
                    },
                    {
                        title: 'manifesto',
                        path: '/vision/manifesto'
                    },
                    {header: 'functionalities'},
                    {
                        title: 'tags',
                        path: '/functionalities/tags'
                    },
                    {
                        title: 'Fusion',
                        path: '/functionalities/fusion'
                    },
                    {
                        title: 'search',
                        path: '/functionalities/search'
                    },
                    {
                        title: 'share',
                        path: '/functionalities/share'
                    },
                    {
                        title: 'mobile',
                        path: '/functionalities/mobile'
                    },
                    {header: 'tech'},
                    {
                        title: 'Github',
                        path: '/functionalities/github'
                    },
                    {
                        title: 'Neo4J',
                        path: '/functionalities/neo4j'
                    },
                    {
                        title: 'Vue.JS',
                        path: '/functionalities/vuejs'
                    },
                    {header: 'businessPlan'},
                    {
                        title: 'compare',
                        path: '/businessPlan/compare'
                    },
                    {
                        title: 'Finance',
                        path: '/businessPlan/finance'
                    },
                    {
                        title: 'target',
                        path: '/businessPlan/target'
                    }
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
            goTo: function (item) {
                if (this.$route.path === item.path) {
                    return;
                }
                this.$router.push({
                    path: item.path
                });
                this.reviewTitle();
            },
            reviewTitle: function () {
                let items = this.menuItems.filter((item) => {
                    return item.title && item.path === this.$route.path && (!item.isActive || item.isActive());
                });
                if (items.length > 0) {
                    document.title = this.$t('nav:' + items[0].title);
                }
            }
        },
        mounted: function () {
            this.reviewTitle();
        },
        computed: {
            currentPath: function () {
                return this.$route.path;
            }
        },
        watch: {
            currentPath: function () {
                this.reviewTitle();
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
        font-family: 'Raleway', sans-serif;
    }
</style>
