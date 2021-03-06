import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout";
import RotorCTA from "../components/RotorCTA";
import StarDivider from "../components/Star-divider";

import RotorButton from "../components/RotorButton"
import RotorBox from "../components/RotorBox"
import Lottie from "../components/Lottie";
import animationData from "../animations/rotor_anim_logo.json"
import animation1 from "../animations/rotor_anim_logo.json";
import LottieScroll from "../components/LottieScroll";
import LogoGallery from "../components/LogoGallery";
import HeroBack from "../img/hero-back.svg"

import UpwindBack from "../img/upwind-back.svg"
import Accordion from "../components/accordion";
import LargeCTA from "../components/LargeCTA";




export const IndexPageTemplate = ({ hero, challenge, solution, who, model, customers }) => {

  const heroImage = getImage(hero.image)
  const headlineImage = getImage(hero.headlineimg)

  const challengeImage = getImage(challenge.image)
  const solutionImage1 = getImage(solution.image1)
  const solutionImage2 = getImage(solution.image2)
  const solutionImage3 = getImage(solution.image3)
  const whoImage1 = getImage(who.image1)
  const customerImage1 = getImage(customers.image1)
  const customerImage2 = getImage(customers.image2)
  const bossImage1 = getImage(customers.bossimage1)
  const bossImage2 = getImage(customers.bossimage2)
  const animation = animation1


  return (
    <div>

      {/*hero section*/}
      <div style={{
        backgroundImage: `url(${HeroBack})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
      }}>
       
        <div className="hero-body container pb-6">
          <div className="columns is-desktop is-vcentered my-6">
            <div className="column is-half-desktop is-10-mobile is-offset-1-mobile">
              <div className="has-rainbow-parent">
              <GatsbyImage image={headlineImage} alt={hero.imagealt} />
                {/*<h2 className="has-rainbow is-ultralarge is-size-1-mobile has-text-weight-bold mb-4 has-tight-height">{hero.headline}</h2>*/}
              </div>
              <h3 className="has-text-white has-text-weight-bold has-tight-spacing is-size-4 is-size-5-mobile mb-4">{hero.subtext}</h3>
              <h3 className="has-text-white has-tight-spacing is-size-4 is-size-5-mobile"><i>{hero.subtext2}</i></h3>
            </div>
            <div className="column is-half-desktop has-text-centered level-right">
              <GatsbyImage image={heroImage} alt={hero.imagealt} />

            </div>
          </div>
          <div className="mb-6">
          <RotorCTA buttonText={hero.cta.buttonText} buttonLink={hero.cta.buttonLink} headline={hero.cta.headline} text={hero.cta.text} />
          </div>



        </div>
      </div>
      {/*challenge section*/}
      <div className="hero-body has-background-white">
        <div className="columns">

          <div className="column has-background-primary is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">
            <div className="columns is-flex-direction-column p-3">
              <StarDivider customClass="column is-full mb-3" />
              <div className="column is-8 is-offset-2 is-10-mobile is-offset-1-mobile">
                <h2 className="is-size-2 mb-4">{challenge.headline}</h2>
                <p className="content" dangerouslySetInnerHTML={{ __html: challenge.text }}></p>
                <div className="has-text-centered mt-6 is-rotated-right">
                  <GatsbyImage image={challengeImage} alt={challenge.imagealt}/>
                </div>

              </div>

              <StarDivider customClass="column is-full mt-3" />
            </div>
          </div>

        </div>
      </div>

      {/*solution section1*/}
      <div className="hero-body" style={{
        backgroundImage: `url(${UpwindBack})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
      }}>
        <div className="columns is-vcentered">

          <div className="column is-one-third-desktop is-offset-1 is-half-tablet has-background-info has-text-white my-6 is-relative ">
            <div className="p-6 has-star-right is-10-mobile is-offset-1-mobile">
              <h2 className="is-size-2 mb-4">{solution.headline1}</h2>
              <p dangerouslySetInnerHTML={{ __html: solution.text1 }}></p>
            </div>


          </div>
          <div className="column is-two-thirds has-text-centered is-full-tablet">
            <div className="is-rotated-left mb-3">
              <GatsbyImage image={solutionImage1} alt={solution.imagealt1}/>
            </div>
            <div className="pb-6">
              <GatsbyImage image={solutionImage2} alt={solution.imagealt2}/>
            </div>
          </div>


        </div>
      </div>
    
      
      {/*solution section2*/}
      <div className="hero-body has-background-white" >
        <div className="columns is-vcentered is-flex-direction-row-reverse">



          <div className="column is-half-desktop is-half-tablet has-background-info has-text-white my-6 is-relative" style={{zIndex:'1'}}>
            <div className="p-6 has-whirl-right is-10-mobile is-offset-1-mobile">
              <h2 className="is-size-2 mb-4">{solution.headline2}</h2>
              <p dangerouslySetInnerHTML={{ __html: solution.text2 }}></p>
            </div>


          </div>
          <div className="column is-half has-text-centered is-full-tablet is-half-mobile is-offset-one-quarter-mobile">
            <div className="is-rotated-left mb-3">
              <GatsbyImage image={solutionImage3}  alt={solution.imagealt3}/>
            </div>

          </div>


        </div>
      </div>
     {/* largecta */}
      <div className="has-background-white">
     <LargeCTA/>
      </div>

      {/*who section

<RotorBox headline={who.headline1} subtext={who.subtext1} text={who.text1} ref={observe}/> style={{height:`${height}px`}} */}


      <div className="has-background-info py-6">
        <StarDivider customClass="column is-full mb-6" />

        <div className="columns is-vcentered" >
         <div className="column is-half">
          <RotorBox headline={who.headline1} subtext={who.subtext1} text={who.text1}/>
          </div>
          <div className="has-text-centered is-full-tablet">
              <GatsbyImage image={whoImage1} alt={who.imagealt1}/>
            </div>
        </div>

      </div>

       <div className="container">
      <h2 className="is-size-2 mt-6 mb-4 has-text-centered mx-3">{who.headline2}</h2>
    
      <div className="is-flex is-flex-wrap-wrap is-justify-content-center mb-6">
        {who.text2.map(item => (
          <div className="has-star-swipe is-size-7-mobile">
            <h3>
              {item}
            </h3>
          </div>

        ))}
      </div>
    </div> 

      {/*<Lottie autoPlay="true" hover="true"/> 
    <LottieScroll boxHeight={200} animation={animation1} mode={"s"} type = {"toggle"} frames ={[0, 95]} visibility={[0.4, 0.9]} />
*/}

<div className="py-6 has-background-info">
<LogoGallery />
</div>

<div className="has-background-info" style={{height:'200px'}}></div>
<div className="hero-body container pb-6" style={{transform:'translateY(-150px)'}}>
          <div className="columns mb-6">
            <div className="column is-5 has-background-warning p-6 mb-3">
              <GatsbyImage image={customerImage1} alt={hero.imagealt} />
              <div className="mt-5 has-text-weight-bold has-background-link is-inline-block p-1">{customers.customer1}</div>
              <h3 className="is-size-4 mb-4 mt-3">{customers.headline1}</h3>
              <p dangerouslySetInnerHTML={{ __html: customers.text1 }}></p>
              <div className="has-text-centered mt-4">
                <GatsbyImage image={bossImage1} alt={hero.imagealt}/>
              </div>
              
              <p className="mt-4 has-text-centered"><i>{customers.name1}</i></p>
              
            </div>
           
            <div className="column is-5 is-offset-1 has-background-warning p-6 mb-3">
              <GatsbyImage image={customerImage2} alt={hero.imagealt} />
              <div className="mt-5 has-text-weight-bold has-background-link is-inline-block p-1">{customers.customer2}</div>
              <h3 className="is-size-4 mb-4 mt-3">{customers.headline2}</h3>
              <p dangerouslySetInnerHTML={{ __html: customers.text2 }}></p>
              <div className="has-text-centered mt-4">
                <GatsbyImage image={bossImage2} alt={hero.imagealt}/>
              </div>
              
              <p className="mt-4 has-text-centered"><i>{customers.name2}</i></p>
            </div>
          </div>
      



        </div>
      

      {/*<LottieScroll boxHeight={200} animation={animation1} mode={"scroll"} type = {"seek"} frames ={[0, 95]} visibility={[0.4, 0.9]} />*/}


    </div>
  )
}



const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        challenge={frontmatter.challenge}
        solution={frontmatter.solution}
        model={frontmatter.model}
        customers={frontmatter.customers}
        who={frontmatter.who}

      />
    </Layout>
  )
} 
export default IndexPage


export const IndexPageQuery = graphql`
query RotorStartTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      path
      hero {
        headline
        headlineimg {
          childImageSharp {
            gatsbyImageData(quality: 50, width: 600)
          }
        }
        subtext
        subtext2
        imagealt
        image {
          childImageSharp {
            gatsbyImageData(quality: 50, width: 450)
          }
        }
        cta {
          text
          buttonText
          buttonLink
          headline
        }
      }
      challenge {
        headline
        text
        imagealt
        image {
          childImageSharp {
            gatsbyImageData(quality: 50, width: 250)
          }
        }
      }
      solution {
        headline1
        headline2
        text1
        imagealt1
        image1 {
          childImageSharp {
            gatsbyImageData(quality: 50, width: 200)
          }
        }
        imagealt2
        image2 {
          childImageSharp {
            gatsbyImageData(quality: 50, width: 200)
          }
        }
        text2
        imagealt3
        image3 {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 400)
          }
        }
 

      }
      who {
        headline1
        subtext1
        text1
        headline2
        text2
        imagealt1
        image1 {
          childImageSharp {
            gatsbyImageData(quality: 50, width: 650)
          }
        }
      }
      model {
        headline
        subtext
        image {
          childImageSharp {
            id
            gatsbyImageData(quality: 100, width: 800)
          }
        }
        ctatext
      }
      customers {
        customer1
        headline1
        text1
        name1
        bossimage1 {
          childImageSharp {
            id
            gatsbyImageData(quality: 100, width: 100)
          }
        }
        image1 {
          childImageSharp {
            id
            gatsbyImageData(quality: 100, width: 800)
          }
        }
        customer2
        headline2
        text2
        name2
        bossimage2 {
          childImageSharp {
            id
            gatsbyImageData(quality: 100, width: 100)
          }
        }
        image2 {
          childImageSharp {
            id
            gatsbyImageData(quality: 100, width: 800)
          }
        }
      }
      
    }
  }
}
`;