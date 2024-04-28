import LangOption from "@/ui/lang";
import Menu from "@/ui/menu";
import Option from "@/ui/option";

export default function Home() {
  return (
    <div>
      {/* Nav */}
      <div className="flex justify-between items-center m-4 my-8">
        <div className="w-14 h-14 bg-[#16253B] rounded-xl"></div>
        <a className="font-extrabold underline text-[#16253B]">Ask for Bill</a>
        <LangOption active={"EN"} /> 
      </div>

      {/* Search */}
      <div className="m-4 p-4 border border-gray-150 rounded-xl text-sm w-[calc(100% - 2rem)] flex">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
<g fill="#9aa0b4" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{width: "20px", height: "20px"}}><g transform="scale(5.33333,5.33333)"><path d="M20.5,6c-7.98444,0 -14.5,6.51556 -14.5,14.5c0,7.98444 6.51556,14.5 14.5,14.5c3.27316,0 6.28892,-1.10698 8.7207,-2.94922l9.36523,9.36328c0.50163,0.52248 1.24653,0.73295 1.94742,0.55024c0.70088,-0.18271 1.24823,-0.73006 1.43094,-1.43094c0.18271,-0.70088 -0.02776,-1.44578 -0.55024,-1.94742l-9.36328,-9.36523c1.84224,-2.43179 2.94922,-5.44755 2.94922,-8.7207c0,-7.98444 -6.51556,-14.5 -14.5,-14.5zM20.5,10c5.82269,0 10.5,4.67732 10.5,10.5c0,2.79571 -1.08593,5.3206 -2.85156,7.19727c-0.17187,0.12442 -0.32284,0.2754 -0.44727,0.44727c-1.87707,1.76787 -4.40346,2.85547 -7.20117,2.85547c-5.82268,0 -10.5,-4.67732 -10.5,-10.5c0,-5.82268 4.67732,-10.5 10.5,-10.5z"></path></g></g>
</svg>
        <input type="text" className="ml-4" placeholder="Search for food..." />
      </div>

      {/* Tags */}
      <div className="flex items-center overflow-x-clip">
        <div className="rounded-full ml-4" style={{boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 25%)"}}>
        <div className="w-32 py-2 bg-[#16253B] rounded-full" style={{boxShadow: "0px 20px 30px 0 rgba(22, 37, 59, 0.25)"}}>
          <p className="text-white text-center text-sm">Drinks</p>
        </div>
        </div>

        <div className="rounded-full ml-4" style={{boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 25%)"}}>
        <div className="w-32 py-2 rounded-full" style={{boxShadow: "0px 20px 30px 0 rgba(22, 37, 59, 0.25)"}}>
          <p className="text-center text-sm">Coffe</p>
        </div>
        </div>
        <div className="rounded-full ml-4" style={{boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 25%)"}}>
        <div className="w-32 py-2 rounded-full" style={{boxShadow: "0px 20px 30px 0 rgba(22, 37, 59, 0.25)"}}>
          <p className="text-center text-sm">Tea</p>
        </div>
        </div>
      </div>

      {/* Content */}
      <h2 className="text-[#323643] mt-6 ml-4 text-lg font-bold">Featured foods</h2>

      <div className="grid grid-cols-2 gap-4 p-4">
        <Option name="ESSPRESSO" price={50} />
        <Option name="SALEP" price={50} />
        <Option name="MAKIATO" price={50} />
      </div>

      <div className="">
        <Menu />
      </div>
    </div>
  );
}

