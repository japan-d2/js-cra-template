import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Center: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Center
