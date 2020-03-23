import React, { useContext } from "react";
import { Menu, MenuItemProps, Icon, Input, Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import "./Menu.scss";
import { OrderCountContext } from "../../pages/_app";

export default function SiteMenu({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { orderCount } = useContext(OrderCountContext);
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
      <hr className="menu-line" />
      <Menu id="menu" secondary>
        <Menu.Item
          className="menu-item"
          name="home"
          children="Домой"
          active={pathname === "/"}
          onClick={handleMenuChange}
        />
        <Menu.Item
          className="menu-item"
          name="catalog"
          children="Каталог"
          active={pathname === "/catalog"}
          onClick={handleMenuChange}
        />
        <Menu.Item
          className="menu-item"
          name="about"
          children="О компании"
          active={pathname === "/about"}
          onClick={handleMenuChange}
        />
        <Menu.Item
          className="menu-item"
          name="contact"
          children="Контакты"
          active={pathname === "/contact"}
          onClick={handleMenuChange}
        />
        <Menu.Item
          className="menu-item"
          name="order"
          children={`Ваши заказы${orderCount ? `: ${orderCount}` : ""}`}
          active={pathname === "/order"}
          onClick={handleMenuChange}
        />
      </Menu>
      <hr className="menu-line" />
      {children}
    </React.Fragment>
  );
}
