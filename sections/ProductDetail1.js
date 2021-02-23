import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "ProductDetail hds-container bg-white hds-text-color"
      },
      section: {
        label: "Section Styles",
        value: "hds-section"
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: "Layout Grid",
        value: "grid grid-cols-1 md:grid-cols-10 md:gap-12 "
      },
      images_container: {
        label: "Images Container Side",
        value: "col-span-6 mb-sm md:mb-0"
      },
      text_container: {
        label: "Text Container",
        value: "col-span-4"
      }
    }
  },
  images: {
    data: {
      shared_container: {
        label: "Shared Container",
        value: "relative rounded-md overflow-hidden h-88"
      },
      shared_styles: {
        label: "Shared Image Styles",
        value:
          "object-cover object-top w-full h-full transition ease-out duration-300 transform scale-100 hover:scale-105"
      }
    }
  },
  main_image: {
    data: {
      toggle_show: {
        label: "Toggle Show",
        value: true,
        toggle: true
      },
      container_style: {
        label: "Container",
        value: "mb-xs md:mb-sm"
      },
      image_slider_container:{
        label: 'Image and Buttons Container',
        value: 'relative'
      },
      image_style: {
        label: "Image Style",
        value: ""
      },
      src: {
        label: "Image",
        value: "/images/demo/dark.png",
        image: true
      }
    }
  },
  slider_buttons: {
    data: {
      toggle_show: {
        label: "Toggle Show",
        value: true,
        toggle: true
      },
      left: {
        label: "Left Button",
        value: "absolute hidden md:block inset-y-0  z-10 ml-xs left-0"
      },
      left_image: {
        label: "Left Image",
        value: "/images/svg/carrotLeft-circle.svg",
        image: true
      },
      right: {
        label: "Right Button",
        value: "absolute hidden md:block  inset-y-0 z-10 mr-xs right-0"
      },
      right_image: {
        label: "Right Image",
        value: "/images/svg/carrotRight-circle.svg",
        image: true
      }
    }
  },
  thumbnail_images: {
    data: {
      toggle_show: {
        label: "Toggle Show",
        value: true,
        toggle: true
      },
      container: {
        label: "Container",
        value: "flex gap-sm"
      },
      image_container_style: {
        label: "Image Container Style",
        value: "w-20 md:w-24 h-20 md:h-24"
      },
      image_style: {
        label: "Image Style",
        value: ""
      },
      thumbnail_1: {
        label: "Image 1",
        value: "/images/demo/dark.png",
        image: true
      },
      thumbnail_2: {
        label: "Image 2",
        value: "/images/demo/dark.png",
        image: true
      },
      thumbnail_3: {
        label: "Image 3",
        value: "/images/demo/dark.png",
        image: true
      },
      thumbnail_4: {
        label: "Image 4",
        value: "/images/demo/dark.png",
        image: true
      }
    }
  },

  text: {
    data: {
      title_style: {
        label: "Title Style",
        value: "hds-title__large font-black mb-sm"
      },
      title: {
        label: "Title",
        value: "Symbolic content Symbolic",
        rte: true
      },
      price_style: {
        label: "Price Style",
        value: "mb-xs md:mb-sm text-4xl font-black"
      },
      price: {
        label: "Price",
        value: "$423",
        rte: true
      },
      body_style: {
        label: "Body Style",
        value: "hds-copy mb-sm "
      },
      body: {
        label: "Body",
        value:
          "High fidelity wireframes include more real content, specific typography choices, and information on image dimensions.",
        rte: true
      }
    }
  },
  socials: {
    data: {
      toggle_show: {
        label: "Toggle Show",
        value: true,
        toggle: true
      },
      container: {
        label: "Container",
        value: ""
      },
      layout: {
        label: "Layout",
        value: "flex"
      },
      label: {
        label: "Label",
        value: "Share This"
      },
      label_style: {
        label: "Label Style",
        value: "hds-copy mb-2"
      },
      icon_style: {
        label: "Icon Style",
        value: "pr-2"
      },
      icon_1_path: {
        label: "Icon 1",
        value: "/images/svg/instagram.svg",
        image: true
      },
      icon_2_path: {
        label: "Icon 2",
        value: "/images/svg/facebook.svg",
        image: true
      },
      icon_3_path: {
        label: "Icon 3",
        value: "/images/svg/twitter.svg",
        image: true
      },
      icon_4_path: {
        label: "Icon 4",
        value: "/images/svg/google.svg",
        image: true
      }
    }
  },
  reviews: {
    data: {
      toggle_show: {
        label: "Toggle Show",
        value: true,
        toggle: true
      },
      container: {
        label: "Reviews Container",
        value: "flex mb-xs mr-xs"
      },
      label_style: {
        label: "Label Style",
        value: "hds-legal"
      },
      label: {
        label: "Label",
        value: "12 Reviews"
      },
      review_star_closed: {
        label: "Review Star Closed",
        value: "/images/svg/reviewStar-fill.svg",
        image: true
      },
      review_star_open: {
        label: "Review Star Open",
        value: "/images/svg/reviewStar-empty.svg",
        image: true
      }
    }
  },

  sizes: {
    data: {
      toggle_show: {
        label: "Toggle Show",
        value: true,
        toggle: true
      },
      container: {
        label: "Container",
        value: "mb-xs"
      },
      label_style: {
        label: "Label Style",
        value: "hds-copy mb-xs"
      },
      label: {
        label: "Label",
        value: "Size"
      },
      layout: {
        label: "Size Layout",
        value: "flex"
      },
      shared_button_styles: {
        label: "Shared Button Styles",
        value:
          "flex justify-center items-center mr-xs w-12 h-12 border rounded-md hds-legal font-bold"
      },
      option_1: {
        label: "Option 1",
        value: "28"
      },
      option_2: {
        label: "Option 2",
        value: "30"
      },
      option_3: {
        label: "Option 3",
        value: "32"
      },
      option_4: {
        label: "Option 4",
        value: "34"
      },
      option_5: {
        label: "Option 5",
        value: "36"
      }
    }
  },
  colors: {
    data: {
      toggle_show: {
        label: "Toggle Show",
        value: true,
        toggle: true
      },
      container: {
        label: "Container",
        value: "mb-xs"
      },
      label_style: {
        label: "Label Style",
        value: "hds-copy mb-xs"
      },
      label: {
        label: "Label",
        value: "Colors"
      },
      layout: {
        label: "Size Layout",
        value: "flex"
      },
      shared_button_styles: {
        label: "Shared Button Styles",
        value:
          "relative flex justify-center items-center mr-xs w-12 h-12 rounded-md"
      },
      option_1: {
        label: "Option 1",
        value: "bg-gray-200"
      },
      option_2: {
        label: "Option 2",
        value: "bg-gray-300"
      },
      option_3: {
        label: "Option 3",
        value: "bg-gray-400"
      },
      option_4: {
        label: "Option 4",
        value: "bg-gray-500"
      },
      option_5: {
        label: "Option 5",
        value: "bg-gray-600"
      }
    }
  },
  selects: {
    data: {
      toggle_show: {
        label: "Toggle Show",
        value: true,
        toggle: true
      },
      container_style: {
        label: "Container Style",
        value: "flex gap-sm justify-between mb-sm"
      },
      select_style: {
        label: "Shared Select Style",
        value: "w-full py-xs pl-sm pr-md bg-white bg-no-repeat appearance-none"
      },
      select_1_container_style: {
        label: "Select 1 Container",
        value: "flex-1 border rounded-md overflow-hidden"
      },
      select_1: {
        label: "Select 1",
        value: "Select Size"
      },
      select_1_bg_image_style: {
        label: "Select 1 Background Position * Not Tailwind *",
        value: "calc(100% - .5rem) center"
      },
      select_1_bg_image: {
        label: "Select 1 Background Image",
        value: "/images/svg/carrotDown.svg",
        image: true
      },
      select_2_container_style: {
        label: "Select 2 Container",
        value: "border rounded-md overflow-hidden"
      },
      select_2: {
        label: "Select 2",
        value: "Qty"
      },
      select_2_bg_image_style: {
        label: "Select 2 Background Position * Not Tailwind *",
        value: "calc(100% - .5rem) center"
      },
      select_2_bg_image: {
        label: "Select 2 Background Image",
        value: "/images/svg/carrotDown.svg",
        image: true
      }
    }
  },
  button_group: {
    data: {
      container: {
        label: "Container",
        value: "flex mb-sm"
      },
      qty_toggle_show: {
        label: "Qty Toggle Show",
        value: true,
        toggle: true
      },
      qty_container: {
        label: "Qty Container",
        value: "flex mr-xs border rounded-md"
      },
      qty_input_style: {
        label: "Qty Input Style",
        value: "w-12 rounded-md text-lg text-center"
      },
      qty_input: {
        label: "Qty Input",
        value: "1"
      },
      carrot_container: {
        label: "Carrot Container",
        value: "flex flex-col justify-evenly w-12 border-l"
      },
      carrot_up_style: {
        label: "Carrot Up Style",
        value: "border-b  w-full flex justify-center"
      },
      carrot_up: {
        label: "Carrot Up",
        value: "/images/svg/carrotUp.svg",
        image: true
      },
      carrot_down_style: {
        label: "Carrot Down Style",
        value: " w-full flex justify-center"
      },
      carrot_down: {
        label: "Carrot Up",
        value: "/images/svg/carrotDown.svg",
        image: true
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary w-full"
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      }
    }
  }
};
/* eslint-disable */

const ProductDetail1 = ({ id }) => {
  const { _, check } = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          <div className={_.layout.data.images_container.value}>
            {/* Main Image and Slider */}
            {check(_.main_image.data.toggle_show.value) && (
              <div className={_.main_image.data.image_slider_container.value}>
                {/* Main Image */}
                <div
                  className={
                    _.images.data.shared_container.value +
                    " " +
                    _.main_image.data.container_style.value
                  }
                >
                  <img
                    className={
                      _.images.data.shared_styles.value +
                      " " +
                      _.main_image.data.image_style.value
                    }
                    src={_.main_image.data.src.value}
                    alt=""
                  />
                </div>
               {check(_.slider_buttons.data.toggle_show.value)&& <>
                {check(_.slider_buttons.data.left_image.value) && (
                  <button className={_.slider_buttons.data.left.value}>
                    <img
                      src={_.slider_buttons.data.left_image.value}
                      alt="left"
                    />
                  </button>
                )}
                {check(_.slider_buttons.data.right_image.value) && (
                  <button className={_.slider_buttons.data.right.value}>
                    <img
                      src={_.slider_buttons.data.right_image.value}
                      alt="right"
                    />
                  </button>
                )}
                </>}
              </div>
            )}

            {/* Thumbnail Images */}
            {check(_.thumbnail_images.data.toggle_show.value) && (
              <div className={_.thumbnail_images.data.container.value}>
                {/* Thumbnail 1 */}
                {check(_.thumbnail_images.data.thumbnail_1.value) && (
                  <div
                    className={
                      _.images.data.shared_container.value +
                      " " +
                      _.thumbnail_images.data.image_container_style.value
                    }
                  >
                    <img
                      className={
                        _.images.data.shared_styles.value +
                        " " +
                        _.thumbnail_images.data.image_style.value
                      }
                      src={_.thumbnail_images.data.thumbnail_1.value}
                      alt=""
                    />
                  </div>
                )}

                {/* Thumbnail 2 */}
                {check(_.thumbnail_images.data.thumbnail_2.value) && (
                  <div
                    className={
                      _.images.data.shared_container.value +
                      " " +
                      _.thumbnail_images.data.image_container_style.value
                    }
                  >
                    <img
                      className={
                        _.images.data.shared_styles.value +
                        " " +
                        _.thumbnail_images.data.image_style.value
                      }
                      src={_.thumbnail_images.data.thumbnail_2.value}
                      alt=""
                    />
                  </div>
                )}

                {/* Thumbnail 3 */}
                {check(_.thumbnail_images.data.thumbnail_3.value) && (
                  <div
                    className={
                      _.images.data.shared_container.value +
                      " " +
                      _.thumbnail_images.data.image_container_style.value
                    }
                  >
                    <img
                      className={
                        _.images.data.shared_styles.value +
                        " " +
                        _.thumbnail_images.data.image_style.value
                      }
                      src={_.thumbnail_images.data.thumbnail_3.value}
                      alt=""
                    />
                  </div>
                )}

                {/* Thumbnail 4 */}
                {check(_.thumbnail_images.data.thumbnail_4.value) && (
                  <div
                    className={
                      _.images.data.shared_container.value +
                      " " +
                      _.thumbnail_images.data.image_container_style.value
                    }
                  >
                    <img
                      className={
                        _.images.data.shared_styles.value +
                        " " +
                        _.thumbnail_images.data.image_style.value
                      }
                      src={_.thumbnail_images.data.thumbnail_4.value}
                      alt=""
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Text Container */}
          <div className={_.layout.data.text_container.value}>
            {/* Title */}
            {check(_.text.data.title.value) && (
              <h4
                dangerouslySetInnerHTML={{ __html: _.text.data.title.value }}
                className={_.text.data.title_style.value}
              ></h4>
            )}

            {/* Reviews */}
            {check(_.reviews.data.toggle_show.value) && (
              <div className={_.reviews.data.container.value}>
                <img src={_.reviews.data.review_star_closed.value} alt="star" />
                <img src={_.reviews.data.review_star_closed.value} alt="star" />
                <img src={_.reviews.data.review_star_closed.value} alt="star" />
                <img src={_.reviews.data.review_star_closed.value} alt="star" />
                <img src={_.reviews.data.review_star_open.value} alt="star" />
                <p className={_.reviews.data.label_style.value}>
                  {_.reviews.data.label.value}
                </p>
              </div>
            )}

            {/* Price */}
            {check(_.text.data.price.value) && (
              <p
                dangerouslySetInnerHTML={{ __html: _.text.data.price.value }}
                className={_.text.data.price_style.value}
              ></p>
            )}

            {/* Body */}
            {check(_.text.data.body.value) && (
              <p
                dangerouslySetInnerHTML={{ __html: _.text.data.body.value }}
                className={_.text.data.body_style.value}
              ></p>
            )}

            {/* Sizes */}
            {check(_.sizes.data.toggle_show.value) && (
              <div className={_.sizes.data.container.value}>
                {check(_.sizes.data.label.value) && (
                  <p className={_.sizes.data.label_style.value}>
                    {_.sizes.data.label.value}
                  </p>
                )}
                <div className={_.sizes.data.layout.value}>
                  {check(_.sizes.data.option_1.value) && (
                    <button className={_.sizes.data.shared_button_styles.value}>
                      <span>{_.sizes.data.option_1.value}</span>
                    </button>
                  )}
                  {check(_.sizes.data.option_2.value) && (
                    <button className={_.sizes.data.shared_button_styles.value}>
                      <span>{_.sizes.data.option_2.value}</span>
                    </button>
                  )}
                  {check(_.sizes.data.option_3.value) && (
                    <button className={_.sizes.data.shared_button_styles.value}>
                      <span>{_.sizes.data.option_3.value}</span>
                    </button>
                  )}
                  {check(_.sizes.data.option_4.value) && (
                    <button className={_.sizes.data.shared_button_styles.value}>
                      <span>{_.sizes.data.option_4.value}</span>
                    </button>
                  )}
                  {check(_.sizes.data.option_5.value) && (
                    <button className={_.sizes.data.shared_button_styles.value}>
                      <span>{_.sizes.data.option_5.value}</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Colors */}
            {check(_.colors.data.toggle_show.value) && (
              <div className={_.colors.data.container.value}>
                <p className={_.colors.data.label_style.value}>
                  {_.colors.data.label.value}
                </p>
                <div className={_.colors.data.layout.value}>
                  {check(_.colors.data.option_1.value) && (
                    <button
                      className={
                        _.colors.data.shared_button_styles.value +
                        " " +
                        _.colors.data.option_1.value
                      }
                    ></button>
                  )}
                  {check(_.colors.data.option_2.value) && (
                    <button
                      className={
                        _.colors.data.shared_button_styles.value +
                        " " +
                        _.colors.data.option_2.value
                      }
                    ></button>
                  )}
                  {check(_.colors.data.option_3.value) && (
                    <button
                      className={
                        _.colors.data.shared_button_styles.value +
                        " " +
                        _.colors.data.option_3.value
                      }
                    ></button>
                  )}
                  {check(_.colors.data.option_4.value) && (
                    <button
                      className={
                        _.colors.data.shared_button_styles.value +
                        " " +
                        _.colors.data.option_4.value
                      }
                    ></button>
                  )}
                  {check(_.colors.data.option_5.value) && (
                    <button
                      className={
                        _.colors.data.shared_button_styles.value +
                        " " +
                        _.colors.data.option_5.value
                      }
                    ></button>
                  )}
                </div>
              </div>
            )}

            {/* Selects */}
            {check(_.selects.data.toggle_show.value) && (
              <div className={_.selects.data.container_style.value}>
                {check(_.selects.data.select_2.value) && (
                  <div
                    className={_.selects.data.select_1_container_style.value}
                  >
                    <select
                      defaultValue={"DEFAULT"}
                      className={_.selects.data.select_style.value}
                      style={{
                        backgroundImage: `url(${_.selects.data.select_1_bg_image.value})`,
                        backgroundPosition: `${_.selects.data.select_1_bg_image_style.value}`
                      }}
                    >
                      <option value="DEFAULT" disabled>
                        {_.selects.data.select_1.value}
                      </option>
                    </select>
                  </div>
                )}

                {check(_.selects.data.select_2.value) && (
                  <div
                    className={_.selects.data.select_2_container_style.value}
                  >
                    <select
                      defaultValue={"DEFAULT"}
                      className={_.selects.data.select_style.value}
                      style={{
                        backgroundImage: `url(${_.selects.data.select_2_bg_image.value})`,
                        backgroundPosition: `${_.selects.data.select_2_bg_image_style.value}`
                      }}
                    >
                      <option value="DEFAULT" disabled>
                        {_.selects.data.select_2.value}
                      </option>
                    </select>
                  </div>
                )}
              </div>
            )}

            {/* Button Group */}
            <div className={_.button_group.data.container.value}>
              {/* QTY Selector */}
              {check(_.button_group.data.qty_toggle_show.value) && (
                <div className={_.button_group.data.qty_container.value}>
                  <input
                    onChange={()=>null}
                    className={_.button_group.data.qty_input_style.value}
                    value={_.button_group.data.qty_input.value}
                  />
                  <div className={_.button_group.data.carrot_container.value}>
                    <div className={_.button_group.data.carrot_up_style.value}>
                      <img src={_.button_group.data.carrot_up.value} alt="up" />
                    </div>
                    <div className={_.button_group.data.carrot_down_style.value}>
                      <img
                        src={_.button_group.data.carrot_down.value}
                        alt="down"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Add To Cart */}
              <button
                className={_.button_group.data.button_style.value}
                type="button"
              >
                {_.button_group.data.button.value}
              </button>
            </div>

            {/* Socials */}
            {check(_.socials.data.toggle_show.value) && (
              <div className={_.socials.data.container.value}>
                {check(_.socials.data.label.value) && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: _.socials.data.label.value
                    }}
                    className={_.socials.data.label_style.value}
                  ></p>
                )}
                <div className={_.socials.data.layout.value}>
                  <a className={_.socials.data.icon_style.value} href="/">
                    <img src={_.socials.data.icon_1_path.value} alt="" />
                  </a>
                  <a className={_.socials.data.icon_style.value} href="/">
                    <img src={_.socials.data.icon_2_path.value} alt="" />
                  </a>
                  <a className={_.socials.data.icon_style.value} href="/">
                    <img src={_.socials.data.icon_3_path.value} alt="" />
                  </a>
                  <a className={_.socials.data.icon_style.value} href="/">
                    <img src={_.socials.data.icon_4_path.value} alt="" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail1;
