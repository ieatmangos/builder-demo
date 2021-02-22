import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: {data:{inner:''}},
  section_styles: {
    data: {
      container: {
        label: "Container",
        value: "CallToAction hds-container bg-white hds-text-color"
      },
      section: {
        label: "Section",
        value:
          "hds-section"
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: "Layout",
        value: "grid sm:grid-cols-2 gap-md"
      }
    }
  },
  image: {
    data: {
      container: {
        label: "Container",
        value: ""
      },
      wrapper: {
        label: "Wrapper",
        value: "relative h-full w-full rounded-md overflow-hidden"
      },
      image_style: {
        label: "Image Style",
        value: "object-cover min-w-full min-h-full "
      },
      image: {
        label: "Image",
        value: "/images/products/product-image.jpeg",
        image: true
      }
    }
  },
  text: {
    data: {
      container: {
        label: "Container",
        value: "max-w-md"
      },
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__medium hds-title-color mb-sm md:mb-md font-black"
      },
      large_text: {
        label: "Large Text",
        value: "Wireframes can be pencil drawings on a whiteboard.",
        rte: true,
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary-hollow"
      },
      button: {
        label: "Button",
        value: "View"
      }
    }
  }
};
const CallToActionV6 = ({ id }) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          {/* <!--     <div className="mb-xs md:mr-sm w-full h-80 sm:w-96 sm:h-96 md:w-112 md:h-112 bg-primary rounded-md"></div> --> */}
          <div className={_.image.data.container.value}>
            <div className={_.image.data.wrapper.value}>
              <img
                className={_.image.data.image_style.value}
                src={_.image.data.image.value}
                alt=""
              />
            </div>
          </div>
          <div className={_.text.data.container.value}>
            <h4 dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }} className={_.text.data.large_text_style.value}>
            </h4>
            <button className={_.text.data.button_style.value} type="button">
              {_.text.data.button.value}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToActionV6;
