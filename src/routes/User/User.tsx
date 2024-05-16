import { FC } from "react";
import { Redirect, Route, Switch } from "wouter";

import Container from "@/components/ui/Container";

import Users from "./Users";
import Chat from "./Chat";
import { UserProps } from "./User.types.ts";

const UserRedirect = () => <Redirect to="/" />;

const User: FC<UserProps> = () => {
  return (
    <Container>
      <Switch>
        <Route path="/" component={Users as any} />
        <Route path="/chat" component={Chat as any} />
        <Route path="/*" component={UserRedirect} />
      </Switch>
    </Container>
  );
};

export default User;
