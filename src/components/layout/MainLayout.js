import React from 'react';
import Header from '../../pages/header';
import Footer from '../../pages/footer';

const MainLayout = ({ children }) => {
  return (
    <>
   <Header></Header>
      <main>
        {children}
      </main>
     <Footer></Footer>
    </>
  );
};

export default MainLayout;