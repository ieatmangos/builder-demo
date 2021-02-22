import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: {data:{inner:''}},
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Product hds-container hds-text-color  bg-white"
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
        label: "Layout",
        value: " grid grid-cols-1 lg:grid-cols-2 gap-md md:gap-sm "
      }
    }
  },
  cards: {
    data: {
      container: {
        label: "Cards Container",
        value: "grid grid-cols-1 sm:grid-cols-2 gap-sm"
      },
      image_container: {
        label: "Image Container",
        value: "rounded-md overflow-hidden"
      },
      image: {
        label: "Image Style",
        value: "object-cover"
      },
      text_container: {
        label: "Text Container",
        value: "grid grid-rows-4 gap-xs"
      },
      text_container_top: {
        label: "Top Text Container",
        value: ""
      },
      large_text: {
        label: "Large Text Style",
        value: "flex-1 hds-title__medium hds-title-color font-bold"
      },
      text_container_bottom: {
        label: "Bottom Text Container",
        value: "row-span-3 flex flex-col gap-xs "
      },
      price: {
        label: "Price Style",
        value: "hds-copy font-bold"
      },
      small_text: {
        label: "Small Text Style",
        value: "flex-1 hds-copy"
      }
    }
  },
  card_1: {
    data: {
      image: {
        label: "Image",
        value: "/images/products/product-image-2.jpeg",
        image: true
      },
      large_text: {
        label: "Large Text",
        value: "Instrinct Boost"
      },
      price: {
        label: "Price",
        value: "$25"
      },
      small_text: {
        label: "Small Text",
        value:
          "High fidelity wireframes include more real content, specific typography choices, and information on image."
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary mt-auto"
      },
      button: {
        label: "Button",
        value: "button"
      }
    }
  },
  card_2: {
    data: {
      image: {
        label: "Image",
        value: "/images/products/product-image-2.jpeg",
        image: true
      },
      large_text: {
        label: "Large Text",
        value: "Instrinct Boost"
      },
      price: {
        label: "Price",
        value: "$25"
      },
      small_text: {
        label: "Small Text",
        value:
          "High fidelity wireframes include more real content, specific typography choices, and information on image."
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary mt-auto"
      },
      button: {
        label: "Button",
        value: "button"
      }
    }
  }
};
const ProductCardGridV3 = ({ id }) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>


          <div className={_.cards.data.container.value}>
            {/* <!-- Product Image --> */}
          
            <div className={_.cards.data.image_container.value}>
              <img
                className={_.cards.data.image.value}
                src={_.card_1.data.image.value}
                alt=""
              />
            </div>  
          
            <div className={_.cards.data.text_container.value}>
              <div className={_.cards.data.text_container_top.value}>
              {/* <!-- Title --> */}
                <h4 className={_.cards.data.large_text.value}>
                  {_.card_1.data.large_text.value}
                </h4>
              </div>
             
              <div className={_.cards.data.text_container_bottom.value}>
                {/* <!-- Price --> */}
                <p className={_.cards.data.price.value}>
                  {_.card_1.data.price.value}
                </p>
                {/* <!-- Description --> */}
                <p className={_.cards.data.small_text.value}>
                  {_.card_1.data.small_text.value}
                </p>
                {/* <!-- ATC --> */}
            
                  <button
                    className={_.card_1.data.button_style.value}
                    type="button"
                  >
                    {_.card_1.data.button.value}
                  </button>
             
              </div>
            </div>
          </div>



          <div className={_.cards.data.container.value}>
            {/* <!-- Product Image --> */}
            <div className={_.cards.data.image_container.value}>
              <img
                className={_.cards.data.image.value}
                src={_.card_2.data.image.value}
                alt=""
              />
            </div>

            <div className={_.cards.data.text_container.value}>
            <div className={_.cards.data.text_container_top.value}>

              {/* <!-- Title --> */}
                <h4 className={_.cards.data.large_text.value}>
                  {_.card_2.data.large_text.value}
                </h4>
            </div>
              <div className={_.cards.data.text_container_bottom.value}>
              {/* <!-- Price --> */}
                <p className={_.cards.data.price.value}>
                  {_.card_2.data.price.value}
                </p>
                {/* <!-- Description --> */}
                <p className={_.cards.data.small_text.value}>
                  {_.card_2.data.small_text.value}
                </p>
                {/* <!-- ATC --> */}
                <div>
                  <button
                    className={_.card_2.data.button_style.value}
                    type="button"
                  >
                    {_.card_2.data.button.value}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCardGridV3;
