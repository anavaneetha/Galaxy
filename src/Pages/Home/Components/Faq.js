// import React from "react";
import React,{useState} from 'react';

const Faq = () => {

    const data=[
        {
            question:"question 1?",
            answers:"Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg. Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg. Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.", 
        },
        {
            question:"question 2?",
            answers:"Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg. Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg. Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg." 
        },
        {
            question:"question 3?",
            answers:"Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg. Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg. Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg." 
        },
        {
            question:"question 4?",
            answers:"Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg. Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg. Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg. Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.", 
        },
        {
            question:"question 5?",
            answers:"Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg. Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg. Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg.Lorem ipsum mnnjmnj kjnb mnnnj gfdvg ffgg." 
        },
    ];

    const[selected,setSelected] = useState(null)

    const handleSelect = (i)=>{
      if(selected===i){
        return setSelected(null)
      }
      setSelected(i);
    }


  return (
    <>
      <h1 className="heading">FAQs</h1>
      <section className="faq">
        <div className="item">
           {data.map((item,i) => {
              return (
                <div className="wrapper" key={i} onclick={()=>handleSelect(i)}>
                <div className="question">
                  <h3>{item.question}</h3>
                  <img src={require("../../../Assets/up-arrow.png")} alt="" className={selected===i ? "reverse" :""}/>
                </div>
                <div className={selected===i ? "answers show" : "answers"}>
                  <p>{item.answers}</p>
                </div>
                </div>


              )
            })
          }
           
        </div>
        

      </section>
    </>
  );
};

export default Faq;
