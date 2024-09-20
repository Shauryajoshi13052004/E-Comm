import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

function Product() {

  const {productId} = useParams();
  const {products,currency} = useContext(ShopContext)
  const [productData,setProductData] = useState(false)
  const [image,setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item)=>{
      if(item._id == productId){
        setProductData(item)
        setImage(item.image[0])
        console.log(item)
        return null;
      }
    })
  } 

  useEffect(()=>{
    fetchProductData();
  },[productId])

  
  console.log(productId)
  return productData ? (
    <div className='bodre-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
    {/* product image */}
    <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
      <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
        {
          productData.image.map((item,index)=>(
            <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
          ))
        }
      </div>
      <div className='w-full sm:w-[80%]'>
        <img src={image} className='w-full h-auto' alt="" />
      </div>
    </div>

    {/* product  info */}

    <div className='fex-1'>
      <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

      <div className='flex items-center gap-1 mt-2'>
        <img src={assets.star} className='w-3.5' alt="" />
        <img src={assets.star} className='w-3.5' alt="" />
        <img src={assets.star} className='w-3.5' alt="" />
        <img src={assets.star} className='w-3.5' alt="" />
        <img src={assets.star_dull} className='w-3.5' alt="" />
        <p className='pl-2'>{122}</p>
      </div>
      <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
      <p className='mt-5 text-gray-500 w-4/5'>
      {/* {productData.description} */}
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, sunt.
      </p>
      <div className='flex flex-col gap-4 my-8'>
        <p>Select Size</p>
        <div className='flex gap-2'>{productData.size.map((item,index)=>(
          <button key={index} className={`border py-2 bg-gray-100 ${item == size ? 'border-orange-500': ''}`} onClick={()=>setSize(item)}>{item}</button>
        ))}</div>
      </div>
       <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
       <hr className='mt-8  sm:w-4/5'/>
       <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
          <p>100% Original Product</p>
          <p>Cash On Delivery Available</p>
          <p>Easy return in 7 Days</p>
       </div>
       </div>
      </div>

      {/* description and review section */}

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Descritpiton</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex felx-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.

</p>
<p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>

      {/* Display Releted Product */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) :(
    <div className='opacity-0'></div>
  )
}

export default Product