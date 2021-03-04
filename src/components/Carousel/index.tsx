import React, { useState } from 'react'

import * as S from './styles'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
]

const Example = (_props: any) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex: React.SetStateAction<number>) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <S.Wrapper>
          <S.ImgProject src="img/icon-computer-dashboard.png" />
          <S.WrapperInfos>
            <h2>Name Project</h2>
            <div>
              <a href="#">Icon / Ver Demo</a>
              <a href="#">Icon / Ver Código</a>
            </div>
            <p>
              GoBarber é uma aplicação com versão web, aplicativo mobile e API
              própria. O objetivo é auxiliar os profissionais de serviços de
              beleza a marcarem horário com seus respectivos clientes.
            </p>
            <section>
              <span>Tecnologias:</span>
              <div>
                <img className="img1" src="img/icon-reactjs.png" />
                <img className="img2" src="img/icon-nodejs2.webp" />
                <img className="img3" src="img/icon-mongodb.png" />
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
          items={items}
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
