import React, { useState } from "react";
import "./SideBar.css";

function SideBar() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className={`sidebar ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <li>
          <a className="heading">
            <div className="sidebar-dashboard">
              <i class="nav-icon fas fa-tachometer-alt"></i>
            </div>
            ECI Home
          </a>
        </li>

        <div onClick={() => setInactive(!inactive)} className="toggle-arrow">
          <i
            class={`${
              inactive
                ? "bi bi-arrow-right-square-fill"
                : "bi bi-arrow-left-square-fill"
            }`}
          ></i>
        </div>
      </div>

      <div className="search-box">
        <div className="search-btn">
          <i class="bi bi-search"></i>
        </div>
        <input type="text" placeholder="search"></input>
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-circle"></i>
              </div>
              Teamcenter ECI Owners
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
