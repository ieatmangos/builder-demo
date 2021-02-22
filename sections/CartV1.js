import React from "react";

const CartV1 = () => {
  return (
    <section className='Cart hds-container'>
    <div className="hds-section-layout hds-text-color">
      <div className="hds-section__v-spacing hds-section__h-spacing">
        <div className="w-full mx-auto">
          <h3 className="hds-title__large mb-sm md:mb-md font-bold md:text-center">
            Cart info
          </h3>
          {/* <!-- Cart Table --> */}
          <div className="mb-md">
            {/* <!-- Table Header --> */}
            <div className="hidden md:flex pb-xs border-b">
              <div className="w-4/12">
                <span className="font-bold">Item</span>
              </div>
              <div className="pl-xs w-2/12">
                <span className="font-bold">Size</span>
              </div>
              <div className="pl-xs w-2/12">
                <span className="font-bold">Color</span>
              </div>
              <div className="pl-xs w-2/12">
                <span className="font-bold">Qty</span>
              </div>
              <div className="pl-xs w-2/12">
                <span className="font-bold">Price</span>
              </div>
            </div>

            {/* <!-- Table Row --> */}
            <div className="flex items-center py-sm md:border-b">
              <div className="w-full md:w-4/12">
                <div className="flex">
                  <div className="w-24 h-24 mr-sm">
                    <div className="relative h-full bg-primary rounded-md overflow-hidden">
                      <img
                        className="top-0 w-full h-full min-h-1/2 object-cover absolute z-0"
                        src="/images/products/product-image-2.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="hds-copy mb-xs font-bold">Retro car</p>
                    <p className="hds-legal hidden md:block">
                      Some tools allow the incorporation
                    </p>
                    <div className="md:hidden">
                      <p className="hds-legal mb-xs">Quantity: 2</p>
                      <p className="hds-legal font-bold">$12,492</p>
                    </div>
                  </div>
                  <button className="hds-title__small md:hidden">×</button>
                </div>
              </div>
              <div className="hidden md:block pl-xs w-2/12">46</div>
              <div className="hidden md:block pl-xs w-2/12">Violet</div>
              <div className="hidden md:block pl-xs w-2/12">
                <div className="flex mr-xs border rounded-md">
                  <input
                    className="flex-grow p-xs w-12 rounded-md text-lg leading-8 text-center"
                    value="1"
                    onChange={() => {}}
                  />
                  <div className="flex flex-col justify-center w-12 border-l">
                    <button className="flex justify-center items-center h-full border-b">
                      <img src="/images/svg/carrotUp.svg" alt="increase" />
                    </button>
                    <button className="flex justify-center items-center h-full">
                      <img src="/images/svg/carrotDown.svg" alt="decrease" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-between items-center pl-xs w-2/12">
                <span>$12,492</span>
                <button className="hds-title__small">×</button>
              </div>
            </div>

            {/* <!-- Table Row --> */}
            <div className="flex items-center py-sm md:border-b">
              <div className="w-full md:w-4/12">
                <div className="flex">
                  <div className="w-24 h-24 mr-sm">
                    <div className="relative h-full bg-primary rounded-md overflow-hidden">
                      <img
                        className="top-0 w-full h-full min-h-1/2 object-cover absolute z-0"
                        src="/images/products/product-image-2.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="hds-copy mb-xs font-bold">Retro car</p>
                    <p className="hds-leagal hidden md:block">
                      Some tools allow the incorporation
                    </p>
                    <div className="md:hidden">
                      <p className="hds-legal mb-xs">Quantity: 2</p>
                      <p className="hds-legal font-bold">$12,492</p>
                    </div>
                  </div>
                  <button className="hds-title__small md:hidden">×</button>
                </div>
              </div>
              <div className="hidden md:block pl-xs w-2/12">46</div>
              <div className="hidden md:block pl-xs w-2/12">Violet</div>
              <div className="hidden md:block pl-xs w-2/12">
                <div className="flex mr-xs border rounded-md">
                  <input
                    className="flex-grow p-xs w-12 rounded-md text-lg leading-8 text-center"
                    value="1"
                    onChange={() => {}}
                  />
                  <div className="flex flex-col justify-center w-12 border-l">
                    <button className="flex justify-center items-center h-full border-b">
                      <img src="/images/svg/carrotUp.svg" alt="increase" />
                    </button>
                    <button className="flex justify-center items-center h-full">
                      <img src="/images/svg/carrotDown.svg" alt="decrease" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-between items-center pl-xs w-2/12">
                <span>$12,492</span>
                <button className="hds-title__small">×</button>
              </div>
            </div>

            {/* <!-- Table Row --> */}
            <div className="flex items-center py-sm md:border-b">
              <div className="w-full md:w-4/12">
                <div className="flex">
                  <div className="w-24 h-24 mr-sm">
                    <div className="relative h-full bg-primary rounded-md overflow-hidden">
                      <img
                        className="top-0 w-full h-full min-h-1/2 object-cover absolute z-0"
                        src="/images/products/product-image-2.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="hds-copy mb-xs font-bold">Retro car</p>
                    <p className="hds-legal hidden md:block">
                      Some tools allow the incorporation
                    </p>
                    <div className="md:hidden">
                      <p className="hds-legal mb-xs">Quantity: 2</p>
                      <p className="hds-legal font-bold">$12,492</p>
                    </div>
                  </div>
                  <button className="md:hidden hds-title__small">×</button>
                </div>
              </div>
              <div className="hidden md:block pl-xs w-2/12">46</div>
              <div className="hidden md:block pl-xs w-2/12">Violet</div>
              <div className="hidden md:block pl-xs w-2/12">
                <div className="flex mr-xs border rounded-md">
                  <input
                    className="flex-grow p-xs w-12 rounded-md text-lg leading-8 text-center"
                    value="1"
                    onChange={() => {}}
                  />
                  <div className="flex flex-col justify-center w-12 border-l">
                    <button className="flex justify-center items-center h-full border-b">
                      <img src="/images/svg/carrotUp.svg" alt="increase" />
                    </button>
                    <button className="flex justify-center items-center h-full">
                      <img src="/images/svg/carrotDown.svg" alt="decrease" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-between items-center pl-xs w-2/12">
                <span>$12,492</span>
                <button className="hds-title__small">×</button>
              </div>
            </div>
          </div>

          {/* <!-- Cart Details --> */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-sm">
            <div className="mb-sm sm:mb-0 w-full sm:w-1/3">
              <p className="hds-legal mb-xs">Add a note to your order:</p>
              <textarea className="w-full h-24 bg-gray-200" />
            </div>
            <div className="w-full sm:w-56">
              <div className="hds-copy flex justify-between flex-wrap mb-sm">
                <span>Total price: </span>
                <span className="font-bold">$12,492</span>
              </div>
              <button className="hds-btn hds-btn__primary w-full" type="button">
                Checkout
              </button>
            </div>
          </div>

          {/* <!-- Continue Shopping --> */}
          <a href="/" className="hds-legal flex items-center">
            <img src="/images/svg/carrotLeft.svg" alt="continue shopping" />
            <span>Continue Shopping</span>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};
export default CartV1;
