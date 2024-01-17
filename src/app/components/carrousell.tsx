'use client'
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Image from 'next/image';

class Carrousel extends React.Component {
  render() {
    const settings: Settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };

    return (
      <Slider {...settings}>
        <div>
          <Image
            src='/img/amazing/amazing-1.png'
            alt='amazing-1'
            width={1178}
            height={659}
            className='rounded-xl'
          />
        </div>
        <div>
          <Image
            src='/img/amazing/amazing-2.png'
            alt='amazing-2'
            width={1178}
            height={659}
            className='rounded-xl'
          />
        </div>
        <div>
          <Image
            src='/img/amazing/amazing-3.png'
            alt='amazing-3'
            width={1178}
            height={659}
            className='rounded-xl'
          />
        </div>
        <div>
        <Image
            src='/img/amazing/amazing-4.png'
            alt='amazing-4'
            width={1178}
            height={659}
            className='rounded-xl'
          />
        </div>
        <div>
        <Image
            src='/img/amazing/amazing-5.png'
            alt='amazing-5'
            width={1178}
            height={659}
            className='rounded-xl'
          />
        </div>
        <div>
        <Image
            src='/img/amazing/amazing-6.png'
            alt='amazing-3'
            width={1178}
            height={659}
            className='rounded-xl'
          />
        </div>
      </Slider>
    );
  }
}

export default Carrousel;