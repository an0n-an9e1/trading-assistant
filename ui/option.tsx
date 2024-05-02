import Link from "next/link";
import Image from "next/image";

interface Props {
  name: string,
  price: number
}

export default function Option(props: Props): JSX.Element {
  return (
    <Link href="/product/0">
      <div className="rounded-xl" style={{boxShadow: "0 5px 5px 0 rgba(0,0,0,0.25)"}}>
        <div className="aspect-square w-full rounded-xl flex flex-col justify-end" style={{boxShadow: "10px 10px 30px 0 rgba(211, 209, 216, 0.25)"}}>
          <div className="relative w-full h-full rounded-t-xl overflow-clip">
            <Image src="/coffe.jpg" alt="Image thumbnail" fill objectFit="cover" />
          </div>
          <div className="flex w-full justify-between items-start p-4 pt-2">
            <p className="" style={{fontWeight: "500"}}>{props.name}</p>
            <p className="text-xs top-[3px] relative">{props.price} MKD</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
