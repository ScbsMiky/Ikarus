import React from "react";

export type Components = {
  Header: React.FC<Child>;
  Footer: React.FC<Child>;
};

export type Child = {
  children: JSX.Element | JSX.Element[ ];
};