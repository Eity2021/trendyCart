import  { useEffect ,useState} from "react";
import { userLoggedIn } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");

    console.log("localAuth", localAuth);
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken) {
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
          })
        );
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);
  return authChecked;
}
