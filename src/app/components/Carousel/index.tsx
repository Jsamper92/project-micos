'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import styles from './index.module.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';
import { PaginationOptions } from 'swiper/types';

export const Carousel = () => {

    const pagination: PaginationOptions = {
        clickable: true,
        verticalClass: styles['c-pagination'],
        horizontalClass: styles['c-pagination'],
        renderBullet: (index, className) => {
          return (
            `<span style="margin-bottom:15px" class="prueba ${className}"></span>`
          );
        },
      };

      const slides = [
        {
          id: 1,
          src: '/images/carousel/Bienvenido.png',
          title: 'Bienvenido',
          children: ['Tu escuela ACOGEDORA Y FAMILIAR']
        },
        {
          id: 2,
          src: '/images/carousel/Instalaciones.png',
          title: 'Instalaciones',
          children: ['6 Aulas', 'Jardín privado', 'Calefacción', 'Suelo radiante', 'Aire acondicionado', 'Puertas pivotantes']
        },
        {
          id: 3,
          src: '/images/carousel/Contacto.png',
          title: 'Contacto',
          children: ['675 733 140', 'info@micosguarderia.es', 'Calle Bulevar del Alto Tajo 40', '19005 - Guadalajara']
        },
      ]
    return (
        <Swiper
            id='inicio'
            style={{
                height: '100vh',
                width: '100vw',
            }}
            spaceBetween={20}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                reverseDirection: true,
            }}
            pagination={{...pagination}}
            modules={[Pagination, Autoplay]}
        >
            {
                slides.map((slide) => {
                    return (
                        <SwiperSlide key={slide.id} className='w-full h-[100vh]'>
                            <div className='w-full h-full' style={{backgroundImage: `url(${slide.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                                <div className='w-full h-full flex flex-col justify-start items-start  pt-32 pl-10'>
                                    <h2 className='text-white text-[60px] font-normal uppercase tracking-widest'>{slide.title}</h2>
                                    {
                                        slide.children.map((child, index) => {
                                            return (
                                                <p key={index} className='text-white text-2xl ml-5 font-bold'>{child}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
};


export default Carousel;