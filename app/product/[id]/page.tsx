"use client";
import { useState } from "react";
import Link from "next/link";

export default function Page({ params }: {params: {id: string}}) {
  const [quantity, setQuantity] = useState<number>(0);

  function handleDec() {
    if (quantity > 0) {
      setQuantity(quantity-1);
    }
  }

  return (
    <div className="w-full">
      <div className="w-[calc(100% - 3rem)] m-6 rounded-2xl bg-red-400 aspect-[47/30] relative"> 
        <Link href="/">
          <div className="min-w-10 min-h-10 bg-white rounded-xl absolute top-3 left-3 z-10 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 320 512"><path fill="#111719" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
          </div>
        </Link>
      </div>

      <h2 className="text-[#323643] font-bold text-3xl ml-6">Hot Chocolate</h2>
      <div className="ml-6 flex items-center justify-between mt-2">
        <h3 className="text-[#16253B] font-bold text-4xl">150 MKD</h3>
        <div className="flex items-center mr-6">
          <button onClick={() => handleDec()} className="border border-[#16253B] rounded-full p-2 flex aspect-square items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-0.5" width="18" height="18" viewBox="0 0 512 512"><path fill="#16253b" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
          </button>
          <p className="m-4 w-4 min-w-4 max-w-4 text-center">{quantity}</p>
          <button onClick={() => setQuantity(quantity+1)} className="bg-[#16253B] border border-[#16253B] rounded-full p-2 flex aspect-square items-center justify-center">
            <svg className="invert ml-0.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
          </button>
        </div>
      </div>

      <div className="mx-6 my-2 text-[#858992]">
        <p>Lorem ipsum dolor sit amet consectetur. Lectus risus justo pharetra viverra dolor. Nunc scelerisque nibh facilisis nunc lectus viverra sed. Ipsum pellentesque amet faucibus in eget.</p>
      </div>

      <div className="mx-6 my-4">
        <p className="text-[#323643] text-lg font-bold">Size</p>

        <form className="ml-4 mt-2 flex flex-col">
          <label className="w-full flex justify-between">
            <p>Small</p>
            <div className="flex">
              <p>50 MKD</p>
              <input className="ml-2" type="radio" value="Small" name="size" defaultChecked />
            </div>
          </label>

          <label className="w-full flex justify-between">
            <p>Medium</p>
            <div className="flex">
              <p>80 MKD</p>
              <input className="ml-2" type="radio" value="Medium" name="size" />
            </div>
          </label>

          <label className="w-full flex justify-between">
            <p>Large</p>
            <div className="flex">
              <p>100 MKD</p>
              <input className="ml-2" type="radio" value="Large" name="size" />
            </div>
          </label>
        </form>
      </div>
    </div>
  );
}
