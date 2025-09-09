import { Button, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
 

export function SideNav() { 

  const location = useLocation();

  // Dropdown open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Check if current path matches one of the child links
  useEffect(() => {
    if (
      location.pathname.startsWith("/genders") ||
      location.pathname.startsWith("/industries") ||
      location.pathname.startsWith("/networking-goals") ||
      location.pathname.startsWith("/artistic-identities") ||
      location.pathname.startsWith("/primary-mediums") ||
      location.pathname.startsWith("/skills-and-techniques") ||
      location.pathname.startsWith("/tools-and-software") ||
      location.pathname.startsWith("/collaboration-goals") ||
      location.pathname.startsWith("/interests") ||
      location.pathname.startsWith("/work") ||
      location.pathname.startsWith("/communication-styles") ||
      location.pathname.startsWith("/love-languages") ||
      location.pathname.startsWith("/zodiac-signs") ||
      location.pathname.startsWith("/ice-breaker-prompts")

      
    ) {
      setIsOpen(true); // keep open if a child is active
    }
  }, [location.pathname]);

  return (
    <aside className="z-50 h-100 duration-300 rounded-none side_navbar"> 
      <div className="side_nav_links_main pt-2">
        <ul className="mb-4 flex flex-col gap-1">
          <li>
            <NavLink className="side_nav_link" to={"/"}>
              {({ isActive }) => (
                <Button
                  className={`flex items-center gap-4 px-4 capitalize side_nav_btn w-100 ${isActive ? "bg-indigo-100 text-indigo-700" : ""
                    }`}
                >
                  <div className="nav_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path></svg>
                  </div>
                  <Typography className="font-medium capitalize">
                    Dashbaord
                  </Typography>
                </Button>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink className="side_nav_link" to={"/users"}>
              {({ isActive }) => (
                <Button
                  className={`flex items-center gap-4 px-4 capitalize side_nav_btn w-100 ${isActive ? "bg-indigo-100 text-indigo-700" : ""
                    }`}
                >
                  <div className="nav_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit"><path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clipRule="evenodd"></path></svg>
                  </div>
                  <Typography className="font-medium capitalize">
                    Users
                  </Typography>
                </Button>
              )}
            </NavLink>
          </li>
          {/* dropdown */}
           <li> 
              {/* Parent button */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between gap-2 px-4 py-3 cursor-pointer side_nav_link bg-[#1d2531] text-[#b7c0cd] font-semibold"
              >
                <div className="flex items-center gap-3">
                  <span>📁</span>
                  <span className="font-medium capitalize text-white">
                    References Data
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-4 h-4 transition-transform text-white ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Child links */}
              {isOpen && (
                <ul className="ml-6 mt-1 space-y-1">
                  <li>
                    <NavLink
                      to="/genders"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm side_nav_link ${
                          isActive ? "text-indigo-600 font-semibold" : "text-white"
                        }`
                      }
                    >
                      Genders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/industries"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm side_nav_link ${
                          isActive ? "text-indigo-600 font-semibold" : "text-white"
                        }`
                      }
                    >
                      Industries
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/networking-goals"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm side_nav_link ${
                          isActive ? "text-indigo-600 font-semibold" : "text-white"
                        }`
                      }
                    >
                      Networking Goals
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/artistic-identities"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm side_nav_link ${
                          isActive ? "text-indigo-600 font-semibold" : "text-white"
                        }`
                      }
                    >
                      Artistic Identities
                    </NavLink>
                  </li>  
                  <li>
                    <NavLink
                      to="/primary-mediums"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm side_nav_link ${
                          isActive ? "text-indigo-600 font-semibold" : "text-white"
                        }`
                      }
                    >
                       Primary Mediums
                    </NavLink>
                  </li> 
                  <li>
                    <NavLink
                      to="/skills-and-techniques"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm side_nav_link ${
                          isActive ? "text-indigo-600 font-semibold" : "text-white"
                        }`
                      }
                    >
                       Skills and Techniques 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/tools-and-software"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm side_nav_link ${
                          isActive ? "text-indigo-600 font-semibold" : "text-white"
                        }`
                      }
                    >
                       Tools and Software
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/collaboration-goals"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm side_nav_link ${
                          isActive ? "text-indigo-600 font-semibold" : "text-white"
                        }`
                      }
                    > 
                       CollaborationGoals
                    </NavLink>
                  </li>

                   <li>
                    <NavLink
                      to="/interests"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm side_nav_link ${
                          isActive ? "text-indigo-600 font-semibold" : "text-white"
                        }`
                      }
                    > 
                       Interests
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/work"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm side_nav_link ${
                          isActive ? "text-indigo-600 font-semibold" : "text-white"
                        }`
                      }
                    > 
                       Work
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/communication-styles"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm side_nav_link ${
                          isActive ? "text-indigo-600 font-semibold" : "text-white"
                        }`
                      }
                    > 
                       Communication Styles
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/love-languages"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm side_nav_link ${
                          isActive ? "text-indigo-600 font-semibold" : "text-white"
                        }`
                      }
                    > 
                      Love Languages
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/zodiac-signs"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm side_nav_link ${
                          isActive ? "text-indigo-600 font-semibold" : "text-white"
                        }`
                      }
                    > 
                      Zodiac Signs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ice-breaker-prompts"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm side_nav_link ${
                          isActive ? "text-indigo-600 font-semibold" : "text-white"
                        }`
                      }
                    > 
                      IceBreaker Prompts
                    </NavLink>
                  </li>

                  

                  
                 
                </ul>
              )} 
          </li>

         <li>
            <NavLink className="side_nav_link" to={"/posts"}>
              {({ isActive }) => (
                <Button
                  className={`flex items-center gap-4 px-4 capitalize side_nav_btn w-100 ${isActive ? "bg-indigo-100 text-indigo-700" : ""
                    }`}
                >
                  <div className="nav_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit"><path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clipRule="evenodd"></path></svg>
                  </div>
                  <Typography className="font-medium capitalize">
                    Posts
                  </Typography>
                </Button>
              )}
            </NavLink>
          </li>
          
        </ul> 
      </div> 

    </aside>
  );
}
 

export default SideNav;
