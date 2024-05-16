import { FC } from "react";
import { Redirect, Route, Switch } from "wouter";

import Container from "@/components/ui/Container";

import SignIn from "./SignIn";
import { GuestProps } from "./Guest.types.ts";

const GuestRedirect = () => <Redirect to="/sign-in" />;

const Guest: FC<GuestProps> = () => {
  return (
    <Container>
      <Switch>
        <Route path="/sign-in" component={SignIn as any} />
        <Route path="/*" component={GuestRedirect} />
      </Switch>
    </Container>
  );
};

export default Guest;
