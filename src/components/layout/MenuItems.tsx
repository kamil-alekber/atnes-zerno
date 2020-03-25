import React from "react";
import { Icon, Menu, MenuItemProps } from "semantic-ui-react";
import { useRouter } from "next/router";

interface Props {
  handleMenuChange: (
    event: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    data: MenuItemProps
  ) => void;
  className: "main-menu" | "mobile-menu";
}

export default function MenuItems(props: Props) {
  const { handleMenuChange, className } = props;
  const router = useRouter();
  const { pathname } = router;
  const children = (
    <>
      <Menu.Item
        active={pathname === "/"}
        name="home"
        onClick={handleMenuChange}
      >
        Домой
      </Menu.Item>
      <Menu.Item
        active={pathname === "/catalog"}
        name="catalog"
        onClick={handleMenuChange}
      >
        Каталог
      </Menu.Item>
      <Menu.Item
        active={pathname === "/about"}
        name="about"
        onClick={handleMenuChange}
      >
        О компании
      </Menu.Item>
      <Menu.Item
        active={pathname === "/contact"}
        name="contact"
        onClick={handleMenuChange}
      >
        Контакты
      </Menu.Item>
      <Menu.Item
        active={pathname === "/order"}
        name="order"
        onClick={handleMenuChange}
      >
        <Icon color="blue" name="shopping cart" />
        Ваши покупки
      </Menu.Item>
    </>
  );

  if (className === "main-menu")
    return (
      <Menu borderless tabular className={className} children={children} />
    );
  return children;
}
