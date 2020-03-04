import React from 'react'
import styled from 'styled-components'

export type Props = {
  title: string;
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 60px;
  border-bottom: 1px solid #fff;
  text-align: left;
  background-image: url("image.jpg");

  h1 {
    margin: 0;
    font-weight: normal;
    font-size: 1.6rem;
  }
`

const Header: React.FC<Props> = ({ title }) => {
  return (
    <Wrapper className="app-header">
      <h1>{title}</h1>
    </Wrapper>
  )
}

export default Header
