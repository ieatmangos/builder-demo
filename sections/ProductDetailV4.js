import React from "react";

const ProductDetailV4 = () => {
  return (
    <section className="ProductDetail hds-container overflow-hidden">
      <div className="hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing w-full relative h-screen md:h-full relative">
          <img
            className="absolute inset-0 object-cover min-w-full min-h-12 md:min-h-full transition ease-out duration-300 transform hover:scale-105"
            src="/images/products/product-image.jpeg"
            alt=""
          />
          <div className="hds-section-layout h-full flex">
            <div className="bg-white rounded w-full sm:max-w-md z-10 p-sm md:p-md m-sm mt-auto md:my-auto md:ml-md lg:mx-0 ">
              {/* <!-- top wrap --> */}
              <div className="flex jusitfy-between md:block mb-sm">
                {/* <!-- title --> */}
                <h3 className="hds-title__medium font-bold w-1/2 md:w-full">
                  Vintage Old Jeans Jacket
                </h3>
                {/* <!-- reviews --> */}
                <div className="hidden md:flex my-xs">
                  <div className="flex mr-xs">
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                  </div>
                  <p className="hds-legal">4.0 points</p>
                </div>
                {/* <!-- Price --> */}
                <div className="hds-title__medium font-bold ml-auto">$193</div>
              </div>
              {/* <!-- paragraph --> */}
              <div className="hds-copy hidden md:block mb-sm">
                High fidelity wireframes include more real content, specific
                typography choices, and information on image dimensions.
              </div>
              {/* <!-- inputs --> */}
              <div className="flex justify-between mb-sm">
                <div className="mr-sm flex-grow border rounded-md">
                  <select
                    defaultValue={"DEFAULT"}
                    className="w-full py-xs pl-sm pr-md bg-white bg-no-repeat appearance-none"
                    style={{
                      backgroundImage:
                        "url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16.0977%207.9152C16.4527%207.56017%2016.4527%206.98457%2016.0977%206.62955C15.7427%206.27453%2015.1671%206.27453%2014.8121%206.62955L10.0004%2011.4413L5.18864%206.62955C4.83361%206.27453%204.25801%206.27453%203.90299%206.62955C3.54796%206.98457%203.54796%207.56017%203.90299%207.9152L9.35753%2013.3697C9.71255%2013.7248%2010.2882%2013.7248%2010.6432%2013.3697L16.0977%207.9152Z%22%20fill%3D%22%231B202B%22%2F%3E%0A%3C%2Fsvg%3E%0A')",
                      backgroundPosition: "calc(100% - 1.5rem) center"
                    }}
                  >
                    <option value="DEFAULT" disabled>
                      Select Size
                    </option>
                    <option>28</option>
                    <option>30</option>
                    <option>32</option>
                    <option>34</option>
                    <option>36</option>
                  </select>
                </div>

                <div className="w-32 md:w-40 border rounded-md">
                  <select
                    defaultValue={"DEFAULT"}
                    className="w-full py-xs pl-sm pr-md bg-white bg-no-repeat appearance-none"
                    style={{
                      backgroundImage:
                        "url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16.0977%207.9152C16.4527%207.56017%2016.4527%206.98457%2016.0977%206.62955C15.7427%206.27453%2015.1671%206.27453%2014.8121%206.62955L10.0004%2011.4413L5.18864%206.62955C4.83361%206.27453%204.25801%206.27453%203.90299%206.62955C3.54796%206.98457%203.54796%207.56017%203.90299%207.9152L9.35753%2013.3697C9.71255%2013.7248%2010.2882%2013.7248%2010.6432%2013.3697L16.0977%207.9152Z%22%20fill%3D%22%231B202B%22%2F%3E%0A%3C%2Fsvg%3E%0A')",
                      backgroundPosition: "calc(100% - 1.5rem) center"
                    }}
                  >
                    <option value="DEFAULT" disabled>
                      Qty
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              {/* <!-- Button --> */}
              <div className="flex items-center">
                <button
                  className="hds-btn hds-btn__primary w-full"
                  type="button"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailV4;
