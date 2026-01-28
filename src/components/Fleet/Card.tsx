import Image from "next/image";
import Link from "next/link";

export type CardData = {
  id: string | number;
  title: string;
  description?: string;
  imgSrc: string;
  imgAlt: string | undefined;
  cardUrl: string;
};

export default function Card({ data }: { data: CardData }) {

  return (
    <div className="group mx-auto mb-10 max-w-[380px] text-center md:mb-16 shadow-md bg-white rounded-lg">
      <Link href={data.cardUrl}>
        <Image
            src={data.imgSrc}
            alt={data.imgAlt ?? ''}
            width={380}
            height={234}
            className="object-cover mb-6 bg-rgreen-500 pt-2 rounded-tr-lg rounded-tl-lg max-h-[272px]"
          />
        <div>
          <h3 className="font-heading text-dark mb-3 text-xl font-medium sm:text-2xl md:mb-5">
            {data?.title}
          </h3>
        </div>
      </Link>
    </div>
  );
}
