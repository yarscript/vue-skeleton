import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

/**
 * The Router instance containing all the routes for the application.
 */
const router = new VueRouter({
    base: '/',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    mode: 'history', // <-- uncomment to turn on history mode (preferred)
    routes: routes.map((route) => ({
        name: route.name,
        path: route.path,
        component: route.component,
        /**
         * Run this callback before resolve the routing
         */
        beforeEnter: (to, from, next) => {
            // Setup some per-page stuff.
            // document.title = route.title;
            /**
             * Dispatch actions for update state via routing and routes data bind
             */
            router.app.$options.store.dispatch('seo/seoInit');
            // router.app.$options.store.dispatch('updateTitle', route.title);
            // router.app.$options.store.dispatch('updateLayout', route.layout);
            // router.app.$options.store.dispatch('updateFooter', route.footer);
            // router.app.$options.store.dispatch('updateHeader', route.header);

            next();
        },
    })),
});

export default router;
