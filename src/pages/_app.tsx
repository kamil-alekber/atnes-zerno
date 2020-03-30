import firebase from "firebase/app";
import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "../assets/style/main.scss";
import Menu from "../components/layout/Menu";
import { Router } from "next/router";
import NProgress from "nprogress";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAogtjW-13s-seM51sVzij1nYQQ_QAvqYM",
  authDomain: "test-client-public.firebaseapp.com",
  databaseURL: "https://test-client-public.firebaseio.com",
  projectId: "test-client-public",
  storageBucket: "test-client-public.appspot.com",
  messagingSenderId: "1006150743739",
  appId: "1:1006150743739:web:de9588bfd423092ac05b9e",
  measurementId: "G-TWDZVLZ0KC"
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

interface OrderCountContext {
  orderCount: number;
  setOrderCount: React.Dispatch<React.SetStateAction<number>>;
}

export const OrderCountContext = React.createContext<OrderCountContext>({
  orderCount: 0,
  setOrderCount: () => {}
});
import Notification from "../components/layout/Notification";

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
      <Notification>
        <OrderCountContext.Provider value={{ orderCount, setOrderCount }}>
          <Menu>
            <Component {...pageProps} app={app} />
          </Menu>
        </OrderCountContext.Provider>
      </Notification>
    </main>
  );
}
