/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useCurrentDoc } from "docz";

import * as styles from "./styles";
import { NavLink } from "gatsby-theme-docz/src/components/NavLink/index";
import { ChevronDown } from "gatsby-theme-docz/src/components/Icons/index";

export const NavGroup = ({ item, sidebarRef }) => {
  const currentDoc = useCurrentDoc();
  const currentDocRef = React.useRef();
  const { name, menu } = item;
  console.log("YYYYYYYYY", currentDoc);
  const [subheadingsVisible, setShowsubheadings] = React.useState(false);
  const toggleSubheadings = () => setShowsubheadings(!subheadingsVisible);
  React.useEffect(() => {
    if (sidebarRef.current && currentDocRef.current) {
      sidebarRef.current.scrollTo(0, currentDocRef.current.offsetTop);
    }
  }, []);
  const menuContainsCurrentPage = menu.some(menuItem => {
    return menuItem.route === currentDoc.route;
  });
  return (
    <div sx={styles.wrapper} data-testid="nav-group">
      <div sx={styles.title} onClick={toggleSubheadings}>
        {item.name}
        <ChevronDown sx={styles.chevron({ active: subheadingsVisible })} />
      </div>
      <div sx={styles.sublinkWrapper} data-testid="nav-group-links">
        {menu &&
          (subheadingsVisible || menuContainsCurrentPage) &&
          menu.map(menu => {
            if (currentDoc.route === menu.route) {
              return (
                <NavLink key={menu.id} item={menu} ref={currentDocRef}>
                  {menu.name}
                </NavLink>
              );
            }
            return (
              <NavLink key={menu.id} item={menu}>
                {menu.name}
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};
