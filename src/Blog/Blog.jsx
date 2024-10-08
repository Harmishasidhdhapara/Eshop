import React from 'react'
import Heading from '../Heading'
const BlogData=[
    {
        title:"How to choose perfect smartwatch",
        subtitle:"minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published:"Jan 20, 2024 by Dilshad",
        img:"blog-1.jpg",
    },


    {
        title:"How to choose perfect gadget",
        subtitle:"minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published:"Jan 20, 2024 by Satya",
        img:"blog-2.jpg",
    },


    {
        title:"How to choose perfect VR headset",
        subtitle:"minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published:"Jan 20, 2024 by Sabir",
        img:"blog-3.jpg",
    },
]
const Blog = () => {
  return (
    <div className='my-12'>
        <div className='container'>
            <Heading title="Recent News" subtitle={"Explore Our Blogs"}/>

          {/* blogs section */}
<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
    {/* blogcard */}
    {
        BlogData.map((data)=>(
            <div key={data.title} className=''>
                {/* img section */}
                 <div className='overflow-hidden rounded-2xl mb-2'>
                    <img src={data.img} alt=""  className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'/>
                        </div>
                         {/* content section */}
                         <div className='space-y-2'>
                            <p className='text-xs text-gray-500'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.title}</p>
                            <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                         </div>
                         
                </div>
        ))
    }

</div>

        </div>
    </div>
  );
};

export default Blog;