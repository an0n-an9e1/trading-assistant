"use client";
import { useState } from "react";

interface Props {
  categories: string[]
}

export default function Category(props: Props) {
  const [selectedIndex, setSelected] = useState<number>(0);

  return (
      <div className="flex items-start overflow-x-scroll h-20 scroller">
      {props.categories.map((category, index) => 
        (
          <button key={index} onClick={() => setSelected(index)} className="rounded-full ml-4" style={{boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 25%)"}}>
          <div className="w-32 py-2 rounded-full" style={{boxShadow: "0px 20px 30px 0 rgba(22, 37, 59, 0.25)", background: index === selectedIndex ? "#16253B" : "white"}}>
            <p className="text-center text-sm" style={{color: index === selectedIndex ? "white" : "black", fontWeight: "500"}}>{props.categories[index]}</p>
          </div>
          </button>    
        )
      )}
      </div>
  ) 
}
