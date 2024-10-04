import { Suspense, lazy } from "react";
import HashLoader from "react-spinners/HashLoader";
import PrivateRoutes from "../components/routes/PrivateRoutes";
import PublicRoutes from "../components/routes/PublicRoutes";
import CheckOut from "../pages/checkOut";
const SingleProduct = lazy(() => import("../pages/singleProduct"));
const WishList = lazy(() => import("../pages/wishList"));
const Cart = lazy(() => import("../pages/cart"));
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
        <Suspense
          fallback={
            <div className="h-screen  flex justify-center items-center">
              <HashLoader color="#f7ba01" />
            </div>
          }
        >
          <Home />
        </Suspense>
      ),
    },
    {
      path: "about",
      element: (
        <Suspense
          fallback={
            <div className="h-screen  flex justify-center items-center">
              <HashLoader color="#f7ba01" />
            </div>
          }
        >
          <About />
        </Suspense>
      ),
    },
    {
      path: "product",
      element: (
        <Suspense
          fallback={
            <div className="h-screen  flex justify-center items-center">
              <HashLoader color="#f7ba01" />
            </div>
          }
        >
          <Product />
        </Suspense>
      ),
    },
    {
      path: "contact",
      element: (
        <Suspense
          fallback={
            <div className="h-screen  flex justify-center items-center">
              <HashLoader color="#f7ba01" />
            </div>
          }
        >
          <Contact />
        </Suspense>
      ),
    },
    {
      path: "login",
      element: (
        <PublicRoutes>
          <Suspense
            fallback={
              <div className="h-screen  flex justify-center items-center">
                <HashLoader color="#f7ba01" />
              </div>
            }
          >
            <Login />
          </Suspense>
        </PublicRoutes>
      ),
    },
    {
      path: "registration",
      element: (
        <PublicRoutes>
          <Suspense
            fallback={
              <div className="h-screen  flex justify-center items-center">
                <HashLoader color="#f7ba01" />
              </div>
            }
          >
            <Registration />
          </Suspense>
        </PublicRoutes>
      ),
    },
    {
      path: "profile",
      element: (
        <Suspense
          fallback={
            <div className="h-screen  flex justify-center items-center">
              <HashLoader color="#f7ba01" />
            </div>
          }
        >
          <MainProfile />
        </Suspense>
      ),
    },
    {
      path: "ProductDetails",
      element: (
        <Suspense
          fallback={
            <div className="h-screen  flex justify-center items-center">
              <HashLoader color="#f7ba01" />
            </div>
          }
        >
          <SingleProduct />
        </Suspense>
      ),
    },
    {
      path: "wishList",
      element: (
        <Suspense
          fallback={
            <div className="h-screen  flex justify-center items-center">
              <HashLoader color="#f7ba01" />
            </div>
          }
        >
          <WishList />
        </Suspense>
      ),
    },
    {
      path: "cart",
      element: (
        <Suspense
          fallback={
            <div className="h-screen  flex justify-center items-center">
              <HashLoader color="#f7ba01" />
            </div>
          }
        >
          <Cart />
        </Suspense>
      ),
    },
    {
      path: "checkout",
      element: (
        <Suspense
          fallback={
            <div className="h-screen  flex justify-center items-center">
              <HashLoader color="#f7ba01" />
            </div>
          }
        >
          <CheckOut />
        </Suspense>
      ),
    },


    
  ],
};

export default MainRoutes;
