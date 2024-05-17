import { FC } from "react";

import s from "./Sidebar.module.scss";
import { SidebarProps } from "./Sidebar.types.ts";
import UserCard from "../ui/UserCard";

const Sidebar: FC<SidebarProps> = ({ id, className }) => {
  return (
    <div id={id} className={`${s.Sidebar} ${className}`}>
      <div className={s.name}>Name</div>
      <div className={s.users}>
        <UserCard chatId="1" name="Username" message="Message" avatarUrl="" />
        <UserCard chatId="2" name="Username" message="Message" avatarUrl="" />
        <UserCard chatId="3" name="Username" message="Message" avatarUrl="" />
        <UserCard chatId="4" name="Username" message="Message" avatarUrl="" />
      </div>
    </div>
  );
};

export default Sidebar;
