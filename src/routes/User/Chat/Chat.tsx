import { FC } from "react";

import s from "./Chat.module.scss";
import { ChatProps } from "./Chat.types.ts";

const Chat: FC<ChatProps> = ({ id, className }) => {
  return (
    <div id={id} className={`${s.Chat} ${className}`}>
      Chat
    </div>
  );
};

export default Chat;
