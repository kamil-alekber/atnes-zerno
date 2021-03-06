import { useRouter } from "next/router";
import React, { useState } from "react";
import { MenuItemProps, Icon } from "semantic-ui-react";
import "./Menu.scss";
import SidebarMenu from "./SidebarMenu";
import MenuItems from "./MenuItems";

interface Props {
  children: React.ReactNode;
}

export default function Menu({ children }: Props) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();

  function handleMenuChange(
    _event: React.MouseEvent<any>,
    data: MenuItemProps
  ) {
    const path = data.name === "home" ? "/" : `/${data.name}`;
    router.push({ pathname: path });
    setMobileMenu(false);
  }

  return (
    <React.Fragment>
      <SidebarMenu
        handleMenuChange={handleMenuChange}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      >
        <MenuItems className="main-menu" handleMenuChange={handleMenuChange} />
        {children}
      </SidebarMenu>
      {!mobileMenu && (
        <span className="mobile-menu" onClick={() => setMobileMenu(true)}>
          <Icon size="large" name="bars" />
        </span>
      )}
    </React.Fragment>
  );
}
