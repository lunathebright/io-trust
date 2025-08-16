"use client";
import React, { useEffect, useState } from "react";
import ListBox from "./common/listBox";
import List from "./common/list";
import { IFavorite } from "@/types/favorite";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/favorite.json`;

export default function Favorite() {
  const [favorites, setFavorites] = useState<IFavorite[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setFavorites);
  }, []);

  return (
    <ListBox title="즐겨찾기">
      {favorites.map((fav) => (
        <List
          hasIcon={true}
          setFavorites={setFavorites}
          data={fav}
          key={fav.id}
        />
      ))}
    </ListBox>
  );
}
