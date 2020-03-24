import React from "react";
import { Menu, MenuItemProps, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";

interface Props {
  mobile: boolean;
  mobileTriggerAfterEvent?: () => void;
}

export default function MobileMenu(props: Props) {
  const router = useRouter();
  const { pathname } = router;
  const { mobile, mobileTriggerAfterEvent } = props;

  function handleMenuChange(
    _event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) {
    if (mobile) mobileTriggerAfterEvent();
    const path = data.name === "home" ? "/" : `/${data.name}`;
    router.push({ pathname: path });
  }

  return (
    <Menu secondary vertical={mobile}>
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
        active={pathname === "/order"}
        onClick={handleMenuChange}
      >
        <Icon name="shop" /> Ваши заказы
      </Menu.Item>
    </Menu>
  );
}
