import React from 'react'

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* first  col */}
                <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 rounded-3xl relative h-[320px] flex items-end text-white'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                        
                            <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-primary text-white'>Browse</button>
                        </div>
                    </div>
                    <img src="earphone.png" className='w-[320px] absolute bottom-0' alt="" />
                </div>
                {/* second  col */}
                <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 rounded-3xl relative h-[320px] flex items-end text-white'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gadget</p>
                        
                            <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-white text-brandYellow'>Browse</button>
                        </div>
                    </div>
                    <img src="watch.png" className='w-[320px] absolute -right-4 lg:top-[40px]' alt="" />
                </div>
                {/* third  col */}
             <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 rounded-3xl relative h-[320px] flex items-end text-white'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptop</p>
                        
                            <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-white text-primary'>Browse</button>
                        </div>
                    </div>
                    <img src="macbook.png" className='w-[250px] absolute  top-1/2 -translate-y-1/2 -right-0' alt="" />
                </div>

                {/* four col */}

             <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-500/90 to-gray-100 rounded-3xl relative h-[320px] flex items-end text-white'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gaming</p>
                        
                            <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-primary text-white'>Browse</button>
                        </div>
                    </div>
                    <img src="gaming.png" className='w-[250px] absolute  top-1/2 -translate-y-1/2 -right-0' alt="" />
                </div>
             
             {/* five col */}

             <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 rounded-3xl relative h-[320px] flex items-start text-white'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Technology</p>
                        
                            <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-white text-brandGreen'>Browse</button>
                        </div>
                    </div>
                    <img src="vr.png" className='w-[320px] absolute bottom-0' alt="" />
                </div>
               
              {/* six col */}

              <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 rounded-3xl relative h-[320px] flex items-start text-white'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Speaker</p>
                        
                            <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-white text-brandBlue'>Browse</button>
                        </div>
                    </div>
                    <img src="speaker.png" className='w-[200px] absolute bottom-0 right-0' alt="" />
                </div>
             </div>
             </div>
             </div>

  );
};





export default Category;