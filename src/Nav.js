import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
    const [show,handleShow]=useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
          handleShow(true)
      } else handleShow(false);
    });
    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className="nav__logo"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/9ffe3a40308859.577a9d3636198.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/541268152164708354/qAXVIU-I.png"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
