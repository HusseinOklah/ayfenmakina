import React, { ReactNode } from "react";

export default function ItemWrapper({ children }: { children?: ReactNode }) {
    return <section className="py-12 h-full">{children}</section>;
}
