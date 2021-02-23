import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "CallToAction hds-container bg-white"
      },
      section: {
        label: "Section Styles",
        value: "hds-section hds-text-color "
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: "Layout",
        value: "md:flex md:justify-between md:items-center"
      }
    }
  },
  text: {
    data: {
      container: {
        label: "Text Container",
        value: "md:mr-lg max-w-lg"
      },
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__medium hds-title-color mb-xs md:mb-sm font-black"
      },
      large_text: {
        label: "Large Text",
        value: "Information elements should be arranged in",
        rte: true
      },
      small_text_style: {
        label: "Small Text Style",
        value: "mb-sm  hds-copy "
      },
      small_text: {
        label: "Small Text",
        value:
          "Wireframes can be pencil drawings or sketches on whiteboard, or they can be",
        rte: true
      }
    }
  },
  buttons:{
    data:{
      container: {
        label: 'Button Container',
        value:'flex gap-sm'
      },
      button_1_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary-hollow"
      },
      button_1: {
        label: "Button",
        value: "View"
      },
      button_2_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary-hollow"
      },
      button_2: {
        label: "Button",
        value: "View"
      }
    }
  },
  image: {
    data: {
      container: {
        label: "Container",
        value: "relative rounded-md overflow-hidden h-64"
      },
      image_style: {
        label: "Image Style",
        value: "object-cover object-top w-full h-full transition ease-out duration-300 transform scale-100 hover:scale-105"
      },
      image: {
        label: "Image",
        value: "/images/demo/dark.png",
        image: true
      }
    }
  }
};

const CallToAction2 = ({ id }) => {
  const {_, check} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          <div className={_.text.data.container.value}>
            {/* Text */}
            {check(_.text.data.large_text.value)&&<h4
              dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }}
              className={_.text.data.large_text_style.value}
            ></h4>}
            {check(_.text.data.small_text.value)&&<p
              dangerouslySetInnerHTML={{ __html: _.text.data.small_text.value }}
              className={_.text.data.small_text_style.value}
            ></p>}

            {/* Buttons */}
            <div className={_.buttons.data.container.value} >
             {check(_.buttons.data.button_1.value)&&<button className={_.buttons.data.button_1_style.value} type="button">
              {_.buttons.data.button_1.value}
            </button>}
             {check(_.buttons.data.button_2.value)&&<button className={_.buttons.data.button_2_style.value} type="button">
              {_.buttons.data.button_2.value}
            </button>}
            </div>
          </div>
              
          {/* Image */}
          {check(_.image.data.image.value)&&<div className={_.image.data.container.value}>
              <img
                className={_.image.data.image_style.value}
                src={_.image.data.image.value}
                alt=""
              />
            </div>}
        </div>
      </div>
    </section>
  );
};
export default CallToAction2;
