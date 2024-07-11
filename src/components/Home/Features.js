import React from 'react'
import { FeatureCard } from './FeatureCard'
import features1 from "../../assets/features1.jpg"
import features2 from "../../assets/features2.jpg"
import features3 from "../../assets/features3.jpg"

const features = [
    {image:features1,title:"chemical reserch",subtitle:"best chemical research industry",animation:"fade-right"},
    {image:features2,title:"Construction",subtitle:"best sealant for construction industry",animation:"fade-up"},
    {image:features3,title:"Electronics",subtitle:"best sealant for electronics industry",animation:"fade-left"},
]
export const Features = () => {

  return (
    <section className='features'>
    <div className='features-container'>
      <div className='row'>
        {
           features.map((feature)=>{
            return(
                <FeatureCard image={feature.image} subtitle={feature.title} title={feature.subtitle} animation={feature.animation}/>
            )
           }) 
        }
       
        
      </div>
    </div>
  </section>
  )
}
