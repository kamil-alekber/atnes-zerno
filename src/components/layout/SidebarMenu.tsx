import React, { Dispatch, SetStateAction } from "react";
import { Menu, MenuItemProps, Segment, Sidebar } from "semantic-ui-react";
import Footer from "./Footer";
import Header from "./Header";
import MenuItems from "./MenuItems";

interface Props {
  mobileMenu: boolean;
  setMobileMenu?: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  handleMenuChange: (
    event: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    data: MenuItemProps
  ) => void;
}

export default function SidebarMenu(props: Props) {
  const { mobileMenu, setMobileMenu, children, handleMenuChange } = props;

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        onHide={() => setMobileMenu(false)}
        animation="overlay"
        direction="left"
        inverted={true}
        vertical={true}
        visible={mobileMenu}
      >
        <MenuItems
          className="mobile-menu"
          handleMenuChange={handleMenuChange}
        />
      </Sidebar>

      <Sidebar.Pusher dimmed={mobileMenu}>
        <Header />
        <Segment basic>{children}</Segment>
        <Footer />
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}
