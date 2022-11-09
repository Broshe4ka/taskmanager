import { HTMLAttributes, ReactNode } from "react";

export interface LayoutProps extends HTMLAttributes<HTMLDivElement>{
  children:ReactNode;
}