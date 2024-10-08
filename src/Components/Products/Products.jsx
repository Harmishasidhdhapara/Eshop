import React from 'react'
import Heading from '../../Heading'
import Productscard from '../../Productscard';


const ProductsData=[
  {
    id:1,
    img:"p-1.jpg",
    title:"Boat Headphone",
    price:"120",
    aosdelay:"0"
  },

  {
    id:2,
    img:"p-2.jpg",
    title:"Rocky Mountain",
    price:"120",
    aosdelay:"0"
  },

  {
    id:3,
    img:"p-3.jpg",
    title:"Goggles",
    price:"120",
    aosdelay:"0"
  },

  {
    id:4,
    img:"p-4.jpg",
    title:"Printed",
    price:"120",
    aosdelay:"0"
  },

  {
    id:5,
    img:"p-5.jpg",
    title:"Boat Headphone",
    price:"120",
    aosdelay:"0"
  },

  {
    id:6,
    img:"p-7.jpg",
    title:"Rocky Mountain",
    price:"120",
    aosdelay:"0"
  },

  {
    id:7,
    img:"p-9.jpg",
    title:"Goggles",
    price:"120",
    aosdelay:"0"
  },

  {
    id:8,
    img:"p-5.jpg",
    title:"Printed",
    price:"220",
    aosdelay:"0"
  },

]


const Products = () => {
  return (
    <div>
        <div className="container">
            {/* header section */}
            <Heading title="Our Products" subtitle={"Explore Our Products"}/>
           {/* body section  */}
           <Productscard data={ProductsData}/>
        </div>
    </div>
  )
}

export default Products;