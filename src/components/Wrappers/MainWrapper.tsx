import clsx from "clsx";
import React, { ReactNode } from "react";

export default function MainWrapper({ children }: { children?: ReactNode }) {
    return <main className={clsx("container mx-auto py-10")}>{children}</main>;
}
