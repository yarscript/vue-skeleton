export default {
  sidebar: {
    visible: true,
  },
  title: 'Lev',
  layout: 'DefaultLayout',
  footer: {
    componentName: 'AppMainFooter',
    data: {
      title: '',
      buttonTitle: '',
      imageUrl: false,
      class: 'footer--without-nav',
      showNav: true,
      showDelivery: true,
      display: true,
      href: '',
    },
  },
  header: {
    componentName: 'AppHeader',
    data: {
      showCarts: null,
    },
  },
  error: {
    code: null,
    level: null,
    message: '',
  },
  dropMenu: {
    isActive: false,
  },
  cheesecake: true,
  pies: false,
};
