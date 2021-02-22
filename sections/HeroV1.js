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
  text: {
    data: {
      container: {
        label: "Container",
        value: "max-w-md mx-auto lg:mx-0 text-center lg:text-left z-10 lg:pr-sm"
      },
      title_style: {
        label: "Title Style",
        value: "hds-title__large hds-title-color mb-xs font-black"
      },
      title: {
        label: "Title",
        value: "Simple Process For The Reproduction of Any Document",
        rte: true
      },
      body_style: {
        label: "Body Style",
        value: "hds-copy mb-md"
      },
      body: {
        label: "Body",
        value:
          "Wireframes can be pencil drawings or sketches on whiteboard, or they can be",
        rte: true
      }
    }
  },
  button: {
    data: {
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__light mb-sm md:mb-md"
      },
      button: {
        label: "Button",
        value: "Button"
      }
    }
  },
  image: {
    data: {
      container: {
        label: "Container",
        value: "w-full md:w-1/2 md:absolute right-0 inset-y-0 overflow-hidden"
      },
      image_style: {
        label: "Style",
        value: "w-full h-full object-cover object-center"
      },
      image_src: {
        label: "Image",
        value: "/images/products/product-image.jpeg",
        image: true
      }
    }
  },
  icons: {
    data: {
      container: {
        label: "Container",
        value: "hidden md:flex gap-4"
      },
      shared_style:{
        label: 'Shared Style',
        value: ''
      },
      icon_1: {
        label: "Icon 1",
        value: "/images/svg/arrowLeft-light.svg",
        image: true
      },
      icon_2: {
        label: "Icon 2",
        value: "/images/svg/arrowRight-light.svg",
        image: true
      }
    }
  }
};
const HeroV1 = ({ id }) => {
  const {_, check} = useEdit(defaults, id);
  useMyData(id, defaults);

  return (
    <section id={id} className={_.section_styles.data.container.value}>
      {check(_.image.data.image_src.value)&&<div className={_.image.data.container.value}>
        <img
          className={_.image.data.image_style.value}
          src={_.image.data.image_src.value}
          alt=""
        />
      </div>}
      <div className={_.section_styles.data.section.value}>
        <div className={_.text.data.container.value}>
          {check(_.text.data.title.value)&&<h4 dangerouslySetInnerHTML={{ __html: _.text.data.title.value }} className={_.text.data.title_style.value}></h4>}
          {check(_.text.data.body.value)&&<p dangerouslySetInnerHTML={{ __html: _.text.data.body.value }} className={_.text.data.body_style.value}></p>}
          {check(_.button.data.button.value)&&<button className={_.button.data.button_style.value} type="button">{_.button.data.button.value}</button>}

          <div className={_.icons.data.container.value}>
            {check(_.icons.data.icon_2.value)&&<img
              className={_.icons.data.shared_style.value}
              src={_.icons.data.icon_1.value}
              alt=""
            />}
            {check(_.icons.data.icon_2.value)&&<img
              className={_.icons.data.shared_style.value}
              src={_.icons.data.icon_2.value}
              alt=""
            />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV1;
