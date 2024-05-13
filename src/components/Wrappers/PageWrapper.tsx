import clsx from "clsx";
import React, { ReactNode } from "react";

export default function PageWrapper({ children }: { children?: ReactNode }) {
    return <body className={clsx('bg-primary-200 min-h-screen text-base text-primary-800 font-medium')}>{children}</body>
}
