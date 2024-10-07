/*eslint-disable*/

import React from "react";
import Header from './Header'
import {Outlet} from 'react-router-dom'

function PageLayout() {
  return (
    <>
      <header className="page-header">
        <Header />
      </header>
      <main>
        <Outlet /> 
      </main>
    </>
  );
}

export default PageLayout