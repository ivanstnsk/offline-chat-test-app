import { FC } from "react";

import s from "./Chat.module.scss";
import { ChatProps } from "./Chat.types.ts";
import { useParams } from "wouter";
import MainButton from "@/components/ui/Button/MainButton/MainButton.tsx";

const Chat: FC<ChatProps> = () => {
  const { id } = useParams();

  return (
    <div id={id} className={`${s.Chat}`}>
      <div className={`${s.header}`}>Chat {id}</div>
      <div className={`${s.messages}`}>messages</div>
      <div className={`${s.footer}`}>
        <textarea></textarea>
        <MainButton type="button" onClick={() => {}}>
          Send
        </MainButton>
      </div>
    </div>
  );
};

export default Chat;
