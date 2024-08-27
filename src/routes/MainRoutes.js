import { Suspense, lazy } from "react";
import Registration from "../components/authentication/registration/Registration";


const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/contact"));
const Product = lazy(() => import("../pages/product"));
const Login = lazy(() => import("../components/authentication/login/Login"));
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
    {
      path: "login",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "registration",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <Registration />
        </Suspense>
      ),
    },
  ],
};

export default MainRoutes;
