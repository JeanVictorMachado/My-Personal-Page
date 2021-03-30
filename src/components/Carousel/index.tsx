import React, { useState } from 'react'

import DbProjects from '../../../bdprojects.json'

import * as S from './styles'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'

const { data } = DbProjects

const Example = (_props: any) => {
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

  const slides = data.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <S.Wrapper>
          <S.ImgProject src={`img/${item.imgCapa}`} />
          <S.WrapperInfos>
            <h2>{item.title}</h2>
            <div>
              <a href={item.link}>
                <img src="img/github.png" alt="logo github"/>
                Ver Código
              </a>
            </div>
            <p>
              {item.description}
            </p>
            <section>
              <span>Tecnologias:</span>
              <div>
                {item.images.map((item, index) => (
                  <img key={index} src={`img/${item.urlLogo}`} />
                ))}
              </div>
            </section>
          </S.WrapperInfos>
        </S.Wrapper>
      </CarouselItem>
    )
  })

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 100%;
              background: #000011;
              //background: red;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={data}
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
    </div>
  )
}

export default Example
