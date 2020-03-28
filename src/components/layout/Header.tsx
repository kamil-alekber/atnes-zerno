import React from "react";
import "./Header.scss";
import { useRouter } from "next/router";

interface Props {}

export default function Header({}: Props) {
  const router = useRouter();

  return (
    <section id="header-section">
      <h1 onClick={() => router.push("/")} className="header-title">
        Атнес-Зерно
      </h1>
    </section>
  );
}
