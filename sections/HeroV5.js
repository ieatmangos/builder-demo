import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Hero hds-container bg-white md:bg-primary hds-text-color"
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
        value: "mx-auto max-w-3xl text-center"
      }
    }
  },
  text: {
    data: {
      large_text_style: {
        label: "Title Styles",
        value: "hds-title__medium mb-xs md:mb-sm font-black"
      },
      large_text: {
        label: "Title",
        value: "Some tools allow the incorpration",
        rte: true
      },
      small_text_style: {
        label: "Small Text Style",
        value: "hds-copy mb-sm md:mb-md md:px-xs"
      },
      small_text: {
        label: "Small Text",
        value: `Wireframes are generally created by business analysts, user experience designers, developers, visual designers, and by those with expertise`,
        rte: true
      }
    }
  },
  image: {
    data: {
      container: {
        label: "Container",
        value:
          "flex justify-center items-center relative rounded overflow-hidden "
      },
      image_style: {
        label: "Image Style",
        value:
          "object-cover w-full h-full transition ease-out duration-300 transform hover:scale-105"
      },
      image: {
        label: "Image",
        value: "/images/products/product-image.jpeg",
        image: true
      },
      icon_style: {
        label: "Icon Style",
        value: "absolute z-20"
      },
      icon: {
        label: "Icon",
        value: "/images/svg/triangleInCircle.svg",
        image: true
      }
    }
  }
};
const HeroV5 = ({ id }) => {
  const {_, check} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          {check(_.text.data.large_text.value)&&<h4
            dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }}
            className={_.text.data.large_text_style.value}
          ></h4>}
          {check(_.text.data.small_text.value)&&<p
            dangerouslySetInnerHTML={{ __html: _.text.data.small_text.value }}
            className={_.text.data.small_text_style.value}
          ></p>}
          {check(_.image.data.image.value)&&<div className={_.image.data.container.value}>
            <img
              className={_.image.data.image_style.value}
              src={_.image.data.image.value}
              alt=""
            />
            {check(_.image.data.icon.value)&&<button className={_.image.data.icon_style.value}>
              <img src={_.image.data.icon.value} alt="play" />
            </button>}
          </div>}
        </div>
      </div>
    </section>
  );
};

export default HeroV5;
