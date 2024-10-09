import React from "react";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import { useRoutes } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import useAuthCheck from "./hooks/useAuthCheck";
function App() {
  const routes = useRoutes([MainRoutes]);
  const authChecked = useAuthCheck();
  return (
    <div className="bg-white">
      <div>
        {!authChecked ? (
          <div>
            <p>Checking authentication</p>
          </div>
        ) : (
          <MainLayout>{routes}</MainLayout>
        )}
      </div>
    </div>
  );
}

export default App;
