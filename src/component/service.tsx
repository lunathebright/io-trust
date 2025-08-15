"use client";
import React, { useEffect, useState } from "react";
import ListBox from "./common/listBox";
import List from "./common/list";
import { IDapp } from "@/types/dapp";

export default function Service() {
  const [services, setServices] = useState<IDapp[]>([]);

  useEffect(() => {
    fetch("/data/dapp.json")
      .then((res) => res.json())
      .then(setServices);
  }, []);

  return (
    <ListBox title="목록">
      {services.map((service) => (
        <List data={service} key={service.id} />
      ))}
    </ListBox>
  );
}
