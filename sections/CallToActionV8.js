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
        value: "mb-sm md:mb-0 hds-copy "
      },
      small_text: {
        label: "Small Text",
        value:
          "Wireframes can be pencil drawings or sketches on whiteboard, or they can be",
        rte: true
      }
    }
  },
  image: {
    data: {
      container: {
        label: "Container",
        value: "w-full md:max-w-xl"
      },
      wrapper: {
        label: "Wrapper",
        value: "relative pb-3/4 bg-primary rounded-md overflow-hidden"
      },
      image_style: {
        label: "Image Style",
        value: "top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
      },
      image: {
        label: "Image",
        value: "/images/products/product-image.jpeg",
        image: true
      }
    }
  }
};

const CallToActionV8 = ({ id }) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          <div className={_.text.data.container.value}>
            <h4
              dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }}
              className={_.text.data.large_text_style.value}
            ></h4>
            <p
              dangerouslySetInnerHTML={{ __html: _.text.data.small_text.value }}
              className={_.text.data.small_text_style.value}
            ></p>
          </div>
          {/* <!--     <div className="w-full md:max-w-xl h-80 sm:h-112 md:h-152 bg-gray-900 rounded-md"></div> --> */}
          <div className={_.image.data.container.value}>
            <div className={_.image.data.wrapper.value}>
              <img
                className={_.image.data.image_style.value}
                src={_.image.data.image.value}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToActionV8;
