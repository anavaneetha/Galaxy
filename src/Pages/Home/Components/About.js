import React from 'react'

const About = () => {
  return (
   <>
   <h1 className='heading'>About us</h1>
   <section className='about'>
    <img src={require("../../../Assets/aboutImg.png")} alt=''/>
    <div className='content'>
      <h2>Lorem,ipsum dolor.</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  printer took a galley of type and scrambled  publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's when an unknown printer took  to make a type

      </p>
    </div>

   </section>
   </>
  )
}

export default About
