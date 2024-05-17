import { FC } from "react";

import s from "./UserCard.module.scss";
import { UserCardProps } from "./UserCard.types.ts";

const UserCard: FC<UserCardProps> = ({
  id,
  className,
  avatarUrl,
  name = "",
  message = "",
  chatId,
}) => {
  return (
    <a
      id={id}
      className={`${s.UserCard} ${className}`}
      href={`/chat/${chatId}`}
    >
      <div className={s.avatar}>{name?.slice(0, 2)}</div>
      <div className={s.info}>
        <div className={s.name}>Username</div>
        <div className={s.message}>{message?.slice(0, 40)}</div>
      </div>
    </a>
  );
};

export default UserCard;
