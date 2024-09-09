import { Suspense, lazy } from "react";
import PrivateRoutes from "../components/routes/PrivateRoutes";
import PublicRoutes from "../components/routes/PublicRoutes";
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/contact"));
const Product = lazy(() => import("../pages/product"));
const Login = lazy(() => import("../components/authentication/login/Login"));
const Registration = lazy(() =>
  import("../components/authentication/registration/Registration")
);
const MainProfile = lazy(() =>
  import("../pages/header/mainHeader/userInfo/MainProfile")
);

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <PublicRoutes>
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        </PublicRoutes>
      ),
    },
    {
      path: "about",
      element: (
        <PublicRoutes>
          <Suspense fallback={<p>Loading...</p>}>
            <About />
          </Suspense>
        </PublicRoutes>
      ),
    },
    {
      path: "product",
      element: (
        <PublicRoutes>
          <Suspense fallback={<p>Loading...</p>}>
            <Product />
          </Suspense>
        </PublicRoutes>
      ),
    },
    {
      path: "contact",
      element: (
        <PublicRoutes>
          <Suspense fallback={<p>Loading...</p>}>
            <Contact />
          </Suspense>
        </PublicRoutes>
      ),
    },
    {
      path: "login",
      element: (
        <PublicRoutes>
          <Suspense fallback={<p>Loading...</p>}>
            <Login />
          </Suspense>
        </PublicRoutes>
      ),
    },
    {
      path: "registration",
      element: (
        <PublicRoutes>
          <Suspense fallback={<p>Loading...</p>}>
            <Registration />
          </Suspense>
        </PublicRoutes>
      ),
    },
    {
      path: "profile",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <MainProfile />
        </Suspense>
      ),
    },
  ],
};

export default MainRoutes;
