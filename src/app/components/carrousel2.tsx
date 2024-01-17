'use client'
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Image from 'next/image';

class Carrousel2 extends React.Component {
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
            src='/img/premium/premium-1.png'
            alt='premium-1'
            width={1172}
            height={659}
            className='rounded-xl'
          />
        </div>
        <div>
          <Image
            src='/img/premium/premium-2.png'
            alt='premium-2'
            width={1172}
            height={659}
            className='rounded-xl'
          />
        </div>
        <div>
          <Image
            src='/img/premium/premium-3.png'
            alt='premium-3'
            width={1178}
            height={659}
            className='rounded-xl'
          />
        </div>
        <div>
        <Image
            src='/img/premium/premium-4.png'
            alt='premium-4'
            width={1172}
            height={659}
            className='rounded-xl'
          />
        </div>
      </Slider>
    );
  }
}

export default Carrousel2;