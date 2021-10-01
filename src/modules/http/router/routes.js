/**
 * Every route becomes a chunk, loaded only when used.
 * Reduces size of initial App load.
 *
 * Here you can bind data to routes and call the dispatcher from "./router.js" file
 */
const routes = [
  {
    name: 'AppHome',
    path: '/',
    component: () => import('@/modules/app/views/TheHome'),
    title: 'Lev',
    layout: 'DefaultLayout',
    header: {
      data: {
        showCart: false,
      },
    },
    footer: {
      componentName: 'AppMainFooter',
      data: {
        showCart: false,
      },
    },
    isPublic: true,
  },

];

export default routes;
