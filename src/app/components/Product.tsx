import React from 'react'
import Image from 'next/image'

const Product = () => {
  return (
   

    <div className='text-center my-20 justify-around  items-center
    ' >
    <h1 className='text-2xl font-bold'> Laptop Prices in Pakistan</h1>
   
    <div  className="grid  grid-cols-1
    md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center item-start my-10">    
    

      <div className=' w-80 border-slate-200 border bg-white 
      shadow-zinc-500 shadow-lg rounded-lg p-2 flex flex-col'>
   <Image
    src="/images/lenovo.png"
    alt='Lenovo'
    width={240}
    height={240}
   className='mx-auto'
   />

   <h3 className='py-4 px-2 text-sm font-medium '> Lenovo Laptop Ideapad 3 15.6 Inches 11th Gen Core i5 (8GB - 1TB HDD)</h3>

<div className="text-center">
  <p><sup> Rs</sup> 146,999 </p>

  <button className='border bg-black text-white p-2 my-3 w-9/12 rounded-lg
  hover:cursor-pointer hover:bg-zinc-500'>
    Buy Now
  </button>
  </div>
      </div>

{/* Image 2  */}

<div className=' w-80 border-slate-200 border bg-white 
      shadow-zinc-500 shadow-lg rounded-lg  flex flex-col'>
   <Image
    src="/images/Hp.webp"
    alt='HP'
    width={350}
    height={350}
   className='mx-auto py-1'
   />

   <h3 className='py-4 px-2 text-sm font-medium'> HP 15-FD0355NIA 13th Gen Core i5-1334U (8GB-512GB)</h3>

<div className="text-center">
  <p><sup> Rs</sup>148,999 </p>

  <button className='border bg-black text-white p-2 my-3 w-9/12 rounded-lg
  hover:cursor-pointer hover:bg-zinc-500'>
    Buy Now
  </button>
  </div>
      </div>

   {/* Image 3  */}

<div className=' w-80   border-slate-200 border bg-white 
rounded-lg  shadow-zinc-500 shadow-lg flex flex-col p-2'>
<Image 
 src="/images/dell.png"
 alt='Dell'
 width={350}
 height={350}
 className='mx-auto'
 

/>

<h3 className='py-4 px-2 text-sm font-medium '> Dell Latitude 3540 15.6 Inches 13th Gen Core i5 DOS (8GB - 256GB)</h3>

<div className="text-center">
<p><sup> Rs</sup> 168,999 </p>
<button className='border bg-black text-white p-2 my-3 w-9/12 rounded-lg
  hover:cursor-pointer hover:bg-zinc-500'>
    Buy Now
  </button>
</div>
   </div>
   </div>
   </div>
  
  )
}

export default Product

// import React from 'react';
// import Image from 'next/image';

// const Product = () => {
//   const products = [
//     {
//       id: 1,
//       image: '/images/lenovo.avif',
//       alt: 'Lenovo',
//       title: 'Lenovo Laptop Ideapad 3 15.6 Inches 11th Gen Core i5 (8GB - 1TB HDD)',
//       price: '146,999',
//     },
//     {
//       id: 2,
//       image: '/images/Hp.webp',
//       alt: 'HP',
//       title: 'HP 15-FD0355NIA 13th Gen Core i5-1334U (8GB-512GB)',
//       price: '148,999',
//     },
//     {
//       id: 3,
//       image: '/images/dell.jpg',
//       alt: 'Dell',
//       title: 'Dell Latitude 3540 15.6 Inches 13th Gen Core i5 DOS (8GB - 256GB)',
//       price: '168,999',
//     },
//   ];

//   return (
//     <div className="text-center my-20">
//       <h1 className="text-2xl font-bold">Laptop Prices in Pakistan</h1>

//       <div
//         className="grid 
//        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-start my-10"
//       >
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="w-80 border border-slate-200 bg-white flex flex-col shadow-lg rounded-lg"
//           >
//             <Image
//               src={product.image}
//               alt={product.alt}
//               width={300}
//               height={300}
//               className="rounded-t-lg"
//             />
//             <h3 className="text-center py-4 px-2 text-sm font-medium">
//               {product.title}
//             </h3>
//             <div className="text-center pb-4">
//               <p className="text-lg font-semibold">
//                 <sup>Rs</sup> {product.price}
//               </p>
//               <button
//                 className="border bg-black text-white py-2 mt-3 w-9/12 rounded-lg hover:bg-gray-700"
//                 type="button"
//               >
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;
