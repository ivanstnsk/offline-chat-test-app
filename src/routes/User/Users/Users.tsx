import { FC } from "react";

import s from "./Users.module.scss";
import { UsersProps } from "./Users.types.ts";

const Users: FC<UsersProps> = ({ id, className }) => {
  return (
    <div id={id} className={`${s.Users} ${className}`}>
      Users
    </div>
  );
};

export default Users;
