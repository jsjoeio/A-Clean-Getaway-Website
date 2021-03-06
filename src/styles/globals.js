import Link from 'gatsby-link'
import styled from 'styled-components'

export const PrimaryButton = styled(Link)`
  height: 40px;
  width: 200px;
  border-radius: 3px;
  background: #66c3cc;
  border: 2px solid #66c3cc;
  padding: 13px 20px;
  color: #223264;
  letter-spacing: 2px;
  box-shadow: 0 2px 5px 0 rgba(34, 67, 111, 0.14);
  font-weight: bold;

  &:hover {
    background: white;
    color: #66c3cc;
    cursor: pointer;
  }
`

export const H2 = styled.h2`
  display: inline-block;
  color: #224364;
  padding: 10px;
  margin: 0;
  font-size: 2rem;
`

export const Center = styled.div`
  text-align: center;
`

export const QuoteButton = styled.a`
  height: 40px;
  width: 200px;
  border-radius: 3px;
  background: #66c3cc;
  border: 2px solid #66c3cc;
  padding: 13px 20px;
  color: #224264;
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  box-shadow: 0 2px 5px 0 rgba(34, 67, 111, 0.14);
  font-weight: bold;
`

export const PageWrap = styled.div`
  background: #597291;
  width: 100%;
`

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  background: white;
`
