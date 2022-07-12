import React from "react";
import { useRouter } from "next/router";
import useAppMount from "../hooks/useAppMount";

interface Iprops {
  children: React.ReactChild | React.ReactElement;
}

const AppProvider = ({ children }: Iprops) => {
  const router = useRouter();
  const { mounted } = useAppMount({ router });

  return mounted ? <>{children}</> : null;
};

export default AppProvider;
