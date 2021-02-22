import React from "react";
// import { useEdit, useMyData } from "../edit";

// const defaults = {
//   focus_element: {data:{inner:''}},
//   section_styles: {
//     data: {
//       container: {
//         label: "Container Styles",
//         value: "Footer hds-container bg-white hds-text-color "
//       },
//       section: {
//         label: "Section Styles",
//         value:"hds-section"
//       }
//     }
//   },
//   layout: {
//     data: {
//       container: {
//         label: "Container",
//         value:
//           "flex justify-between"
//       }
//     }
//   },
//   lists: {
//     data: {
//       container: {
//         label: "Container",
//         value:
//           "grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
//       },
//       li: {
//         label: "List Item Style",
//         value: ""
//       },
//       label: {
//         label: "Label Style",
//         value: "hds-title-color font-bold"
//       }
//     }
//   },
//   list_1: {
//     data: {
//       ul: {
//         label: "List Style",
//         value: ""
//       },
//       label: {
//         label: "Label",
//         value: "Catalog"
//       },
//       link_1: {
//         label: "Link 1",
//         value: "Catalog"
//       },
//       link_2: {
//         label: "Link 2",
//         value: "Popular"
//       },
//       link_3: {
//         label: "Link 3",
//         value: "Trending"
//       },
//       link_4: {
//         label: "Link 4",
//         value: "Features"
//       }
//     }
//   },
//   list_2: {
//     data: {
//       ul: {
//         label: "List Style",
//         value: ""
//       },
//       label: {
//         label: "Label",
//         value: "Catalog"
//       },
//       link_1: {
//         label: "Link 1",
//         value: "Catalog"
//       },
//       link_2: {
//         label: "Link 2",
//         value: "Popular"
//       },
//       link_3: {
//         label: "Link 3",
//         value: "Trending"
//       },
//       link_4: {
//         label: "Link 4",
//         value: "Features"
//       }
//     }
//   },
//   list_3: {
//     data: {
//       ul: {
//         label: "List Style",
//         value: ""
//       },
//       label: {
//         label: "Label",
//         value: "Catalog"
//       },
//       link_1: {
//         label: "Link 1",
//         value: "Catalog"
//       },
//       link_2: {
//         label: "Link 2",
//         value: "Popular"
//       },
//       link_3: {
//         label: "Link 3",
//         value: "Trending"
//       },
//       link_4: {
//         label: "Link 4",
//         value: "Features"
//       }
//     }
//   },
//   list_4: {
//     data: {
//       ul: {
//         label: "List Style",
//         value: ""
//       },
//       label: {
//         label: "Label",
//         value: "Catalog"
//       },
//       link_1: {
//         label: "Link 1",
//         value: "Catalog"
//       },
//       link_2: {
//         label: "Link 2",
//         value: "Popular"
//       },
//       link_3: {
//         label: "Link 3",
//         value: "Trending"
//       },
//       link_4: {
//         label: "Link 4",
//         value: "Features"
//       }
//     }
//   },
//   socials :{
//     data :{
//       container:{
//         label: 'Container',
//         value: 'block'
//       },
//       p: {
//         label: 'Text Style',
//         value: "mb-sm font-bold hds-copy"
//       },
//       text: {
//         label: 'Text',
//         value: 'Follow Us'
//       },
//       image_container:{
//         label: 'Image Container',
//         value: 'flex gap-2'
//       },
//       image_1: {
//         label: 'Image 1',
//         value: '/images/svg/twitter.svg',
//         image: true
//       },
//       image_2: {
//         label: 'Image 2',
//         value: '/images/svg/facebook.svg',
//         image: true
//       },
//       image_3: {
//         label: 'Image 3',
//         value: '/images/svg/google.svg',
//         image: true
//       },
//       image_4: {
//         label: 'Image 4',
//         value: '/images/svg/instagram.svg',
//         image: true
//       },
//     }
//   },
//   copyright:{
//     data: {
//       style: {
//         label: 'Container',
//         value:"hds-legal hidden md:block text-center mt-md"
//       },
//       text: {
//         label: 'Text',
//         value: '2020. All rights reserved'
//       }
//     }
//   },
//   privacy:{
//     data: {
//       style: {
//         label: 'Container',
//         value: "hds-copy md:hidden p-sm md:p-0 border-t md:border-0"
//       },
//       text: {
//         label: 'Text',
//         value: '2020. All rights reserved'
//       },
//       link_1:{
//         label: 'Link 1',
//         value: 'Privacy Policy',
//       },
//       link_2:{
//         label: 'Link 2',
//         value: 'Terms and Conditions',
//       },

//     }
//   }
// };
const FooterV2 = ({id}) => {
  // const {_} = useEdit(defaults, id);
  // useMyData(id, defaults);
  return (
    <section className="">
    <div className="hds-section-layout hds-section__h-spacing hds-text-color hds-copy">
      <footer className="pt-md pb-0 md:pb-md w-full">
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between flex-wrap mb-md lg:mb-lg">
            <div className="mb-md xl:mb-0 xl:w-5/12 xl:order-2 ">
              <p className="hds-title-color mb-sm font-bold">Become a Thermacell Insider</p>
              <div className="flex flex-col sm:flex-row">
                <input
                  className="hds-form-input"
                  placeholder="Email"
                />
                <button className="hds-btn hds-btn__primary" type="button">
                  Send
                </button>
              </div>
            </div>

            <div className="flex sm:justify-between xl:justify-start flex-wrap xl:w-7/12 xl:order-1 ">
              <ul className="pr-md lg:pr-lg mb-md sm:mb-0 w-1/2 sm:w-auto">
                <li className="hds-title-color mb-xs md:mb-sm font-bold">Customer Service</li>
                <li className="mb-xs">
                  <a href="/builder">Account</a>
                </li>
                <li className="mb-xs">
                  <a href="/builder">Shipping and Returns</a>
                </li>
                <li className="mb-xs">
                  <a href="/builder">Product Directions</a>
                </li>
                <li className="mb-xs">
                  <a href="/builder">Contact Us</a>
                </li>
              </ul>

              <ul className="pr-md lg:pr-lg mb-md sm:mb-0 w-1/2 sm:w-auto">
                <li className="hds-title-color mb-xs md:mb-sm font-bold">Where To Buy</li>
                <li className="mb-xs">
                  <a href="/builder">International</a>
                </li>
                <li className="mb-xs">
                  <a href="/builder">Dealer Locations</a>
                </li>
              </ul>

              <ul className="md:mr-sm w-1/2 sm:w-auto">
                <li className="hds-title-color mb-xs md:mb-sm font-bold">Media</li>
                <li className="mb-xs">
                  <a href="/builder">New Products</a>
                </li>
                <li className="mb-xs">
                  <a href="/builder">Catalogs</a>
                </li>
                <li className="mb-xs">
                  <a href="/builder">Press Release</a>
                </li>
                <li className="mb-xs">
                  <a href="/builder">Affiliate Program</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hds-legal mb-sm md:mb-0 flex justify-between items-center">
            <p className="hidden md:block">&copy; 2020. All rights reserved</p>
            <div className="flex">
                <a className='pr-2' href="/">
                  <img src="/images/svg/twitter.svg" alt='twitter'/>
                </a>
                <a className='pr-2' href="/">
                  <img src="/images/svg/facebook.svg" alt='facebook'/>
                </a>
                <a className='pr-2' href="/">
                  <img src="/images/svg/google.svg" alt='google'/>
                </a>
                <a className='pr-2' href="/">
                  <img src="/images/svg/instagram.svg" alt='instagram'/>
                </a>
            </div>
          </div>
        </div>

        <div className="hds-copy md:hidden p-sm md:p-0 border-t md:border-0">
          <p className="mb-xs">
            <a href="/builder">Privacy Policy</a>
          </p>
          <p>
            <a href="/builder">Terms & Conditions</a>
          </p>
        </div>
      </footer>
      </div>
    </section>
  );
};

export default FooterV2;
