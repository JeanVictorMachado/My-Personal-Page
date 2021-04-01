import React, { useState } from 'react'

import * as S from './styles'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'

const CarouselInitial = ({ data }: any) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex: React.SetStateAction<number>) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = data.map((item, index) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={index}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <S.Wrapper>
          <img src={item.img1} alt={item.img1} />
          <img src={item.img2} alt={item.img2} />
          <img src={item.img3} alt={item.img3} />
        </S.Wrapper>
      </CarouselItem>
    )
  })

  return (
    <S.Indicators>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 100%;
              //background: #000011;
              //background: red;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={data}
            onAnimationStart={data}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
      </Carousel>
    </S.Indicators>
  )
}

export default CarouselInitial
