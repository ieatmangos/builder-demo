import React from "react";

const ProductDetailV3 = () => {
  return (
    <section className="ProductDetail hds-container">
      <div className="hds-section-layout hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing">
          <div className="grid grid-cols-1 md:grid-cols-10 md:gap-12">
            <div className="col-span-6 mb-sm md:mb-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-xs md:gap-sm h-104 sm:h-144 md:h-auto overflow-scroll ">
                <div className="relative rounded grid-item overflow-hidden min-h-120 sm:min-h-40">
                  {/* <div className="absolute inset-0 w-full h-full min-h-40 bg-primary" /> */}
                  <img
              className="block object-cover min-w-full min-h-12 md:min-h-full transition ease-out duration-300 transform hover:scale-105"
              src="/images/products/product-image.jpeg"
              alt=""
            />
            
                </div>

                <div className="relative rounded grid-item overflow-hidden min-h-120 sm:min-h-40">
                  {/* <div className="absolute inset-0 w-full h-full min-h-40 bg-primary" /> */}
                  <img
              className="block object-cover min-w-full min-h-12 md:min-h-full transition ease-out duration-300 transform hover:scale-105"
              src="/images/products/product-image.jpeg"
              alt=""
            />
                </div>

                <div className="relative rounded grid-item overflow-hidden min-h-120 sm:min-h-40">
                  {/* <div className="absolute inset-0 w-full h-full min-h-40 bg-primary" /> */}
                  <img
              className="block object-cover min-w-full min-h-12 md:min-h-full transition ease-out duration-300 transform hover:scale-105"
              src="/images/products/product-image.jpeg"
              alt=""
            />
                </div>

                <div className="relative rounded grid-item overflow-hidden min-h-120 sm:min-h-40">
                  {/* <div className="absolute inset-0 w-full h-full min-h-40 bg-primary" /> */}
                  <img
              className="block object-cover min-w-full min-h-12 md:min-h-full transition ease-out duration-300 transform hover:scale-105"
              src="/images/products/product-image.jpeg"
              alt=""
            />
                </div>
              </div>
            </div>
            <div className="col-span-4 ">
              <h4 className="hds-title__large font-black mb-sm ">
                Symbolic content Symbolic
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
              <p className="mb-xs md:mb-sm text-4xl font-black">$423</p>
              <p className="hds-copy mb-sm">
                High fidelity wireframes include more real content, specific
                typography choices, and information on image dimensions.
              </p>

              <div className="mb-xs">
                <p className="hds-copy mb-xs">Size</p>
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
              </div>

              <div className="mb-md">
                <p className="hds-copy mb-xs">Colors</p>
                <div className="flex">
                  <button className="relative flex justify-center items-center mr-xs w-12 h-12 bg-primary rounded-md">
                    <img
                      className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0 rounded-md"
                      src="/images/products/product-image.jpeg"
                      alt=""
                    />
                  </button>
                  <button className="relative flex justify-center items-center mr-xs w-12 h-12 bg-primary rounded-md">
                    <img
                      className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0 rounded-md"
                      src="/images/products/product-image.jpeg"
                      alt=""
                    />
                  </button>
                  <button className="relative flex justify-center items-center mr-xs w-12 h-12 bg-primary rounded-md">
                    <img
                      className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0 rounded-md"
                      src="/images/products/product-image.jpeg"
                      alt=""
                    />
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
                      <img src="/images/svg/carrotDown.svg" alt="down" />
                    </button>
                  </div>
                </div>

                <button className="hds-btn hds-btn__primary" type="button">
                  Add To Cart
                </button>
              </div>

              <div>
                <p className="hds-copy mb-xs">Share This</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailV3;
