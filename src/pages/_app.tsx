import firebase from "firebase/app";
import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment } from "semantic-ui-react";
import "../assets/style/main.scss";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Menu from "../components/Layout/Menu";

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

export default function App({ Component, pageProps }) {
  const [orderCount, setOrderCount] = useState(() => {
    let count = 0;
    if (typeof window !== "undefined") {
      count = JSON.parse(localStorage.getItem("orderCount") || "0");
    }
    return count;
  });

  return (
    <main id="app">
      <Segment className="app-segment">
        <Header />
        <OrderCountContext.Provider value={{ orderCount, setOrderCount }}>
          <Menu>
            <Component {...pageProps} app={app} />
          </Menu>
        </OrderCountContext.Provider>
        <Footer />
      </Segment>
    </main>
  );
}
