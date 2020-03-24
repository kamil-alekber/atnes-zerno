import React, { useState } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { useClickOutside } from "../../helpers/hooks/useClickOutside";
import "./Menu.scss";
import MenuItems from "./MenuItems";

export default function SiteMenu() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuRef = useClickOutside(() => {
    setMobileMenu(false);
  });

  function triggerMobileMenu(
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) {
    event.preventDefault();
    setMobileMenu(true);
  }
  console.log(mobileMenu);
  return (
    <React.Fragment>
      <span
        ref={mobileMenuRef}
        onClick={triggerMobileMenu}
        className="mobile-menu"
      >
        {mobileMenu ? (
          <React.Fragment>
            <MenuItems
              mobile
              mobileTriggerAfterEvent={() => {
                setMobileMenu(true);
              }}
            />
          </React.Fragment>
        ) : (
          <Icon name="bars" />
        )}
      </span>

      <div id="web-menu">
        <hr className="menu-line" />
        <Menu id="menu" secondary>
          <MenuItems mobile={false} />
        </Menu>
        <hr className="menu-line" />
      </div>
    </React.Fragment>
  );
}
