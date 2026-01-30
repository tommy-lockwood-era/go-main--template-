import Image from 'next/image';
import Link from 'next/link';

export type CardData = {
    id: string | number;
    title: string;
    description?: string;
    imgSrc: string;
    imgAlt?: string | undefined;
    cardUrl?: string;
};

export default function Card({ data }: { data: CardData }) {
    return (
        <div
            id='main'
            className='group mx-auto mb-10 max-w-[380px] rounded-lg bg-white text-center shadow-md md:mb-16'
        >
            {/* TODO: remove link when no href provided */}
            <Link
                onClick={(event) => event.preventDefault()}
                href={data.cardUrl ?? '#'}
            >
                <Image
                    src={data.imgSrc}
                    alt={data.imgAlt ?? ''}
                    width={380}
                    height={234}
                    className='bg-rgreen-500 mb-6 max-h-[272px] rounded-tl-lg rounded-tr-lg object-cover pt-2'
                />
                <div>
                    <h3 className='font-heading text-dark mb-3 text-xl font-medium sm:text-2xl md:mb-5'>
                        {data?.title}
                    </h3>
                </div>
            </Link>
        </div>
    );
}
