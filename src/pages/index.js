import React from 'react'
import { Helmet } from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Footer from '../components/Footer'
import '../styles/home.css'
import norwexPhoto from '../assets/norwex-photo.png'
import Header from '../components/Header'
import ReviewAnimation from '../components/ReviewAnimation'
import { H2 } from '../styles/globals'
import Nav from '../components/Nav'
import noContractsIcon from '../assets/no-contracts.svg'
import { FaEnvira } from 'react-icons/fa'

// <Helmet
//   title={data.site.metadata.title}
//   meta={[
//     {
//       name: 'description',
//       content:
//         'Tired of coming home to a dirty house? Let us clean it for you! A Clean Getaway, LLC is a professional cleaning service that you can trust. Serving both residential and commercial customers.',
//     },
//     {
//       name: 'keywords',
//       content: 'cleaning, service, cedar rapids',
//     },
//   ]}
// />
const IndexPage = data => (
  <div>
    <Nav />
    <Header />
    <Home />
  </div>
)

const Offer = () => {
  return (
    <div>
      <OfferCard>
        <strong>
          <p className="num title">
            New customers receive a donation to a charity of their choice
          </p>
        </strong>
        <OfferWrap>
          <div>
            <Num className="num">50$</Num>
            <p className="num--caption">Bi-monthly customers</p>
          </div>
          <div>
            <Num className="num">25$</Num>
            <p className="num--caption">All other customers</p>
          </div>
        </OfferWrap>
      </OfferCard>
    </div>
  )
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <Offer />
        <ReviewAnimation />
        <Div>
          <Section>
            <SectionTitle>In Business For Over 30 Years</SectionTitle>
            <br />
            <Paragraph>
              A Clean Getaway is a family owned, professional cleaning service
              founded by Joanne Jess. For over 30 years, we have earned a
              reputation as a trusted and reliable cleaning service working
              around the <strong>Cedar Rapids area</strong>. We provide cleaning
              services to small businesses, families, couples, the elderly, and
              busy professionals like you. Our team of experienced home cleaning
              experts can handle business and homes of any shape, size, or
              layout. Families with children and/or pets welcomed!
            </Paragraph>
          </Section>
          <HomeCards />
        </Div>
        <Spacer>
          <img
            className="norwex__logo"
            src={norwexPhoto}
            alt="Norwex brand cleaning supplies. Reads: 'Improving Quality of Life'"
          />
        </Spacer>
        <Footer />
      </div>
    )
  }
}

const HomeCards = () => {
  return (
    <CardSection>
      <CardWrapper>
        <Card>
          <FaEnv size={150} />
          <CardTitle>Environmentally Friendly</CardTitle>
          <p>
            We use Norwex brand cleaning products, which are 100% chemical free
          </p>
        </Card>
        <Card>
          <Card>
            <img
              src={noContractsIcon}
              className="contract__icon"
              alt="contract with an x or a cross through it"
            />
          </Card>
          <CardTitle>No Contracts</CardTitle>
          <p>Stop service at any time if you are unhappy</p>
        </Card>
        <p className="paragraph__white">
          FOR A FREE ESTIMATE CALL{' '}
          <span className="phoneNumber">319-929-6266</span> OR{' '}
          <Link className="paragraph--link" to="/contact/">
            FILL OUT OUR FORM
          </Link>
        </p>
      </CardWrapper>
    </CardSection>
  )
}

export default IndexPage

const OfferWrap = styled.div`
  display: flex;
  max-width: 400px;
  justify-content: space-evenly;
  margin: 0 auto;
`

const Num = styled.p`
  font-size: 4.5rem;
  font-family: 'Montserrat';
`

const CardSection = styled.section`
  background-color: #66c3cc;
  padding-bottom: 30px;
  width: 90%;
  margin: 0 auto;
  border-radius: 3px;
  box-shadow: 0 2px 5px 0 rgba(34, 67, 111, 0.14);
`

const FaEnv = styled(FaEnvira)`
  color: #224364;
`

const Card = styled.div`
  text-align: center;
  max-width: 400px;
  color: #224364;
`

const CardTitle = styled.h3`
  margin-top: 15px;
  letter-spacing: 1.3px;
  color: #224364;
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 60px;
  max-width: 800px;
  margin: 0 auto;
  flex-wrap: wrap;
`

const OfferCard = styled.div`
  margin: 20px auto 0 auto;
  color: #435c7f;
  padding: 40px 20px;
  text-align: center;
  font-weight: heavy;
`

const Section = styled.section`
  width: 85%;
  padding: 10px 12% 40px 12%;
  margin: 0 auto;
`

const Div = styled.div`
  width: 100%;
`

const Spacer = styled.div`
  display: flex;
  justify-content: center;
`

const SectionTitle = styled.h3`
  color: #224364;
  font-weight: heavy;
  display: inline-block;
  background-color: #66c3cc;
  padding: 10px;
  font-size: 1.5rem;
`

const Paragraph = styled.p`
  color: #435c7f;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.7;
`
