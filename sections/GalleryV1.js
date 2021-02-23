import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Gallery hds-container bg-white hds-text-color"
      },
      section: {
        label: "Section Styles",
        value: "hds-section"
      }
    }
  },
  layout: {
    data: {
      slider_container: {
        label: "Slider Container",
        value: "hide-scrollbar overflow-scroll whitespace-no-wrap"
      }
    }
  },
  above: {
    data: {
      container: {
        label: "Container",
        value: "max-w-2xl mx-auto"
      },
      small_text_style: {
        label: "Small Text Style",
        value: "hds-legal mb-xs"
      },
      small_text: {
        label: "Small Text",
        value: "Our things",
        rte: true
      },
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__medium font-black"
      },
      large_text: {
        label: "Large Text",
        value: "The goal is to facilitate useability",
        rte: true
      }
    }
  },

  images: {
    data: {
      shared_container: {
        label: "Shared Container",
        value: "inline-block rounded-md overflow-hidden mx-xs my-md h-64 w-88"
      },
      shared_styles: {
        label: "Shared Image Styles",
        value:
          "object-cover object-top w-full h-full transition ease-out duration-300 transform scale-100 hover:scale-105"
      },
      image_1_container: {
        label: "Image 1 Container",
        value: ""
      },
      image_1_style: {
        label: "Image 1 Style",
        value: ""
      },
      image_1: {
        label: "Image 1",
        value: "/images/demo/dark.png",
        image: true
      },
      image_2_container: {
        label: "Image 2 Container",
        value: ""
      },
      image_2_style: {
        label: "Image 2 Style",
        value: ""
      },
      image_2: {
        label: "Image 2",
        value: "/images/demo/dark.png",
        image: true
      },
      image_3_container: {
        label: "Image 3 Container",
        value: ""
      },
      image_3_style: {
        label: "Image 3 Style",
        value: ""
      },
      image_3: {
        label: "Image 3",
        value: "/images/demo/dark.png",
        image: true
      }
    }
  },

  below: {
    data: {
      container: {
        label: "Container",
        value: "max-w-2xl mx-auto"
      },
      text_style: {
        label: "Text Style",
        value: "hds-copy mb-xs"
      },
      text: {
        label: "Text",
        value:
          "The navigation design should communicate the relationship between the links it contains so that users understand the options they have for navigating the site.",
          rte: true,
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary-hollow"
      },
      button: {
        label: "Button",
        value: "View more"
      }
    }
  }
};

const GalleryV1 = ({ id }) => {
  const { _, check } = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        {/* <!-- Above --> */}
        <div className={_.above.data.container.value}>
          {check(_.above.data.small_text.value) && (
            <p
              dangerouslySetInnerHTML={{
                __html: _.above.data.small_text.value
              }}
              className={_.above.data.small_text_style.value}
            ></p>
          )}
          {check(_.above.data.large_text.value) && (
            <h3
              dangerouslySetInnerHTML={{
                __html: _.above.data.large_text.value
              }}
              className={_.above.data.large_text_style.value}
            ></h3>
          )}
        </div>
        {/* <!-- Slider --> */}
        <div className={_.layout.data.slider_container.value}>
          {check(_.images.data.image_1.value)&&<div
            className={
              _.images.data.shared_container.value +
              " " +
              _.images.data.image_1_container.value
            }
          >
            <img
              className={
                _.images.data.shared_styles.value +
                " " +
                _.images.data.image_1_style.value
              }
              src={_.images.data.image_1.value}
              alt=""
            />
          </div>}
          {check(_.images.data.image_2.value)&&<div
            className={
              _.images.data.shared_container.value +
              " " +
              _.images.data.image_2_container.value
            }
          >
            <img
              className={
                _.images.data.shared_styles.value +
                " " +
                _.images.data.image_2_style.value
              }
              src={_.images.data.image_2.value}
              alt=""
            />
          </div>}
          {check(_.images.data.image_3.value)&&<div
            className={
              _.images.data.shared_container.value +
              " " +
              _.images.data.image_3_container.value
            }
          >
            <img
              className={
                _.images.data.shared_styles.value +
                " " +
                _.images.data.image_3_style.value
              }
              src={_.images.data.image_3.value}
              alt=""
            />
          </div>}
        </div>
        {/* <!-- Below --> */}
        <div className={_.below.data.container.value}>
          {check(_.below.data.text.value)&&<p dangerouslySetInnerHTML={{ __html: _.below.data.text.value }} className={_.below.data.text_style.value}></p>}
          {check(_.below.data.button.value)&&<button className={_.below.data.button_style.value}>
            {_.below.data.button.value}
          </button>}
        </div>
      </div>

      {/* <div className="flex mt-xs mx-atuo">
          <img className="mx-xs" src="/images/svg/circleClosed.svg" alt="dot" />
          <img className="mx-xs" src="/images/svg/circleOpen.svg" alt="dot" />
          <img className="mx-xs" src="/images/svg/circleOpen.svg" alt="dot" />
        </div> */}
      {/* SVG DOTS */}
    </section>
  );
};

export default GalleryV1;
