import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 320px;
  height: 100%;

  padding-top: 2rem;
  padding-bottom: 3rem;

  display: flex;
  justify-content: space-around;

  @media (max-width: 750px) {
    width: 265px;
  }
`

export const Indicators = styled.div`
  ol {
    margin-bottom: 0;
  }

  .carousel-indicators li {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  .carousel-control-next {
    justify-content: flex-end;
    bottom: 10px;
  }

  .carousel-control-prev {
    justify-content: flex-start;
    bottom: 10px;
  }

  .carousel-control-next-icon, .carousel-control-prev-icon {
    width: 15px;
  }

  .kVcreX {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
`
