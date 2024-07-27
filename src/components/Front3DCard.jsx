// components/Front3DCard.jsx
import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from './3D-Card';
import Link from 'next/link';

export function Front3DCard({ title, description, imageUrl, linkUrl, linkText }) {
  return (
    <CardContainer className="inter-var w-[20rem] h-[28rem]">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
        <CardItem translateZ={50} className="text-2xl font-bold text-neutral-600 dark:text-white">
          {title}
        </CardItem>
        <CardItem as="p" translateZ={60} className="text-neutral-500 text-l mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-4">
          <Image
            src={imageUrl}
            layout="responsive"
            width={500}
            height={300}
            className="h-32 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <CardItem translateZ={20} as={Link} href={linkUrl} target="__blank" className="px-4 py-2 rounded-xl text-s font-normal dark:text-white">
            {linkText}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default Front3DCard;
