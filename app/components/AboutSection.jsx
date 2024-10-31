"use client"
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';


const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>TailwindCSS</li>
                <li>JavaScript</li>
                <li>Ajax</li>
                <li>JQuery</li>
                <li>Node.js</li>
                <li>React</li>
                <li>Nextjs</li>
                <li>Express</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>Python</li>
                <li>Mysql</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                <li>Information Technology Engineering | AI Department</li>
                <li>Tishreen University, Lattakia, Syria</li>
            </ul>
        )
    },
    {
        title:"Experience",
        id:"experience",
        content:(
            <ul className='list-disc pl-2'>
                <li>+3 years as a Software Engineer</li>
                <li>+2 years as a Full-Stack web development at ZEOUR LTD, London, UK</li>
            </ul>
        )
    },
]
const AboutSection = () => {
    const[tab,setTab] = useState("skills");
    const[isPending,startTransition] = useTransition();

    const handleTabChange = (id)=>{
        startTransition(()=>{
            setTab(id);
        })
    }
  return (
    <section className='text-white' id="about">
        <div className='md:grid md:grid-cols-2 gap-8 py-8 px=4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/About-image.png" width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex-col h-full'>
                <h2 className='tetxl font-bold text-white mb-4'>
                    About Me
                </h2>
                <p className='text-base me:text-lg'>
                    Results-driven Software Engineer with expertise 
                    in full-stack development. Proﬁcient in multiple 
                    programming languages and dedicated to delivering 
                    high-quality, scalable solutions. Adept at 
                    collaborating in cross-functional teams to meet 
                    project goals. Passionate about staying current 
                    with emerging technologies and contributing 
                    innovative ideas. Seeking opportunities to apply 
                    skills in a dynamic and challenging environment.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    {
                        TAB_DATA.map((data,index)=>(
                            <TabButton key={index} selectTab={()=>handleTabChange(data.id)} active={tab===data.id} >{" "}{data.title}{" "}</TabButton>
                        ))
                    }

                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((data)=>data.id===tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection