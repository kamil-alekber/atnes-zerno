import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";
import { Menu, MenuItemProps, Segment, Sidebar } from "semantic-ui-react";
import Header from "./Header";
import Footer from "./Footer";
interface Props {
  mobileMenu: boolean;
  setMobileMenu?: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function MenuItems(props: Props) {
  const router = useRouter();
  const { mobileMenu, setMobileMenu, children } = props;

  function handleMenuChange(
    _event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) {
    const path = data.name === "home" ? "/" : `/${data.name}`;
    router.push({ pathname: path });
    setMobileMenu(false);
  }

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        id="main-menu"
        onHide={() => setMobileMenu(false)}
        animation="overlay"
        direction="left"
        inverted={true}
        vertical={true}
        visible={mobileMenu}
      >
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
          Ваши покупки
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={mobileMenu}>
        <Header />
        <Segment basic>{children}</Segment>
        <Footer />
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}
