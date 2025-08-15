"use client";
import React, { useEffect, useState } from "react";
import ListBox from "./common/listBox";
import List from "./common/list";
import { IDapp } from "@/types/dapp";
import { useVisible } from "@/hooks/useVisible";

export default function Service() {
  const [services, setServices] = useState<IDapp[]>([]);
  const filteredServices = useVisible(services);

  useEffect(() => {
    fetch("/data/dapp.json")
      .then((res) => res.json())
      .then(setServices);
  }, []);

  return (
    <ListBox title="목록">
      {filteredServices.map((service) => (
        <List data={service} key={service.id} />
      ))}
    </ListBox>
  );
}
