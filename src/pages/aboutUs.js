import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import aboutUsPic from '/public/images/profile/eudaimon-log0.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'


const AnimatedNumbers = ({value}) => {

const ref = useRef(null);


const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000 })
const isInView = useInView(ref, {once: true});


useEffect(() => {
  if(isInView){
    motionValue.set(value);
  
  }

}, [isInView, value, motionValue])


useEffect(() => {
  springValue.on("change", (latest) => {
    if(ref.current && latest.toFixed(0) <= value ){
      ref.current.textContent = latest.toFixed(0);
    }
  })

}, [springValue, value])



return <span ref={ref}></span>

}

const aboutUs = () => {
  return (
    <>
      <Head>
      <title>Eudaimon | Vision Page </title>
        <meta name='description' content='any description' />
      </Head>
    <main className='flex w-full flex-col items-center justify-center' >
      <Layout className='pt-16'>
      <AnimatedText 
            text="Together, We Forge Brilliance" 
            textSize="text-5xl" 
            className="mb-16" 
          />    
    <div className='grid w-full grid-cols-8 gap-16'>
      <div className='col-span-3 flex flex-col items-start justify-start' >

        <h2 className='mb-2 text-xl font-bold uppercase text-dark/75' style={{ color: '#2F855A' }}>Vision</h2> 
        <p className='font-medium'>

        At Eudaimon, my vision extends beyond providing coding services. Driven by a passion for technology and innovation, I aim to be a catalyst for your business success. From humble beginnings, I&apos;ve been guided by a singular purpose: to empower businesses with cutting-edge solutions that propel them ahead of the competition.

        I believe in a partnership approach, where my success is intertwined with yours. My commitment lies in understanding your unique needs and delivering tailored solutions that align with your goals. By focusing on the latest technologies and industry trends, I ensure your business remains current and future-proof.
        </p>

        <br></br>

        <h2 className='text-xl font-bold uppercase text-dark/75' style={{ color: '#1E90FF' }}>Process</h2> 
        <p className='my-2 font-medium' >

        My process is designed to be seamless and client-centric. From the initial consultation to final delivery, I prioritize clear communication and transparency. It begins with understanding your vision and objectives, followed by a detailed analysis to craft a customized strategy. The development phase features iterative feedback loops, ensuring the final product perfectly aligns with your expectations.

        Leveraging state-of-the-art technologies, I build scalable and robust solutions. Whether it’s web development, mobile applications, or complex backend systems, I am equipped to handle it all. My commitment to quality and excellence ensures every project is a testament to my dedication and skill.
        </p>

        <br></br>

        <h2 className='text-xl font-bold uppercase text-dark/75' style={{ color: '#D97706' }}>Commitment</h2> 
        <p className='my-2 font-medium' >

        At Eudaimon, I don&apos;t just deliver projects; I forge long-term partnerships. I am your business ally, constantly seeking ways to boost your business and keep you ahead of the industry curve. My proactive approach involves thinking steps ahead to anticipate challenges and opportunities.

        Rooted in a foundation of innovation, reliability, and client satisfaction, Eudaimon stands as a beacon of excellence in the tech industry. Join me on this journey of brilliance and let’s craft diamonds together.
        </p>

      </div>

        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 '>
        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
            <Image src={aboutUsPic} alt="Eudaimon" className='w-full h-auto rounded-2xl' />
        </div>

      <div className='col-span-2 flex flex-col items-end justify-between mr-10'>

        <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={11} /> +
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75'>Clients</h2>        
        </div>

        <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
              <AnimatedNumbers value={7} /> +
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75'>Projects</h2>        
        </div>

        <div className='flex flex-col items-center justify-center'>
              <span className='inline-block text-7xl font-bold'>
              <AnimatedNumbers value={15} /> +
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75'>Technologies</h2>        
        </div>


      </div>
      


      </div>
      </Layout>
      </main>
      
    </>
  )
}

export default aboutUs
