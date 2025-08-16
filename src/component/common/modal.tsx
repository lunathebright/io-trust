import React, { Dispatch, SetStateAction } from "react";
import { IFavorite } from "@/types/favorite";

interface props {
  id: string;
  setFavorites?: Dispatch<SetStateAction<IFavorite[]>>;
  setIsModalOn: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ setFavorites, setIsModalOn, id }: props) {
  const onClickConfirm = () => {
    setFavorites?.((prev) => prev.filter((fav) => fav.id !== id));
    setIsModalOn(false);
  };

  const onClickCancel = () => {
    setIsModalOn(false);
  };

  return (
    <div className="absolute top-[60px] left-0 right-0 bottom-0 bg-black/40 z-10">
      <section
        className="absolute top-1/2 left-1/2 -translate-y-2/3 -translate-x-1/2 flex flex-col justify-between items-center
      h-[170px] w-[85%] px-4 py-4 rounded-md bg-white"
      >
        <p className="pb-2 mb-2 border-b border-dashed border-[#ddd] text-lg">
          즐겨찾기 삭제
        </p>
        <p className="text-center">
          이 사이트를 즐겨찾기 목록에서 삭제 하시겠습니까?
        </p>
        <div className="flex gap-4 w-full">
          <button
            onClick={onClickCancel}
            className="inset-shadow-sm inset-shadow-black/20 flex-1 py-1.5 rounded-md cursor-pointer"
          >
            취소
          </button>
          <button
            onClick={onClickConfirm}
            className="inset-shadow-sm inset-shadow-black/20 flex-1 py-1.5 rounded-md cursor-pointer"
          >
            확인
          </button>
        </div>
      </section>
    </div>
  );
}
