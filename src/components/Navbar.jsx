import React from "react";

import { appleIcon, searchIcon } from "../assets";
import { navLists } from "../constants";

const Navbar = () => {
    return (
        <header>
            <nav>
                <a href="#">
                    <img src={appleIcon} alt="Apple" width={14} height={18}/>
                </a>
                <div>
                {navLists.map((nav)) => (
                    <div>
                        {nav}
                    </div>
                ))}
                </div>

                <div>
                    <a>
                        <img src={searchIcon} alt="search" width={18} height={18}/>
                    </a>
                    <a>
                        <img src={bagIcon} alt="bag" width={18} height={18}/>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
