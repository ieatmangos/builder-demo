import React from "react";

const ProductDetailV1 = () => {
  return (
    <section className="ProductDetail hds-container">
      <div className="hds-section-layout hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing  ">
          <div className="grid grid-cols-1 md:grid-cols-10 md:gap-12 w-full mx-auto">
            <div className="col-span-6 mb-sm md:mb-0">
              <div className="relative block">
                <div className="relative flex justify-between items-center mb-xs md:mb-sm w-full pb-3/4 bg-primary rounded-md overflow-hidden">
                  <img
                    className="h-full top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
                    src="/images/products/product-image.jpeg"
                    alt=""
                  />
                </div>
                <button
                  className="absolute hidden md:block z-1 ml-xs top-1/2 left-0"
                  style={{ top: "calc(50% - 24px)" }}
                >
                  <img src="/images/svg/carrotLeft.svg" alt="left" />
                </button>
                <button
                  className="absolute right-0 hidden md:block z-1 mr-xs"
                  style={{ top: "calc(50% - 24px)" }}
                >
                  <img src="/images/svg/carrotRight.svg" alt="left" />
                </button>
              </div>
              <div className="flex ">
                <div className="relative mr-xs md:mr-sm w-20 md:w-24 h-20 md:h-24 bg-primary rounded-md overflow-hidden">
                  <img
                    className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
                    src="/images/products/product-image.jpeg"
                    alt=""
                  />
                </div>

                <div className="relative mr-2 md:mr-5 w-20 md:w-24 h-20 md:h-24 bg-primary rounded-md overflow-hidden">
                  <img
                    className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
                    src="/images/products/product-image.jpeg"
                    alt=""
                  />
                </div>

                <div className=" relative mr-2 md:mr-5 w-20 md:w-24 h-20 md:h-24 bg-primary rounded-md overflow-hidden">
                  <img
                    className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
                    src="/images/products/product-image.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <h4 className="hds-title__large hds-title-color font-black mb-sm">
                Patio Shield Mosquito Repeller
              </h4>
              <div className="flex mb-xs">
                <div className="flex mr-xs">
                  <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                  <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                  <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                  <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                  <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                </div>
                <p className="hds-legal">12 Reviews</p>
              </div>
              <p className="mb-xs md:mb-sm text-4xl font-black text-gray-700">
                $24.99
              </p>
              <p className="hds-copy mb-sm text-gray-700">
                The Thermacell Patio Shield Mosquito Repeller effectively repels
                mosquitoes by creating a 15-foot zone of protection. This
                compact, easy-to-use and stylish device will look great on any
                patio or deck while it works to keep pesky mosquitoes from
                biting and bothering your guests.
              </p>

              {/* <div className="mb-xs">
            <p className="mb-xs hds-copy leading-8">Size</p>
            <div className="flex">
              <button className="flex justify-center items-center mr-xs w-12 h-12 border rounded-md">
                <span className="hds-legal font-bold">28</span>
              </button>
              <button className="flex justify-center items-center mr-xs w-12 h-12 border rounded-md">
                <span className="hds-legal font-bold">30</span>
              </button>
              <button className="flex justify-center items-center mr-xs w-12 h-12 border rounded-md">
                <span className="hds-legal font-bold">32</span>
              </button>
              <button className="flex justify-center items-center mr-xs w-12 h-12 border rounded-md">
                <span className="hds-legal font-bold">34</span>
              </button>
              <button className="flex justify-center items-center mr-xs w-12 h-12 border rounded-md">
                <span className="hds-legal font-bold">36</span>
              </button>
            </div>
          </div> */}

              <div className="mb-md">
                <p className="hds-copy mb-xs">Colors</p>
                <div className="flex">
                  <button className="relative flex justify-center items-center mr-xs w-12 h-12 bg-primary rounded-md">
                  </button>
                  <button className="relative flex justify-center items-center mr-xs w-12 h-12 bg-red-800 rounded-md">
                  </button>
                  <button className="relative flex justify-center items-center mr-xs w-12 h-12 bg-gray-700 rounded-md">
                  </button>
                </div>
              </div>

              <div className="flex items-center mb-sm">
                <div className="flex mr-xs border rounded-md">
                  <input
                    default="1"
                    className="p-xs w-12 rounded-md text-lg leading-8 text-center"
                  />
                  <div className="flex flex-col justify-center w-12 border-l">
                    <button className="flex justify-center items-center h-full border-b">
                      <img src="/images/svg/carrotUp.svg" alt="up" />
                    </button>
                    <button className="flex justify-center items-center h-full">
                      <img src="/images/svg/carrotDown.svg" alt="up" />
                    </button>
                  </div>
                </div>

                <button className="hds-btn hds-btn__primary" type="button">
                  Add To Cart
                </button>
              </div>

              {/* <div>
            <p className="mb-xs text-base leading-6">Share This</p>
            <div className="flex">
              <a href="/builder" target="_blank" className="mr-2">
                <div className="w-8 h-8 bg-primary rounded-full" />
              </a>
              <a href="/builder" target="_blank" className="mr-2">
                <div className="w-8 h-8 bg-primary rounded-full" />
              </a>
              <a href="/builder" target="_blank" className="mr-2">
                <div className="w-8 h-8 bg-primary rounded-full" />
              </a>
              <a href="/builder" target="_blank" className="mr-2">
                <div className="w-8 h-8 bg-primary rounded-full" />
              </a>
            </div>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailV1;
