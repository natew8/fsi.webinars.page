import React from "react";
import headerStyles from "./header.module.scss";

function Header(props) {
  return (
    <header className={headerStyles.header}>
      <div>
        <h1>
          Brand new free <strong>Online</strong> Social Security workshop
        </h1>
      </div>
    </header>
  );
}

export default Header;
