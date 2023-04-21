import React, { ReactNode } from "react";
import { memo } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <div className='todo-app-container'>{children}</div>;
}

export default memo(Layout);
