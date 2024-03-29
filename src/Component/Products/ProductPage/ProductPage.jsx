import React from "react";
import { useParams } from "react-router-dom";
import courses from "../ProductData";
import { Link } from "react-router-dom";
import TopView from "./TopView";
import Tabs from "./Tabs";
import MediaAvatar from "../../Avatar/MediaAvatar";
import ViewCard from "../../Cards/ViewCard";
import ProductReviews from "../../Reviews/ProductReviews";
import OtherProducts from "./OtherProducts";
import ProductQuery from "./ProductQuery";

const ProductPage = () => {
  const { productID } = useParams();
  const product = courses[productID];


  return (
    <div className="min-h-screen my-[8rem] flex flex-col justify-center items-center">
      {/* <section className='flex'>
        <div className='flex flex-col justify-center items-start w-[50%] p-[3em] bg-[#f3e7ce]'>
          <h1 className='text-[40px] text-[black]  font-bold mt-[1em]'>{product.title}</h1>
          <div className='flex justify-evenly items-center my-[40px]'>
            <span className='flex justify-around items-center mx-[15px]'>
              <span className=''><strike>₹200.00</strike> <b>{product.price}</b></span>
            </span>
            <span className='flex justify-around items-center mx-[15px]'>
              <span className=''>30 Days</span>
            </span>
            <span className='flex justify-around items-center  mx-[15px]'>
              <span className=''>{product.badgeDesc}</span>
            </span>
          </div>
          <Link
              to="#"
              className="mt-2 py-3 px-7 inline-flex justify-center items-center gap-x-2 text-[18px] font-semibold rounded-lg border border-transparent bg-[#ffb606] text-white hover:bg-[#ffb606]700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-"
              href="#"
            >
              Buy Now
            </Link>
        </div>
        <img src={product.image} className='w-[50%]' alt={product.title} />
      </section> */}

      <div>
        <TopView
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          badgeDesc={product.badgeDesc}
          duration={product.duration}
        />
      </div>

      <div className="mt-[5rem] px-7 flex justify-center md:flex-row flex-col w-full">
        <Tabs
          tabTitle1={product.tabTitle1}
          tabTitle2={product.tabTitle2}
          tabTitle3={product.tabTitle3}
          tabContent1={product.tabContent1}
          tabContent2={product.tabContent2}
          tabContent3={
            <div className="py-8">
              <MediaAvatar />
            </div>
          }
        />

        <div className="">
          <ViewCard
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            badgeDesc={product.badgeDesc}
            duration={product.duration}
          />
        </div>
      </div>
      <div className="my-4">
        <ProductReviews />
      </div>
      <div>
        <OtherProducts />
      </div>
      <div>
        <ProductQuery />
      </div>
    </div>
  );
};

export default ProductPage;
