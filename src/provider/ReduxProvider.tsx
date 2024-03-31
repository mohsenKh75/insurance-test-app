"use client";
import { Provider } from "react-redux";
import store from "@/store/user/store";
import { ReactElement } from "react";

const ReduxProvider = ({ children }: { children: ReactElement }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
