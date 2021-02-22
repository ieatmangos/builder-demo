import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: {data:{inner:''}},
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Product hds-container bg-white hds-text-color"
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
        value:
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-sm max-w-screen-xl mx-auto"
      }
    }
  },
  cards: {
    data: {
      card_container: {
        label: "Card Container",
        value: "grid shadow-lg "
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
        value: "p-sm flex flex-col justify-between"
      },
      title_style: {
        label: "Title Style",
        value:
          "flex-1 hds-title-color mb-xs md:mb-sm text-xs md:text-3xl lg:text-4xl font-bold md:leading-8 lg:leading-10"
      },
      price_style: {
        label: "Price Style",
        value: "text-xs md:text-xl font-bold"
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn__small hds-btn__primary mb-xs"
      },
      link_style: {
        label: "Link Style",
        value: "block my-xs text-xs md:text-base md:underline"
      }
    }
  },
  card_1: {
    data: {
      title: {
        label: "Title",
        value: "Symbolic content Symbolic"
      },
      price: {
        label: "Price",
        value: "$20"
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },
      image_src: {
        label: "Image Source",
        value: "/images/products/product-image-2.jpeg",
        image: true,
      },
      link: {
        label: "Link",
        value: "Quick View"
      },
      
    }
  },
  card_2: {
    data: {
      title: {
        label: "Title",
        value: "Symbolic content Symbolic"
      },
      price: {
        label: "Price",
        value: "$20"
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },

      image_src: {
        label: "Image Source",
        value: "/images/products/product-image-2.jpeg",
        image: true,
      },
      link: {
        label: "Link",
        value: "Quick View"
      },
      
    }
  },
  card_3: {
    data: {
      title: {
        label: "Title",
        value: "Symbolic content Symbolic"
      },
      price: {
        label: "Price",
        value: "$20"
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },

      image_src: {
        label: "Image Source",
        value: "/images/products/product-image-2.jpeg",
        image: true,
      },
      link: {
        label: "Link",
        value: "Quick View"
      },
      
    }
  },
  card_4: {
    data: {
      title: {
        label: "Title",
        value: "Symbolic content Symbolic"
      },
      price: {
        label: "Price",
        value: "$20"
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },
      image_src: {
        label: "Image Source",
        value: "/images/products/product-image-2.jpeg",
        image: true,
      },
      link: {
        label: "Link",
        value: "Quick View"
      },
      
    }
  }
};

const ProductCardGridV2 = ({ id }) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);

    return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
    
          <div className={_.layout.data.layout.value}>

            {/* CARD */}
            <div className={_.cards.data.card_container.value}>
                <div className={_.cards.data.image_container.value}>
                  <img
                    className={_.cards.data.image.value}
                    src={_.card_1.data.image_src.value}
                    alt=""
                  />
              </div>
              <div className={_.cards.data.text_container.value}>
               <div>
                <h4 className={_.cards.data.title_style.value}>
                  {_.card_1.data.title.value}
                </h4>
                </div>
                <div className='flex flex-col justify-end'>
                <p className={_.cards.data.price_style.value}>
                  {_.card_1.data.price.value}
                </p>
               
                <div className="flex flex-wrap my-xs md:my-sm">
                  <div className="flex mr-xs">
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                  </div>
                  <p className="hds-legal hidden md:block">12 Reviews</p>
                </div>
                
                <button
                  className={_.cards.data.button_style.value}
                  type="button"
                >
                  {_.card_1.data.button.value}
                </button>
            
                <a
                  href='/'
                  className={_.cards.data.link_style.value}
                >
                  {_.card_1.data.link.value}
                </a>
                </div>
              </div>
            </div>

            {/* CARD */}
            <div className={_.cards.data.card_container.value}>
                <div className={_.cards.data.image_container.value}>
                  <img
                    className={_.cards.data.image.value}
                    src={_.card_2.data.image_src.value}
                    alt=""
                  />
              </div>
              <div className={_.cards.data.text_container.value}>
            
                <h4 className={_.cards.data.title_style.value}>
                  {_.card_2.data.title.value}
                </h4>
             
           
                <p className={_.cards.data.price_style.value}>
                  {_.card_2.data.price.value}
                </p>
               
                <div className="flex flex-wrap my-xs md:my-sm">
                  <div className="flex mr-xs">
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                  </div>
                  <p className="hds-legal hidden md:block">12 Reviews</p>
                </div>
                
                <button
                  className={_.cards.data.button_style.value}
                  type="button"
                >
                  {_.card_2.data.button.value}
                </button>
            
                <a
                  href='/'
                  className={_.cards.data.link_style.value}
                >
                  {_.card_2.data.link.value}
                </a>
</div>
            
            </div>

            {/* CARD */}
            <div className={_.cards.data.card_container.value}>
                <div className={_.cards.data.image_container.value}>
                  <img
                    className={_.cards.data.image.value}
                    src={_.card_3.data.image_src.value}
                    alt=""
                  />
              </div>
              <div className={_.cards.data.text_container.value}>
               
                <h4 className={_.cards.data.title_style.value}>
                  {_.card_3.data.title.value}
                </h4>
             
                <p className={_.cards.data.price_style.value}>
                  {_.card_3.data.price.value}
                </p>
               
                <div className="flex flex-wrap my-xs md:my-sm">
                  <div className="flex mr-xs">
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                  </div>
                  <p className="hds-legal hidden md:block">12 Reviews</p>
                </div>
                
                <button
                  className={_.cards.data.button_style.value}
                  type="button"
                >
                  {_.card_3.data.button.value}
                </button>
            
                <a
                  href='/'
                  className={_.cards.data.link_style.value}
                >
                  {_.card_3.data.link.value}
                </a>
              
              </div>
            </div>
            {/* CARD */}
            <div className={_.cards.data.card_container.value}>
                <div className={_.cards.data.image_container.value}>
                  <img
                    className={_.cards.data.image.value}
                    src={_.card_4.data.image_src.value}
                    alt=""
                  />
              </div>
              <div className={_.cards.data.text_container.value}>
               
                <h4 className={_.cards.data.title_style.value}>
                  {_.card_4.data.title.value}
                </h4>
                
                <p className={_.cards.data.price_style.value}>
                  {_.card_4.data.price.value}
                </p>
               
                <div className="flex flex-wrap my-xs md:my-sm">
                  <div className="flex mr-xs">
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                  </div>
                  <p className="hds-legal hidden md:block">12 Reviews</p>
                </div>
                
                <button
                  className={_.cards.data.button_style.value}
                  type="button"
                >
                  {_.card_4.data.button.value}
                </button>
            
                <a
                  href='/'
                  className={_.cards.data.link_style.value}
                >
                  {_.card_4.data.link.value}
                </a>
              </div>
            </div>
            
     
        </div>
      </div>
    </section>
  );
};

export default ProductCardGridV2;
