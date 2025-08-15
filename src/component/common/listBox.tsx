import React from "react";

interface props {
  title: string;
  children: React.ReactNode;
}

export default function ListBox({ title, children }: props) {
  return (
    <section className="pt-8 px-6">
      <h2 className="pb-2">{title}</h2>
      {children}
    </section>
  );
}
