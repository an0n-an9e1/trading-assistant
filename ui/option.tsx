import Link from "next/link";

interface Props {
  name: string,
  price: number
}

export default function Option(props: Props): JSX.Element {
  return (
    <Link href="/product/0">
      <div className="rounded-xl" style={{boxShadow: "0 5px 5px 0 rgba(0,0,0,0.25)"}}>
        <div className="aspect-square w-full rounded-xl flex flex-col justify-end p-4" style={{boxShadow: "10px 10px 30px 0 rgba(211, 209, 216, 0.25)"}}>
          <div className="flex w-full justify-between items-start">
            <p className="" style={{fontWeight: "500"}}>{props.name}</p>
            <p className="text-xs top-[3px] relative">{props.price} MKD</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
