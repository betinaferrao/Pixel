"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper/modules";
import shared from '../styles/Shared.module.css'
import styles from '../styles/Principal.module.css'
import CarreiraCard from '@/components/CarreiraCard'
import { getCarreiras } from '@/sanity/sanity-utils';
import { getJogos } from '@/sanity/sanity-utils';
import Link from 'next/link';
import { SanityImage } from '@/components/sanity-image';
import { ImageAsset, PortableTextBlock } from "sanity";
// import { Carousel, ICarousel } from '@/components/Carousel'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


type Jogo = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  valor: string;
  image: ImageAsset | null;
  content: PortableTextBlock[];
}

interface JogosProps {
   slides: Jogo[]
}

const SwiperComponent = ({ slides }: JogosProps) => {
  return (
    <Swiper
      slidesPerView={3} className={'styles.imagemCarrosel'}>
      {slides.map((jogo) => (
        <SwiperSlide key={jogo._id}>
          <Link href={`/jogos/${jogo.slug}`} className={`${styles.nome}`}>
          {jogo.image && (
                 <SanityImage
                   className={'styles.imagemCarrosel'}
                   asset={jogo.image}
                   alt='a'
                   quality={70}
                 />
               )}
          </Link> 
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
  
  
export default SwiperComponent;