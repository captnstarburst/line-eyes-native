const routes = [
  {
    path: '/Landing',
    component: LandingPage,
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus,
      },
      {
        path: '/tacos/cart',
        component: Cart,
      },
    ],
  },
];
