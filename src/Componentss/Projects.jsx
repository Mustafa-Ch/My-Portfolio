import React from 'react'
import jobBoard from '../../public/assets/images/Project.png'
const Projects = () => {
    const project1=['#react.js',
'#express.js',
'#node.js',
'#JWT',
'Node Cron',
'#Cloudinary',
'#mongoDB',
'#mongoose',
'#css',
'#javascript']
  return (
    <div className='font-[Nunito]  px-10   mx-auto  '>
         <div className=' flex md:translate-y-10 justify-center items-center '>
           <h1 className='border-b-2 font-bold border-[#1788ae] text-[#1788ae] text-3xl sm:text-[40px] text-center inline-block py-2 px-10'> Latest Works</h1>
        </div>
        <div className='relative'>
       
       <div className='flex flex-col md:flex-row gap-y-10 justify-between items-center mt-10 '>
          <div className='w-full'>
          <h2 className='font-[Spartan] text-[#DFDF07] font-bold text-3xl mb-4'>Niche Nest</h2>
          <p className='w-full md:w-[90%]'>I developed this job board app during my journey into full-stack development. It leverages an external API to fetch and display real-time job listings, providing users with up-to-date opportunities. The app features a clean, intuitive UI, making job searching easy and enjoyable.</p>
          <div className="flex flex-wrap w-full md:w-[90%] items-center gap-3 mt-5 text-sm font-medium  ">
  
                  {project1.map((item) => (
                    <p className="border-[0.5px]  border-gray-400 rounded-full px-3 py-1">
                      {item}
                    </p>
                  ))}
                </div>
                <div className='w-1/4 hidden md:block -z-1 h-[1px] absolute top-1/4 left-1/2 bg-[#1788ae]'></div>
                <div className='w-4 h-4 border-2 hidden md:block border-[#1788ae] rounded-full absolute left-1/2 -translate-x-1/2 top-1/4 -translate-y-1/2 cursor-pointer hover:scale-110 duration-100 z-10 bg-white'></div>
          </div>
          <div className='mt-10 flex justify-center items-center -order-1 md:order-1 z-10 w-full hover:scale-110 duration-100 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'>
              
             <a href='https://job-board-virid-beta.vercel.app/'className='' > <img src={jobBoard} className=' max-w-[400px] w-full   drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'/></a>
          </div>
       </div>
       <div className='flex  flex-col gap-y-10 md:flex-row justify-between items-center mt-20 relative'>
       <div className='mt-10 flex justify-center items-center  z-10 w-full hover:scale-110 duration-100 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'>
              
              <a href='https://job-board-virid-beta.vercel.app/'className='' > <img src={jobBoard} className=' max-w-[400px] w-full  mb-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'/></a>
           </div>
          <div className='md:ml-20 w-full '>
          <h2 className='font-[Spartan] text-[#DFDF07] font-bold text-3xl mb-4'>Niche Nest</h2>
          <p className='w-full md:w-[90%]'>I developed this job board app during my journey into full-stack development. It leverages an external API to fetch and display real-time job listings, providing users with up-to-date opportunities. The app features a clean, intuitive UI, making job searching easy and enjoyable.</p>
          <div className="flex flex-wrap w-full md:w-[90%] items-center gap-3 mt-5 text-sm font-medium  ">
  
                  {project1.map((item) => (
                    <p className="border-[0.5px]  border-gray-400 rounded-full px-3 py-1">
                      {item}
                    </p>
                  ))}
                </div>
                <div className='w-1/4 hidden md:block -z-1 h-[1px] absolute top-1/2 left-1/4 bg-[#1788ae]'></div>
                <div className='w-4 h-4 border-2 hidden md:block border-[#1788ae] rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 duration-100 z-10 bg-white'></div>
          </div>
            
       </div>
       <div
          class="w-[2px] hidden md:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2 "
        ></div>
      
      </div>
    </div>
   
  )
}

export default Projects
