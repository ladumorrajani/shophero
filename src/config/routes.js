import { lazy } from "react";

export const routes = {
  home: {
    path: "/",
    component: lazy(() => import("../pages/Home/Home")),
    exact: true,
  },
  about: {
    path: "/about",
    component: lazy(() => import("../pages/AboutUs/AboutUs")),
    exact: true,
  },
  ngo: {
    path: "/ngo",
    component: lazy(() =>
      import("../pages/NonProfiteOrganization/NonProfiteOrganization")
    ),
    exact: true,
  },
  register: {
    path: "/register",
    component: lazy(() => import("../pages/RegisterNgo/RegisterNgo")),
    exact: true,
  },
  faq: {
    path: "/faq",
    component: lazy(() => import("../pages/Faq/Faq")),
    exact: true,
  },
  contact: {
    path: "/contact",
    component: lazy(() => import("../pages/Contact/Contact")),
    exact: true,
  },
  howitworks: {
    path: "/howitworks",
    component: lazy(() => import("../pages/HowItWorksPage/HowItWorksPage")),
    exact: true,
  },
};

export const renderRoutes = Object.entries(routes);
