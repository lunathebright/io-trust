import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { IDapp } from "@/types/dapp";
import { IFavorite } from "@/types/favorite";

interface props {
  data: IFavorite | IDapp;
  setSelected: Dispatch<SetStateAction<boolean>>;
}

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/images`;

export default function Toast({ data, setSelected }: props) {
  const onClickClose = () => {
    setSelected(false);
  };

  const onClickGoToService = () => {
    window.open(data.url);
  };

  return (
    <div className="absolute top-[60px] left-0 right-0 bottom-0 bg-black/40 z-10">
      <section className="absolute bottom-[80px] h-[420px] w-full rounded-t-2xl px-10 pt-10 bg-white">
        <div className="flex items-center">
          <div className="relative w-20 aspect-square mr-6 overflow-hidden rounded-lg shadow-xl/25">
            <Image src={`${API_URL}/${data.icon}`} alt={data.name} fill />
          </div>
          <div>
            <p className="text-2xl font-bold">{data.name}</p>
            {"networks" in data && data.networks?.length && (
              <p>{data.networks[0]}</p>
            )}
          </div>
        </div>
        <p className="pt-3 pb-6">{data.url}</p>
        <div className="h-[160px] mb-[10px]">
          <p className="font-bold">Description</p>
          <p>descdesc</p>
        </div>
        <button
          onClick={onClickGoToService}
          className="block w-48 mx-auto py-3 bg-[#0DB263] text-white rounded-4xl cursor-pointer"
        >
          서비스 바로가기
        </button>
        <div
          onClick={onClickClose}
          className="absolute top-5 right-5 cursor-pointer"
        >
          <IoClose size={32} />
        </div>
      </section>
    </div>
  );
}
