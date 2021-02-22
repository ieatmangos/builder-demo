import React from "react";
import { useEdit, useMyData } from "../edit";
const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Hero hds-container bg-primary hds-text-color"
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
        value: "flex md:justify-between items-center flex-wrap md:flex-no-wrap"
      }
    }
  },
  text: {
    data: {
      text_container: {
        label: "Container",
        value: "max-w-md mx-auto md:mx-0"
      },
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__large hds-title-color mb-sm font-black"
      },
      large_text: {
        label: "Large Text",
        value: "Wireframes are generally created",
        rte: true
      },
      small_text_style: {
        label: "Small Text Style",
        value: "hds-copy mb-sm md:mb-md"
      },
      small_text: {
        label: "Small Text",
        value:
          "Wireframes are generally created by business analysts, user experience designers, developers, visual designers, and by those with expertise",
        rte: true
      }
    }
  },
  button: {
    data: {
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__light-hollow block "
      },
      button: {
        label: "Button",
        value: "Button"
      }
    }
  },
  images: {
    data: {
      images_container: {
        label: "Images Container",
        value:
          "md:absolute w-full px-8 md:p-0 md:w-1/2 right-0 inset-y-0 overflow-hidden"
      },
      images_layout: {
        label: "Image Layout",
        value:
          "mb-lg md:my-sm grid sm:grid-col-2 gap-sm justify-evenly md:block md:overflow-x-auto md:whitespace-no-wrap"
      },
      shared_container: {
        label: "Shared Image Container",
        value:
          "relative rounded overflow-hidden md:inline-block md:w-64 md:h-96 md:mx-xs md:mt-sm"
      },
      shared_style: {
        label: "Shared Image Style",
        value:
          "object-cover w-full h-full transition ease-out duration-300 transform hover:scale-105"
      },
      image_1_container: {
        label: "Image 1 Container",
        value:
          ""
      },
      image_1_style: {
        label: "Image 1 Style",
        value:""
      },
      image_1_src: {
        label: "Image 1 Source",
        value: "/images/products/product-image.jpeg",
        image: true
      },
      image_2_container: {
        label: "Image 2 Container",
        value:
          ""
      },
      image_2_style: {
        label: "Image 2 Style",
        value:""
      },
      image_2_src: {
        label: "Image 2 Source",
        value: "/images/products/product-image.jpeg",
        image: true
      },
      image_3_container: {
        label: "Image 3 Container",
        value:
          ""
      },
      image_3_style: {
        label: "Image 3 Style",
        value:""
      },
      image_3_src: {
        label: "Image 3 Source",
        value: "/images/products/product-image.jpeg",
        image: true
      }
    }
  }
};
const HeroV4 = ({ id }) => {
  const {_, check} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          <div className={_.text.data.text_container.value}>
            {check(_.text.data.large_text.value)&&<h4
              dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }}
              className={_.text.data.large_text_style.value}
            ></h4>}
            {check(_.text.data.small_text.value)&&<p
              dangerouslySetInnerHTML={{ __html: _.text.data.small_text.value }}
              className={_.text.data.small_text_style.value}
            ></p>}
            {check(_.button.data.button.value)&&<button className={_.button.data.button_style.value} type="button">
              {_.button.data.button.value}
            </button>}
          </div>
        </div>
      </div>
      <div className={_.images.data.images_container.value}>
        <div className={_.images.data.images_layout.value}>
          {check(_.images.data.image_1_src.value)&&<div className={_.images.data.shared_container.value+' '+_.images.data.image_1_container.value}>
            <img
              className={_.images.data.shared_style.value + ' ' + _.images.data.image_1_style.value}
              src={_.images.data.image_1_src.value}
              alt=""
            />
          </div>}

          {check(_.images.data.image_2_src.value)&&<div className={_.images.data.shared_container.value+' '+_.images.data.image_2_container.value}>
            <img
              className={_.images.data.shared_style.value + ' ' + _.images.data.image_2_style.value}
              src={_.images.data.image_2_src.value}
              alt=""
            />
          </div>}

          {check(_.images.data.image_3_src.value)&&<div className={_.images.data.shared_container.value+' '+_.images.data.image_3_container.value}>
            <img
              className={_.images.data.shared_style.value + ' ' + _.images.data.image_3_style.value}
              src={_.images.data.image_3_src.value}
              alt=""
            />
          </div>}
        </div>
      </div>
    </section>
  );
};

export default HeroV4;
