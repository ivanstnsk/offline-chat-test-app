import { FC } from "react";
import { Redirect, Route, Switch } from "wouter";

import Sidebar from "@/components/Sidebar";

import Chat from "./Chat";
import { UserProps } from "./User.types.ts";
import s from "./User.module.scss";

const UserRedirect = () => <Redirect to="/" />;

const User: FC<UserProps> = () => {
  return (
    <div className={s.User}>
      <Sidebar />
      <Switch>
        <Route path="/chat/:id" component={Chat as any} />
        <Route path="/*" component={UserRedirect} />
      </Switch>
    </div>
  );
};

export default User;
