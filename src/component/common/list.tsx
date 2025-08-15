import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { IDapp } from "@/types/dapp";
import { IFavorite } from "@/types/favorite";
import { FaBookmark } from "react-icons/fa";
import Toast from "./toast";

interface props {
  hasIcon?: boolean;
  data: IFavorite | IDapp;
  setFavorites?: Dispatch<SetStateAction<IFavorite[]>>;
}

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/images`;

export default function List({ hasIcon = false, data, setFavorites }: props) {
  const [selected, setSelected] = useState(false);

  const onClickList = () => {
    setSelected(true);
  };

  const onClickRemoveFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites?.((prev) => prev.filter((fav) => fav.id !== data.id));
  };

  return (
    <>
      <li
        onClick={onClickList}
        className="list-none flex items-center py-5 border-y border-[#e3e3e3] cursor-pointer"
      >
        <div className="relative w-16 aspect-square mr-4 overflow-hidden rounded-lg shadow-xl/25">
          <Image
            src={`${API_URL}/${data.icon}`}
            alt={data.name}
            fill
            sizes="100%"
          />
        </div>
        <div className="flex-grow">
          <p className="text-2xl">{data.name}</p>
          <p>desc</p>
        </div>
        {hasIcon && (
          <div onClick={onClickRemoveFavorite} className="ml-4 cursor-pointer">
            <FaBookmark size={32} />
            <span>삭제</span>
          </div>
        )}
      </li>
      {selected && <Toast data={data} setSelected={setSelected} />}
    </>
  );
}
