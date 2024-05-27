"use client";
import React, { SetStateAction } from 'react';
import { useState } from 'react';

interface ActiveComponentProps {
  active: string;
  setActiveLang: (option: string) => void;
}

const LangOption: React.FC<ActiveComponentProps> = ({ active, setActiveLang }) => {
  const [activeLang, setActive] = useState<string>(active);
  const [show, setShow] = useState<boolean>(false);
  
  function toggle(lang: string) {
    setShow(false)
    setActive(lang)
    setActiveLang(lang)
  }

  return (
  <div className='relative' style={{padding: "0"}}>

    <div style={{position: "absolute", top: "1.95rem", width: "100%", height: "3rem", display: show ? "block" : "none", paddingTop: "0.5rem", }}>
      <div  style={{background: "rgb(243, 244, 246)", position: "relative", zIndex: "0", boxShadow: "13px 10px 43px 0 rgba(0, 0, 0, 0.16)"}} className='text-[#9AA0B4] rounded-xl'>
      <div className="rounded-xl" style={{boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)"}}>
       <button onClick={() => toggle("EN")}>
        <p style={{margin: "0.75rem"}}>EN</p>
      </button>

      <button onClick={() => toggle("AL")}>
        <p style={{margin: "0.75rem"}}>AL</p>
      </button>

      <button onClick={() => toggle("MK")}>
        <p style={{margin: "0.75rem"}}>MK</p>
      </button>
      </div>
      </div>
    </div>

    <button className="rounded-xl relative bg-white" onClick={() => setShow(true)} style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", zIndex: "0", background: "white"}}>
      <div className="rounded-xl text-[#9AA0B4] text-sm flex items-center" style={{boxShadow: "13px 10px 43px 0 rgba(0, 0, 0, 0.16)", zIndex: "0"}}>
          <p style={{marginLeft: "0.75rem"}}>{activeLang}</p>

          <div style={{margin: "0.75rem"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15" height="15"><path fill="#9aa0b4" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
          </div>
      </div>
    </button>
  </div>
  );
};

export default LangOption;
