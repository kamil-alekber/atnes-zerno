import React from "react";
import { Icon, Menu, MenuItemProps } from "semantic-ui-react";

interface Props {
  handleMenuChange: (
    event: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    data: MenuItemProps
  ) => void;
  className: "main-menu" | "mobile-menu";
}

export default function MenuItems(props: Props) {
  const { handleMenuChange, className } = props;
  const children = (
    <>
      <Menu.Item name="home" onClick={handleMenuChange} as="a" header>
        Домой
      </Menu.Item>
      <Menu.Item name="catalog" onClick={handleMenuChange} as="a">
        Каталог
      </Menu.Item>
      <Menu.Item name="about" onClick={handleMenuChange} as="a">
        О компании
      </Menu.Item>
      <Menu.Item name="contact" onClick={handleMenuChange} as="a">
        Контакты
      </Menu.Item>
      <Menu.Item name="order" onClick={handleMenuChange} as="a">
        <Icon color="blue" name="shopping cart" />
        Ваши покупки
      </Menu.Item>
    </>
  );

  if (className === "main-menu")
    return <Menu borderless className={className} children={children} />;
  return children;
}
