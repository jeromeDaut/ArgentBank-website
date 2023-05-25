import React from "react";
import { NavLink } from "react-router-dom";
const PageNotFound = () => {
  return (
    <main className="error bg-dark">
      <h1 className="error__title"><span className="error__title--404">Error: 404</span></h1>
      <p>The requested page does not exist.</p>
      <NavLink to="/">Go back to the homepage ?</NavLink>
    </main>
  );
};

export default PageNotFound;