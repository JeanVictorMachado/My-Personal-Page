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
    title: 'TryBeer',
    imgCapa: 'capa-trybeer.png',
    link: 'https://github.com/JeanVictorMachado',
    description: 'Aplicação para delivery de bebidas, no app é possível se ter acesso a todas as etapas da compra o mesmo acontece para vendas onde o admin pode até mesmo marca se a bebida já foi entregue ao cliente.',
    images: [
      {
        urlLogo: 'icon-reactjs.png'
      },
      {
        urlLogo: 'styledcomponents2.png'
      },
      {
        urlLogo: 'icon-nodejs2.webp'
      },
      {
        urlLogo: 'mysql-3.svg'
      }
    ]
  },
  {
    id: 2,
    title: 'My Dashboard',
    imgCapa: 'icon-computer-dashboard.png',
    link: 'https://github.com/JeanVictorMachado/My_Dashboard',
    description: 'Aplicação que permite controlar as finanças de forma rápida e pratica, mostrando o resultado não só atravez de números mas também por gráficos facilitando ainda mais a visualização e entendimento.',
    images: [
      {
        urlLogo: 'typescript.png',
      },
      {
        urlLogo: 'icon-reactjs.png'
      },
      {
        urlLogo: 'styledcomponents2.png'
      }
    ]
  },
  {
    id: 3,
    title: 'To Do List',
    link: 'https://github.com/JeanVictorMachado/My_Dashboard',
    description: 'Aplicação que permite controlar as finanças de forma rápida e pratica, mostrando o resultado não só atravez de números mas também por gráficos facilitando ainda mais a visualização e entendimento.',
    images: [{
      urlLogo: 'typescript.png',
    }, {
      urlLogo: 'icon-reactjs.png'
    }]
  },
  {
    id: 4,
    title: 'Trivia',
    link: 'https://github.com/JeanVictorMachado/My_Dashboard',
    description: 'Aplicação que permite controlar as finanças de forma rápida e pratica, mostrando o resultado não só atravez de números mas também por gráficos facilitando ainda mais a visualização e entendimento.',
    images: [{
      urlLogo: 'typescript.png',
    }, {
      urlLogo: 'icon-reactjs.png'
    }]
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
