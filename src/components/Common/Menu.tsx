import React, { useContext } from "react";
import { Menu, MenuItemProps, Icon, Input } from "semantic-ui-react";
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
      <Menu id="siteMenu" secondary>
        <Menu.Item
          name="home"
          children="Домой"
          active={pathname === "/"}
          onClick={handleMenuChange}
        />
        <Menu.Item
          name="about"
          children="О нас"
          active={pathname === "/about"}
          onClick={handleMenuChange}
        />
        <Menu.Item
          name="contact"
          children="Контакты"
          active={pathname === "/contact"}
          onClick={handleMenuChange}
        />
        <Menu.Item
          name="order"
          children={`Ваши заказы${orderCount ? `: ${orderCount}` : ""}`}
          active={pathname === "/order"}
          onClick={handleMenuChange}
        />
      </Menu>

      {children}
    </React.Fragment>
  );
}
