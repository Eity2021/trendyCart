import React from "react";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import { useRoutes } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';
function App() {
  const routes = useRoutes([MainRoutes]);
  return (
    <div>
      <MainLayout>
  {routes}
      </MainLayout>
    </div>
  );
}

export default App;
