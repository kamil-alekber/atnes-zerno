import React from "react";
import Order from "../../components/order";

export default function index({ app }: { app: firebase.app.App }) {
  return <Order app={app} />;
}
