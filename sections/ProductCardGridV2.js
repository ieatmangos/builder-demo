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
          "grid grid-cols-1 sm:grid-cols-2 gap-sm"
      }
    }
  },
  above: {
    data: {
      toggle_show:{
        label: 'Toggle Show',
        value: false,
        toggle: true,
      },
      container: {
        label: 'Container',
        value:''
      },
      large_text_style: {
        label: "Title Styles",
        value: ""
      },
      large_text: {
        label: "Title",
        value: "Some tools allow the incorpration",
        rte: true
      },
      small_text_style: {
        label: "Small Text Style",
        value: "hds-copy mb-md"
      },
      small_text: {
        label: "Small Text",
        value: `Here are our most popular products`,
        rte: true
      }
    }
  },
  cards: {
    data: {
      card_container: {
        label: "Shared Card Container",
        value: "grid md:grid-cols-2 gap-xs shadow-lg"
      },
      text_container: {
        label: "Shared Text Container",
        value: "flex flex-col"
      },
      image_container: {
        label: "Shared Image Container",
        value: "rounded-md overflow-hidden"
      },
      image: {
        label: "Shared Image Style",
        value: "object-cover object-center h-full w-full"
      },
      title_style: {
        label: "Shared Title Style",
        value: "flex-1 hds-title__medium hds-title-color mb-sm md:text-3xl font-bold"
      },
      price_style: {
        label: "Shared Price Style",
        value: "md:text-xl font-bold"
      },
      description_style: {
        label: "Shared Description Style",
        value: "hds-copy"
      },
      button_style: {
        label: "Shared Button Style",
        value: "hds-btn__small hds-btn__primary mb-xs"
      },
      link_style: {
        label: "Shared Link Style",
        value: "block my-xs md:underline"
      },
      reviews_container:{
        label: 'Shared Reviews Container',
        value: 'flex my-xs md:my-sm'
      },
      review_star_closed:{
        label: 'Shared Review Star Closed',
        value: '/images/svg/reviewStar-fill.svg',
        image: true,
      },
      review_star_open:{
        label: 'Shared Review Star Closed',
        value: '/images/svg/reviewStar-empty.svg',
        image: true,
      },
      reviews_label_style:{
        label: 'Shared Reviews Label Style',
        value: 'hds-legal'
      }
    }
  },
  card_1: {
    data: {
      toggle_show:{
        label: 'Toggle Show',
        value: true,
        toggle: true,
      },
      image_src: {
        label: "Image Source",
        value: "/images/demo/dark.png",
        image: true,
      },
      title: {
        label: "Title",
        value: "Symbolic content Symbolic",
        rte: true,
      },
      price: {
        label: "Price",
        value: "$20",
        rte: true,
      },
      reviews:{
        label: 'Reivews',
        value: '12 Reviews',
        rte: true,
      },
      description:{
        label: 'Description',
        value: '',
        rte: true,
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },
      link: {
        label: "Link",
        value: "Quick View"
      },
      
    }
  },
  card_2: {
    data: {
      toggle_show:{
        label: 'Toggle Show',
        value: true,
        toggle: true,
      },
      image_src: {
        label: "Image Source",
        value: "/images/demo/dark.png",
        image: true,
      },
      title: {
        label: "Title",
        value: "Symbolic content Symbolic",
        rte: true,
      },
      price: {
        label: "Price",
        value: "$20",
        rte: true,
      },
      reviews:{
        label: 'Reivews',
        value: '12 Reviews',
        rte: true,
      },
      description:{
        label: 'Description',
        value: '',
        rte: true,
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },
      link: {
        label: "Link",
        value: "Quick View",
        rte: true,
      },
      
    }
  },
  card_3: {
    data: {
      toggle_show:{
        label: 'Toggle Show',
        value: true,
        toggle: true,
      },
      image_src: {
        label: "Image Source",
        value: "/images/demo/dark.png",
        image: true,
      },
      title: {
        label: "Title",
        value: "Symbolic content Symbolic",
        rte: true,
      },
      price: {
        label: "Price",
        value: "$20",
        rte: true,
      },
      reviews:{
        label: 'Reivews',
        value: '12 Reviews',
        rte: true,
      },
      description:{
        label: 'Description',
        value: '',
        rte: true,
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },
      link: {
        label: "Link",
        value: "Quick View",
        rte: true,
      },
      
    }
  },
  card_4: {
    data: {
      toggle_show:{
        label: 'Toggle Show',
        value: true,
        toggle: true,
      },
      image_src: {
        label: "Image Source",
        value: "/images/demo/dark.png",
        image: true,
      },
      title: {
        label: "Title",
        value: "Symbolic content Symbolic",
        rte: true,
      },
      price: {
        label: "Price",
        value: "$20",
        rte: true,
      },
      reviews:{
        label: 'Reivews',
        value: '12 Reviews',
        rte: true,
      },
      description:{
        label: 'Description',
        value: '',
        rte: true,
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },
      link: {
        label: "Link",
        value: "Quick View",
        rte: true,
      },
      
    }
  }
};

const ProductCardGridV2 = ({ id }) => {
  const {_, check} = useEdit(defaults, id);
  useMyData(id, defaults);
    return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>


        {/* Above */}
        {check(_.above.data.toggle_show.value)&&<div className={_.above.data.container.value} >
        {check(_.above.data.large_text.value)&&<h3
            dangerouslySetInnerHTML={{ __html: _.above.data.large_text.value }}
            className={_.above.data.large_text_style.value}
          ></h3>}
          {check(_.above.data.small_text.value)&&<p
            dangerouslySetInnerHTML={{ __html: _.above.data.small_text.value }}
            className={_.above.data.small_text_style.value}
          ></p>}
        </div>}
    
          <div className={_.layout.data.layout.value}>
            {/* CARD */}
            {check(_.card_1.data.toggle_show.value)&&<div className={_.cards.data.card_container.value}>
              {/* Image */}
                {check(_.card_1.data.image_src.value)&&<div className={_.cards.data.image_container.value}>
                  <img
                    className={_.cards.data.image.value}
                    src={_.card_1.data.image_src.value}
                    alt=""
                  />
                </div>}
                {/* Text */}
              <div className={_.cards.data.text_container.value}>
                {/* Title */}
                {check(_.card_1.data.title.value)&&<h4 dangerouslySetInnerHTML={{ __html: _.card_1.data.title.value }} className={_.cards.data.title_style.value}></h4>}
                {/* Price */}
                {check(_.card_1.data.price.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_1.data.price.value }} className={_.cards.data.price_style.value}></p>}
               
               {/* Reviews */}
                {(check(_.cards.data.review_star_closed.value) || check(_.cards.data.review_star_open.value) )&&<div className={_.cards.data.reviews_container.value}>
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_open.value} alt="" />
                  {check(_.card_1.data.reviews.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_1.data.reviews.value }} className={_.cards.data.reviews_label_style.value}></p>}
                </div>}
                {/* Description */}
                {check(_.card_1.data.description.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_1.data.description.value }} className={_.cards.data.description_style.value}></p>}

                {/* Button */}
                {check(_.card_1.data.button.value)&&<button
                  className={_.cards.data.button_style.value}
                  type="button"
                >
                  {_.card_1.data.button.value}
                </button>}
                {/* Link */}
                {check(_.card_1.data.link.value)&&<a
                  href='/'
                  dangerouslySetInnerHTML={{ __html: _.card_1.data.link.value }}
                  className={_.cards.data.link_style.value}
                >
                  
                </a>}
              </div>
            </div>}
            
            {/* CARD2 */}
            {check(_.card_2.data.toggle_show.value)&& <div className={_.cards.data.card_container.value}>
              {/* Image */}
                {check(_.card_2.data.image_src.value)&&<div className={_.cards.data.image_container.value}>
                  <img
                    className={_.cards.data.image.value}
                    src={_.card_2.data.image_src.value}
                    alt=""
                  />
                </div>}
                {/* Text */}
              <div className={_.cards.data.text_container.value}>
                {/* Title */}
                {check(_.card_2.data.title.value)&&<h4 dangerouslySetInnerHTML={{ __html: _.card_2.data.title.value }} className={_.cards.data.title_style.value}></h4>}
                {/* Price */}
                {check(_.card_2.data.price.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_2.data.price.value }} className={_.cards.data.price_style.value}></p>}
               
               {/* Reviews */}
                {(check(_.cards.data.review_star_closed.value) || check(_.cards.data.review_star_open.value) )&&<div className={_.cards.data.reviews_container.value}>
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_open.value} alt="" />
                  {check(_.card_2.data.reviews.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_2.data.reviews.value }} className={_.cards.data.reviews_label_style.value}></p>}
                </div>}
                {/* Description */}
                {check(_.card_2.data.description.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_2.data.description.value }} className={_.cards.data.description_style.value}></p>}

                {/* Button */}
                {check(_.card_2.data.button.value)&&<button
                  className={_.cards.data.button_style.value}
                  type="button"
                >
                  {_.card_2.data.button.value}
                </button>}
                {/* Link */}
                {check(_.card_2.data.link.value)&&<a
                  href='/'
                  dangerouslySetInnerHTML={{ __html: _.card_2.data.link.value }}
                  className={_.cards.data.link_style.value}
                >
                </a>}
              </div>
            </div>}


            {/* CARD 3 */}
            {check(_.card_3.data.toggle_show.value)&&<div className={_.cards.data.card_container.value}>
              {/* Image */}
                {check(_.card_3.data.image_src.value)&&<div className={_.cards.data.image_container.value}>
                  <img
                    className={_.cards.data.image.value}
                    src={_.card_3.data.image_src.value}
                    alt=""
                  />
                </div>}
                {/* Text */}
              <div className={_.cards.data.text_container.value}>
                {/* Title */}
                {check(_.card_3.data.title.value)&&<h4 dangerouslySetInnerHTML={{ __html: _.card_3.data.title.value }} className={_.cards.data.title_style.value}></h4>}
                {/* Price */}
                {check(_.card_3.data.price.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_3.data.price.value }} className={_.cards.data.price_style.value}></p>}
               
               {/* Reviews */}
                {(check(_.cards.data.review_star_closed.value) || check(_.cards.data.review_star_open.value) )&&<div className={_.cards.data.reviews_container.value}>
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_open.value} alt="" />
                  {check(_.card_3.data.reviews.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_3.data.reviews.value }} className={_.cards.data.reviews_label_style.value}></p>}
                </div>}
                {/* Description */}
                {check(_.card_3.data.description.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_3.data.description.value }} className={_.cards.data.description_style.value}></p>}

                {/* Button */}
                {check(_.card_3.data.button.value)&&<button
                  className={_.cards.data.button_style.value}
                  type="button"
                >
                  {_.card_3.data.button.value}
                </button>}
                {/* Link */}
                {check(_.card_3.data.link.value)&&<a
                  href='/'
                  dangerouslySetInnerHTML={{ __html: _.card_3.data.link.value }}
                  className={_.cards.data.link_style.value}
                >
                </a>}
              </div>
            </div>}

            {/* CARD 4 */}
            {check(_.card_4.data.toggle_show.value)&&<div className={_.cards.data.card_container.value}>
              {/* Image */}
                {check(_.card_4.data.image_src.value)&&<div className={_.cards.data.image_container.value}>
                  <img
                    className={_.cards.data.image.value}
                    src={_.card_4.data.image_src.value}
                    alt=""
                  />
                </div>}
                {/* Text */}
              <div className={_.cards.data.text_container.value}>
                {/* Title */}
                {check(_.card_4.data.title.value)&&<h4 dangerouslySetInnerHTML={{ __html: _.card_4.data.title.value }} className={_.cards.data.title_style.value}></h4>}
                {/* Price */}
                {check(_.card_4.data.price.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_4.data.price.value }} className={_.cards.data.price_style.value}></p>}
               
               {/* Reviews */}
                {(check(_.cards.data.review_star_closed.value) || check(_.cards.data.review_star_open.value) )&&<div className={_.cards.data.reviews_container.value}>
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_closed.value} alt="" />
                    <img src={_.cards.data.review_star_open.value} alt="" />
                  {check(_.card_4.data.reviews.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_4.data.reviews.value }} className={_.cards.data.reviews_label_style.value}></p>}
                </div>}
                {/* Description */}
                {check(_.card_4.data.description.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_4.data.description.value }} className={_.cards.data.description_style.value}></p>}

                {/* Button */}
                {check(_.card_4.data.button.value)&&<button
                  className={_.cards.data.button_style.value}
                  type="button"
                >
                  {_.card_4.data.button.value}
                </button>}
                {/* Link */}
                {check(_.card_4.data.link.value)&&<a
                  href='/'
                  dangerouslySetInnerHTML={{ __html: _.card_4.data.link.value }}
                  className={_.cards.data.link_style.value}
                >
                </a>}
              </div>
            </div>}














     
        </div>
      </div>
    </section>
  );
};

export default ProductCardGridV2;
