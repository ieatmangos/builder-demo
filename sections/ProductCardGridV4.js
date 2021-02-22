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
  title: {
    data: {
      large_text_style: {
        label: "Title Style",
        value: "hds-title-color mb-md font-bold"
      },
      large_text: {
        label: "Title",
        value: "Our Popular Products"
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: "Layout",
        value: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm"
      }
    }
  },
  cards: {
    data: {
      container: {
        label: "Cards Container",
        value: "grid grid-cols-2 gap-xs"
      },
      image_container: {
        label: "Image Container",
        value: "rounded-md overflow-hidden"
      },
      image: {
        label: "Image Style",
        value: "object-cover min-h-full"
      },
      text_container: {
        label: "Text Container",
        value: "flex flex-col"
      },
      text: {
        label: "Text Style",
        value: "hds-title-color mb-xs flex-1"
      },
      price: {
        label: "Price Style",
        value: "font-bold"
      }
    }
  },
  card_1: {
    data: {
      image: {
        label: "Image",
        value: "/images/products/product-image.jpeg",
        image: true
      },
      text: {
        label: "Text",
        value: "Red new carpet with remote wifi"
      },
      price: {
        label: "Price",
        value: "$25"
      }
    }
  },
  card_2: {
    data: {
      image: {
        label: "Image",
        value: "/images/products/product-image.jpeg",
        image: true
      },
      text: {
        label: "Text",
        value: "Red new carpet with remote wifi"
      },
      price: {
        label: "Price",
        value: "$25"
      }
    }
  },
  card_3: {
    data: {
      image: {
        label: "Image",
        value: "/images/products/product-image.jpeg",
        image: true
      },
      text: {
        label: "Text",
        value: "Red new carpet with remote wifi"
      },
      price: {
        label: "Price",
        value: "$25"
      }
    }
  },
  card_4: {
    data: {
      image: {
        label: "Image",
        value: "/images/products/product-image.jpeg",
        image: true
      },
      text: {
        label: "Text",
        value: "Red new carpet with remote wifi"
      },
      price: {
        label: "Price",
        value: "$25"
      }
    }
  },
};
const ProductCardGridV4 = ({ id }) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <h4 className={_.title.data.large_text_style.value}>
          {_.title.data.large_text.value}
        </h4>

        <div className={_.layout.data.layout.value}>
          {/* Card 1 */}
          <div className={_.cards.data.container.value}>
            <div className={_.cards.data.image_container.value}>
              <img
                className={_.cards.data.image.value}
                src={_.card_1.data.image.value}
                alt=""
              />
            </div>
            <div className={_.cards.data.text_container.value}>
              <p className={_.cards.data.text.value}>
                {_.card_1.data.text.value}
              </p>
              <p className={_.cards.data.price.value}>
                {_.card_1.data.price.value}
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className={_.cards.data.container.value}>
            <div className={_.cards.data.image_container.value}>
              <img
                className={_.cards.data.image.value}
                src={_.card_2.data.image.value}
                alt=""
              />
            </div>
            <div className={_.cards.data.text_container.value}>
              <p className={_.cards.data.text.value}>
                {_.card_2.data.text.value}
              </p>
              <p className={_.cards.data.price.value}>
                {_.card_2.data.price.value}
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className={_.cards.data.container.value}>
            <div className={_.cards.data.image_container.value}>
              <img
                className={_.cards.data.image.value}
                src={_.card_3.data.image.value}
                alt=""
              />
            </div>
            <div className={_.cards.data.text_container.value}>
              <p className={_.cards.data.text.value}>
                {_.card_3.data.text.value}
              </p>
              <p className={_.cards.data.price.value}>
                {_.card_3.data.price.value}
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className={_.cards.data.container.value}>
            <div className={_.cards.data.image_container.value}>
              <img
                className={_.cards.data.image.value}
                src={_.card_4.data.image.value}
                alt=""
              />
            </div>
            <div className={_.cards.data.text_container.value}>
              <p className={_.cards.data.text.value}>
                {_.card_4.data.text.value}
              </p>
              <p className={_.cards.data.price.value}>
                {_.card_4.data.price.value}
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ProductCardGridV4;
