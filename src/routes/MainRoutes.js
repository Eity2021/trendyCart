import { Suspense, lazy } from "react";
import PrivateRoutes from "../components/routes/PrivateRoutes";
import PublicRoutes from "../components/routes/PublicRoutes";
const SingleProduct = lazy(() => import("../pages/singleProduct"));
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
    {
      path: "ProductDetails",
      element: (
        <Suspense fallback={<p>Loading...</p>}>
          <SingleProduct />
        </Suspense>
      ),
    },
  ],
};

export default MainRoutes;
