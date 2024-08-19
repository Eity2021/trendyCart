import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/contact"));
const Product = lazy(() => import("../pages/product"));

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "about",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <About />
        </Suspense>
      ),
    },
    {
      path: "product",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <Product />
        </Suspense>
      ),
    },
    {
      path: "contact",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <Contact />
        </Suspense>
      ),
    },
  ],
};

export default MainRoutes;
