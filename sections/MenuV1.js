/* eslint-disable */
import React from "react";


const MenuV1 = ({id}) => {

  return (
    <section id={id}>
      <header className="hds-navbar__bg-color hds-navbar__text-color px-sm shadow-lg">
        <div className='max-w-screen-xl mx-auto'>
          <div className='flex justify-between items-center '>
            {/* <!-- Logo --> */}
            <div className='w-24'>
              <img src='/images/products/product-image.jpeg' alt="logo" />
            </div>

            {/* <!-- Nav/Search/Icons Wrapper --> */}
            <div className="flex ">
              {/* <!-- Nav & Search Wrapper (THIS SHOULD BE HIDDEN) --> */}
              <div
                id="mobile-menu-wrapper"
                className="hidden md:flex fixed md:static inset-0 md:inset-auto flex flex-col md:flex-row md:items-center py-xs md:p-0 z-10 hds-navbar__bg-color"
              >
                {/* <!-- Close Icon --> */}
                <button
                  id="close-menu"
                  className="hds-title__large md:hidden self-end mr-sm"
                >
                  ×
                </button>

                {/* <!-- Search --> */}
                <div className="relative md:order-2 flex items-center justify-between md:w-full my-sm md:my-0 mx-sm lg:ml-md rounded-md border ">
                  <input
                    type="text"
                    className="hds-legal py-xs px-sm pr-md w-full rounded-md"
                    placeholder="Type Something"
                  />
                  <img className="absolute mr-sm right-0" src="/images/svg/search.svg" alt='search'/>
                </div>

                {/* <!-- Nav --> */}
                <nav className='flex-grow md:flex-grow-0 px-sm md:px-0 w-full text-4xl md:text-sm md:order-1 '>
                  <ul className='bg-white relative md:static flex flex-col md:flex-row'>
                    <li className='mb-sm md:mb-0 md:mx-xs lg:mx-sm md:py-sm has-children'>
                      <a
                        href="#"
                        className='flex justify-between items-center md:inline'
                      >
                        <span>Mens</span>
                        <img className="md:hidden" src='/images/svg/mens-icon.svg' alt='mens'/>
                      </a>
                      <ul className="hds-navbar__dropdown-bg-color hds-navbar__dropdown-text-color md:hidden md:mt-sm absolute inset-0 md:inset-y-auto transition-all duration-500 ease-in-out transform translate-x-160 sm:translate-x-192 md:translate-x-0">
                        <li>
                          <div className="md:flex max-w-screen-xl mx-auto">
                            <ul className="hds-navbar__megamenu-bg-color hds-navbar__megamenu-text-color hidden md:block p-sm md:w-1/4 lg:w-2/12 ">
                              <li className="hds-copy mb-sm font-bold">
                                <a href="#">New Releases</a>
                              </li>
                              <li className="hds-copy mb-sm font-bold">
                                <a href="#">Best Selling</a>
                              </li>
                              <li className="hds-copy mb-sm font-bold">
                                <a href="#">Sale</a>
                              </li>
                            </ul>
                            <ul className="mb-sm md:mb-0 md:p-sm md:w-1/4 lg:w-2/12">
                              <li className="hds-copy md:hidden">
                                <a
                                  href="#"
                                  className="flex items-center mb-sm go-back"
                                >
                                  <img src='/images/svg/back.svg' alt='back'/>
                                  <span className="ml-xs">Back</span>
                                </a>
                              </li>
                              <li className="has-children">
                                <a
                                  href="#"
                                  className="flex justify-between items-center md:font-bold"
                                >
                                  <span>Clothing</span>
                                  <img className="md:hidden"  src='/images/svg/clothing.svg' alt='clothing'/>
                                </a>
                                <ul className="md:block absolute md:static inset-0 md:inset-auto md:mt-xs transition-all duration-500 ease-in-out transform translate-x-160 sm:translate-x-192 md:translate-x-0">
                                  <li className="hds-copy md:hidden">
                                    <a
                                      href="#"
                                      className="flex items-center mb-sm go-back"
                                    >
                                      <img src='/images/svg/back.svg' alt='back'/>
                                      <span className="ml-xs">Back</span>
                                    </a>
                                  </li>
                                  <li className="mb-sm md:mb-xs">
                                    <a href="#">Shirts</a>
                                  </li>
                                  <li className="mb-sm md:mb-xs">
                                    <a href="#">Pants</a>
                                  </li>
                                  <li className="mb-sm md:mb-xs">
                                    <a href="#">Hoodies &amp; Sweatshirts</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <ul className="mb-sm md:mb-0 md:p-sm md:w-1/4 lg:w-2/12">
                              <li className="has-children">
                                <a
                                  href="#"
                                  className="flex justify-between items-center md:font-bold"
                                >
                                  <span>Shoes</span>
                                    <img className="md:hidden"  src='/images/svg/shoes.svg' alt='shoes'/>
                                </a>
                                <ul className="md:block absolute md:static inset-0 md:inset-auto  md:mt-xs transition-all duration-500 ease-in-out transform translate-x-160 sm:translate-x-192 md:translate-x-0">
                                  <li className="hds-copy md:hidden">
                                    <a
                                      href="#"
                                      className="flex items-center mb-sm go-back"
                                    >
                                      <img src='/images/svg/back.svg' alt='back'/>
                                      <span className="ml-xs">Back</span>
                                    </a>
                                  </li>
                                  <li className="mb-sm md:mb-xs">
                                    <a href="#">Slides</a>
                                  </li>
                                  <li className="mb-sm md:mb-xs">
                                    <a href="#">Flip Flops</a>
                                  </li>
                                  <li className="mb-sm md:mb-xs">
                                    <a href="#">Sneakers</a>
                                  </li>
                                  <li className="mb-sm md:mb-xs">
                                    <a href="#">Slippers</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <ul className="mb-sm md:mb-0 md:p-sm md:w-1/4 lg:w-2/12">
                              <li className="has-children">
                                <a
                                  href="#"
                                  className="flex justify-between items-center md:font-bold"
                                >
                                  <span>Accessories</span>
                                  <img src='/images/svg/accessories.svg' alt='accessories'/>
                                </a>
                                <ul className="md:block absolute md:static inset-0 md:inset-auto md:mt-xs transition-all duration-500 ease-in-out transform translate-x-160 sm:translate-x-192 md:translate-x-0">
                                  <li className="hds-copy md:hidden">
                                    <a
                                      href="#"
                                      className="flex items-center mb-sm go-back"
                                    >
                                      <img src='/images/svg/back.svg' alt='back'/>
                                      <span className="ml-xs">Back</span>
                                    </a>
                                  </li>
                                  <li className="mb-sm md:mb-xs">
                                    <a href="#">Gloves</a>
                                  </li>
                                  <li className="mb-sm md:mb-xs">
                                    <a href="#">Hats &amp; Caps</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <div className="hidden lg:block p-sm w-4/12">
                              {/* <!--<div className="w-full h-88 bg-white rounded-md"></div>--> */}
                              <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden">
                                <img
                                  className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
                                  src="/images/products/product-image.jpeg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li className="md:relative mb-sm md:mb-0 md:mx-xs lg:mx-sm md:py-sm has-children">
                      <a
                        href="#"
                        className="flex justify-between items-center md:inline"
                      >
                        <span>Womans</span>
                        <img className='md:hidden' src='/images/svg/women.svg' alt='women'/>
                      </a>
                      <ul className="hds-navbar__dropdown-bg-color hds-navbar__dropdown-text-color   md:hidden md:mt-sm md:w-72 absolute inset-0 md:inset-auto  transition-all duration-500 ease-in-out transform translate-x-160 sm:translate-x-192 md:translate-x-0">
                        <li>
                          <ul className="mb-sm md:mb-0 md:p-sm">
                            <li className="hds-copy md:hidden">
                              <a
                                href="#"
                                className="flex items-center mb-sm go-back"
                              >
                                <img src='/images/svg/back.svg' alt='back'/>
                                <span className="ml-xs">Back</span>
                              </a>
                            </li>
                            <li className="mb-sm md:mb-xs">
                              <a href="#" className="">
                                <span>Pants</span>
                              </a>
                            </li>
                            <li className="mb-sm md:mb-xs">
                              <a href="#" className="">
                                <span>Sneakers</span>
                              </a>
                            </li>
                            <li className="mb-sm md:mb-0">
                              <a href="#" className="">
                                <span>Hats &amp; Caps</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li className="md:relative mb-sm md:mb-0 md:mx-xs lg:mx-sm md:py-sm has-children">
                      <a
                        href="#"
                        className="flex justify-between items-center md:inline"
                      >
                        <span>Kids</span>
                      <img className="md:hidden" src='/images/svg/kids.svg' alt='kids'/>
                      </a>
                      <ul className="hds-navbar__dropdown-bg-color hds-navbar__dropdown-text-color   md:hidden md:mt-sm md:w-72 absolute inset-0 md:inset-auto transition-all duration-500 ease-in-out transform translate-x-160 sm:translate-x-192 md:translate-x-0">
                        <li>
                          <ul className="mb-sm md:mb-0 md:p-sm">
                            <li className="hds-copy md:hidden">
                              <a
                                href="#"
                                className="flex items-center mb-sm go-back"
                              >
                                <img src='/images/svg/back.svg' alt='back'/>
                                <span className="ml-xs">Back</span>
                              </a>
                            </li>
                            <li className="mb-sm md:mb-xs">
                              <a href="#" className="">
                                <span>Shirts</span>
                              </a>
                            </li>
                            <li className="mb-sm md:mb-xs">
                              <a href="#" className="">
                                <span>Flip Flops</span>
                              </a>
                            </li>
                            <li className="mb-sm md:mb-0">
                              <a href="#" className="">
                                <span>Gloves</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li className="md:relative mb-sm md:mb-0 md:mx-xs lg:mx-sm md:py-sm has-children">
                      <a
                        href="#"
                        className="flex justify-between items-center md:inline"
                      >
                        <span>Sale</span>
                        <img className="md:hidden" src='/images/svg/sales.svg' alt='sales'/>
                      </a>
                      <ul className="hds-navbar__dropdown-bg-color hds-navbar__dropdown-text-color   md:hidden md:mt-sm md:w-72 absolute inset-0 md:inset-auto transition-all duration-500 ease-in-out transform translate-x-160 sm:translate-x-192 md:translate-x-0">
                        <li>
                          <ul className="mb-sm md:mb-0 md:p-sm">
                            <li className="hds-copy md:hidden">
                              <a
                                href="#"
                                className="flex items-center mb-sm go-back"
                              >
                                <img className="md:hidden" src='/images/svg/back.svg' alt='back'/>
                                <span className="ml-xs">Back</span>
                              </a>
                            </li>
                            <li className="mb-sm md:mb-xs">
                              <a href="#" className="">
                                <span>Hoodies &amp; Sweatshirts</span>
                              </a>
                            </li>
                            <li className="mb-sm md:mb-0">
                              <a href="#" className="">
                                <span>Slippers</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li className="mb-sm md:mb-0 md:mx-xs lg:mx-sm md:py-sm md:hidden">
                      <a
                        href="#"
                        className="flex justify-between items-center md:inline"
                      >
                        <span>Account</span>
                      </a>
                    </li>
                  </ul>
                </nav>

                {/* <!-- Mobile Nav Social Icons --> */}
                <div className="md:hidden border-t pt-sm px-sm">
                  <p className="hds-legal mb-xs">Follow us</p>
                  <div className="flex">
                    <a href="#">
                      <img src="/images/svg/instagram.svg" alt='instagram'/>
                    </a>
                    <a href="#">
                      <img src="/images/svg/facebook.svg" alt='facebook'/>
                    </a>
                    <a href="#">
                     <img src="/images/svg/google.svg" alt='google'/>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Icons --> */}
              <div className="flex items-center">
                {/* <!-- Mobile Nav Icon --> */}
                <button id="open-menu" className="py-sm mr-xs md:hidden">
                  <img src='/images/svg/hamburger.svg' alt='menu'/>
                </button>

                {/* <!-- Account Icon --> */}
                <a className='hidden md:block' href="#">
                  <img className='mr-xs' src="/images/svg/account.svg" alt='account'/>
                </a>

                {/* <!-- Cart Icon --> */}
                <a  id="cart-trigger" className="relative">
                  {/* Cart Amount */}
                  <span
                    className="hds-legal absolute w-6 p-1 font-bold text-center rounded-full bg-secondary text-white"
                    style={{ top: "-8px", right: "-8px" }}
                  >
                    3
                  </span>
                  <img src='/images/svg/cart.svg' alt='cart'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Cart Slide Out --> */}
      <div
        id="cart-container"
        className="hds-text-color hidden fixed z-20 inset-0 bg-black bg-opacity-0 transition duration-500 ease-in-out"
      >
        <div className="flex justify-end ">
          {/* <!-- Cart Wrapper --> */}
          <div
            id="cart-wrapper"
            className="flex flex-col w-80 h-screen bg-white transition duration-500 ease-in-out transform translate-x-80"
          >
            {/* <!-- Cart Header --> */}
            <div className="hds-cart__top-bg-color hds-cart__top-text-color flex justify-between items-center p-sm">
              <span className="hds-copy">Shopping Cart</span>
              <span className="hds-title__medium">
                <a id="close-cart" href="#">
                  ×
                </a>
              </span>
            </div>
            {/* <!-- Cart Body --> */}
            <div className="flex-grow p-sm overflow-auto">
              {/* <!-- Item Row --> */}
              <div className="flex items-center py-sm">
                <div className="w-full">
                  <div className="flex">
                    <div className="w-24 h-24 mr-sm">
                      <div className="relative h-full bg-primary rounded-md overflow-hidden">
                        <img
                          className="top-0 w-full h-full min-h-1/2 object-cover absolute z-0"
                          src="https://cdni.llbean.net/is/image/wim/224547_1_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="hds-copy mb-xs font-bold">Retro car</p>
                      <div>
                        <p className="hds-legal mb-xs">Quantity: 2</p>
                        <p className="hds-legal font-bold">$25</p>
                      </div>
                    </div>
                    <button className="hds-title__small">×</button>
                  </div>
                </div>
              </div>

              {/* <!-- Item Row --> */}
              <div className="flex items-center py-sm">
                <div className="w-full">
                  <div className="flex">
                    <div className="w-24 h-24 mr-sm">
                      <div className="relative h-full bg-primary rounded-md overflow-hidden">
                        <img
                          className="top-0 w-full h-full min-h-1/2 object-cover absolute z-0"
                          src="https://cdni.llbean.net/is/image/wim/224547_1_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="hds-copy mb-xs font-bold">Retro car</p>
                      <div>
                        <p className="hds-legal mb-xs">Quantity: 2</p>
                        <p className="hds-legal font-bold">$25</p>
                      </div>
                    </div>
                    <button className="hds-title__small">×</button>
                  </div>
                </div>
              </div>

              {/* <!-- Item Row --> */}
              <div className="flex items-center py-sm">
                <div className="w-full">
                  <div className="flex">
                    <div className="w-24 h-24 mr-sm">
                      <div className="relative h-full bg-primary rounded-md overflow-hidden">
                        <img
                          className="top-0 w-full h-full min-h-1/2 object-cover absolute z-0"
                          src="https://cdni.llbean.net/is/image/wim/224547_1_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="hds-copy mb-xs font-bold">Retro car</p>
                      <div>
                        <p className="hds-legal mb-xs">Quantity: 2</p>
                        <p className="hds-legal font-bold">$25</p>
                      </div>
                    </div>
                    <button className="hds-title__small">×</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Cart Footer --> */}
            <div className="p-sm">
              <div className="hds-copy flex justify-between flex-wrap mb-sm">
                <span>Total price: </span>
                <span className="font-bold">$12,492</span>
              </div>
              <button
                className="hds-btn hds-btn__primary hds-cart__btn-bg-color hds-cart__btn-text-color w-full"
                type="button"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default MenuV1;
