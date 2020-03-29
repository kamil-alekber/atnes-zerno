import React from "react";
import "./Header.scss";
import { useRouter } from "next/router";
import { Icon } from "semantic-ui-react";

interface Props {}

export default function Header({}: Props) {
  const router = useRouter();

  return (
    <section id="header-section">
      <h1 onClick={() => router.push("/")} className="header-title">
        <Icon name="pagelines" color="yellow" flipped="horizontally" />
        Атнес Зерно
        <Icon name="pagelines" color="yellow" />
      </h1>
    </section>
  );
}
