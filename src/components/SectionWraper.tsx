import React, { ReactNode } from "react";

export default function SectionWraper({ children }: { children?: ReactNode }) {
    return <section className="py-12 text-red-50 h-full">{children}</section>;
}