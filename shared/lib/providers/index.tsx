"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/app/store";

const Providers = ({ children }: React.PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);

export default Providers;
