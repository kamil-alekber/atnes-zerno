import React, { useEffect, useState } from "react";
import { Message } from "semantic-ui-react";

interface MsgContext {
  emitMessage?: (opts?: { header: string; content: string }) => void;
}
export const MsgContext = React.createContext<MsgContext>({});

interface Props {
  children: React.ReactChild;
}

export default function Notification({ children }: Props) {
  const [hidden, setHidden] = useState(true);
  const [settings, setSettings] = useState({
    header: "Заказ оформлен",
    content: "Как только наши менеджеры освободяться, с вами свяжутся",
    timeOut: 2500
  });

  const emitMessage = (opts?: {
    header: string;
    content: string;
    timeOut: number;
  }) => {
    if (opts) setSettings(opts);
    setHidden(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setHidden(true);
    }, settings.timeOut || 3500);

    return () => {};
  }, [hidden]);

  return (
    <MsgContext.Provider value={{ emitMessage }}>
      <Message
        className="site-notification"
        hidden={hidden}
        success
        header={settings.header}
        content={settings.content}
      />
      {children}
    </MsgContext.Provider>
  );
}
