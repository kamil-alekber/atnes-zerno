import React, { Children } from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";
import { useRouter } from "next/router";
import "./Menu.scss";

export default function SiteMenu({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { pathname } = router;
  function handleMenuChange(
    _event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) {
    const path = data.name === "home" ? "/" : `/${data.name}`;
    router.push({ pathname: path });
  }

  return (
    <React.Fragment>
      <Menu className="siteMenu" secondary>
        <Menu.Item
          name="home"
          active={pathname === "/"}
          onClick={handleMenuChange}
        />
        <Menu.Item
          name="about"
          active={pathname === "/about"}
          onClick={handleMenuChange}
        />
        <Menu.Item
          name="contact"
          active={pathname === "/contact"}
          onClick={handleMenuChange}
        />
        {/* <Menu.Menu position="right">
        <Menu.Item>
        <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item
        name="logout"
        active={activeItem === "logout"}
        onClick={this.handleItemClick}
        />
      </Menu.Menu> */}
      </Menu>
      {children}
    </React.Fragment>
  );
}
