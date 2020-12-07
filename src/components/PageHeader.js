/** @format */

import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  margin: 0 auto;
  padding: 100px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: white;
  position: relative;
  display: flex;
  min-height: 26vw;
  background-color: #f1ede9;
`

const SectionAngle = styled.div`
  position: relative;
  z-index: 5;
  overflow: hidden;
  height: 5vw;
  margin-top: -5vw;
`

const Angle = styled.div`
  position: absolute;
  left: -10vw;
  bottom: -5vw;
  width: 120vw;
  height: 20vw;
  background-color: #fff;
  transform: translate(0px, 12.5vw) rotate(-2.5deg);
`

const Header = styled.h2`
  margin-bottom: 0px;
  font: normal 700 3.7vw/4.4vw Inter, sans-serif;
  @media (max-width: 640px) {
    normal 700 10vw/4.4vw Inter,sans-serif;
    }
`

const Divider = styled.div`
  width: 70px;
  height: 3px;
  background-color: var(--color-orange);
  display: block;
  margin: 20px auto;
`

const Description = styled.p`
  max-width: 700px;
  color: #777;
  margin-bottom: 16px;
  font-size: 17px;
  line-height: 28px;
`

const PageHeaderSection = ({ header, pageDescription, templateHeader }) => {
  return (
    <>
      {templateHeader ? (
        <div>
          <StyledSection />
        </div>
      ) : (
        <div>
          <StyledSection>
            <Header>{header}</Header>
            <Divider />
            <Description>{pageDescription}</Description>
          </StyledSection>
          <SectionAngle>
            <Angle />
          </SectionAngle>
        </div>
      )}
    </>
  )
}
export default PageHeaderSection
