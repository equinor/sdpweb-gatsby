import React, { ComponentType } from "react"
import styled from "styled-components"
// @ts-ignore
import { H3 } from "./headers"

interface CardInfo {
  title?: string
  image?: string
  children: ComponentType
}

const StyledCard = styled.div`
  background: #f8f8f8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: #d5dada solid 1px;
  margin: 10px;
  height: fit-content;
  width: 350px;
`

const CardHeader = styled.div`
  background: #f8f8f8;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Card = ({ title, image, children }: CardInfo) => (
  <StyledCard>
    <CardHeader>
      <img src={image} width="70" alt={image}/>
      {title && <H3>{title}</H3>}
    </CardHeader>
    {children}
  </StyledCard>
)

export default Card
