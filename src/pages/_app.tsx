import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "../assets/style/main.scss";
import Menu from "../components/layout/Menu";
import { Router } from "next/router";
import NProgress from "nprogress";
import Notification from "../components/layout/Notification";
import WithFirebase from "./firebase";

interface OrderCountContext {
  orderCount: number;
  setOrderCount: React.Dispatch<React.SetStateAction<number>>;
}

export const OrderCountContext = React.createContext<OrderCountContext>({
  orderCount: 0,
  setOrderCount: () => {}
});

NProgress.settings.showSpinner = false;
Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  const [orderCount, setOrderCount] = useState(() => {
    let count = 0;
    if (typeof window !== "undefined") {
      count = JSON.parse(localStorage.getItem("orderCount") || "0");
    }
    return count;
  });

  return (
    <main id="_app">
      <WithFirebase>
        <Notification>
          <OrderCountContext.Provider value={{ orderCount, setOrderCount }}>
            <Menu>
              <Component {...pageProps} />
            </Menu>
          </OrderCountContext.Provider>
        </Notification>
      </WithFirebase>
    </main>
  );
}
