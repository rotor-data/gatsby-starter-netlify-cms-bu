import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout";
import RotorCTA from "../components/RotorCTA";
import StarDivider from "../components/Star-divider";
import Accordion from "../components/accordion";
import RotorBox from "../components/RotorBox";


export const MarketingAutomationTemplate = ({hero, challenge, goal, when, promise, what}) => {

    const goalImage = getImage(goal.image)
    const heroImage = getImage(hero.image)

return (
    <div>

      {/*hero section*/}
      <div style={{
        background: 'linear-gradient(45deg, rgba(0,126,132,1) 0%, rgba(239,185,215,1) 100%)',
      }}>
        <div className="hero-body container pb-6">
          <div className="columns is-desktop is-vcentered my-6 is-variable is-8">
            <div className="column is-half-desktop is-10-mobile is-offset-1-mobile">
              <div >
                <h1 className="has-text-white has-text-weight-bold has-tight-spacing is-size-4 is-size-5-mobile mb-4">{hero.headline}</h1>
              </div>
              <h2 className="has-text-white has-tight-height is-ultralarge is-size-1-mobile has-text-weight-bold is-uppercase ">{hero.subtext}</h2>
            </div>
            <div className="column is-half-tablet has-text-centered is-offset-one-quarter-tablet is-offset-0-desktop level-right">
              <GatsbyImage image={heroImage} />

            </div>
          </div>
          {/* optional CTA */}
          {hero.cta.option === true && 
          <div className="mb-6">
          <RotorCTA buttonText={hero.cta.buttonText} buttonLink="/products/" headline={hero.cta.headline} text={hero.cta.text} />
          </div>
          }
          
            

          
          



        </div>
      </div>
    
        <div className="hero-body has-background-white">
    {/* challenge section */}
    
    <div>
        <div className="columns">

          <div className="column has-background-primary is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">
            <div className="columns is-flex-direction-column p-3">
              <StarDivider customClass="column is-full mb-3" />
              <div className="column is-8 is-offset-2 is-10-mobile is-offset-1-mobile">
                <h2 className="is-size-2 mb-4">{challenge.headline}</h2>
                <p dangerouslySetInnerHTML={{ __html: challenge.text }}></p>
               

              </div>

              <StarDivider customClass="column is-full mt-3" />
            </div>
          </div>

        </div>
      </div>

    {/* goal section */}
    <div className="has-background-white">
        <div className="columns mt-6">

          <div className="column has-background-warning is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">
            <div className="columns is-flex-direction-column px-3 pt-3 pb-6">
           
              <div className="column is-8 is-offset-2 is-10-mobile is-offset-1-mobile">
              <div className="has-text-centered is-rotated-right">
       <GatsbyImage image={goalImage} alt={goal.imagealt}/>
      </div>
                <h2 className="is-size-2 my-4">{goal.headline}</h2>
                <p dangerouslySetInnerHTML={{ __html: goal.text }}></p>
    
              </div>

            </div>
          </div>

        </div>
      </div>

   
      </div>

      {/* when section */}
      <div className="hero-body has-background-white">
      <div className="columns hero-body mb-0">
          <div className="column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet">
              <div className="columns">
        <div className="column">
        <h2 className="is-size-2 has-text-centered-mobile mb-3">{when.headline}</h2>
        </div>  
      <div className="column has-background-white">
      {when.texts.map(({text, explanation}) => (
        
       <div> 
       <Accordion text={text} explanation={explanation}/>
       </div>
       ))}
      </div>
      </div>
      </div>
     
       </div>
       </div>
       
       {/* promise section */}
      <div className="columns hero-body has-background-info">
      <StarDivider/>
          <div className="column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet mt-3">
              <div className="columns">
        <div className="column">
        <h2 className="is-size-2 has-pink-blob has-text-centered-mobile">{promise.headline}</h2>
        </div>  
      <div className="column">
      <p dangerouslySetInnerHTML={{ __html: promise.text }}></p>
      </div>
      </div>
      </div>
       </div>
{/* what section */}
<div className="columns hero-body has-background-primary mr-1">
  <div className="column is-6-fullhd is-offset-3-fullhd is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet is-full-mobile no-padding-mobile">
      <div className="is-relative">
          <div className="rotor-box-large is-family-primary">
            <h2 className="is-size-2 mb-3">{what.headline}</h2>
            <p className="has-dropcap is-hyphenated" dangerouslySetInnerHTML={{ __html: what.text }}></p>

          </div>

      </div>

  </div>
</div>

    </div>
)

}

const MarketingAutomation = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
  
    return (
      <Layout>
        <MarketingAutomationTemplate
          hero={frontmatter.hero}
          challenge={frontmatter.challenge}
          goal={frontmatter.goal}
          when={frontmatter.when}
          promise={frontmatter.promise}
          what={frontmatter.what}
  
        />
      </Layout>
    )
  }
  export default MarketingAutomation

  export const MarketingAutomationQuery = graphql`
  query MarketingAutomationTemplate($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      frontmatter {
        path
        hero {
          headline
          subtext
          image {
            childImageSharp {
              gatsbyImageData(quality: 90, height:400)
            }
          }
          cta {
            option
            text
            buttonText
            headline
          }
        }
        challenge {
          headline
          text
        }
        goal {
          headline
          text
          imagealt
          image {
            childImageSharp {
              gatsbyImageData(quality: 50, width: 250)
            }
          }
        }
        when {
          texts {
            explanation
            text
          }
          headline
        }
        promise {
          headline
          text
        }
        what {
          headline
          text
        }
        title
      }
    }
  }
`
;