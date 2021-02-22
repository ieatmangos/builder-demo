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
      layout: {
        label: "Layout Grid",
        value: "grid grid-cols-1 sm:grid-cols-2 gap-sm my-sm md:my-md lg:my-xl"
      },
      left_side: {
        label: "Left Side Container",
        value: "text-center"
      },
      right_side: {
        label: "Right Side Container",
        value: "text-center sm:mt-md lg:mt-lg "
      }
    }
  },
  images: {
    data: {
      shared_container: {
        label: "Shared Container",
        value: "rounded overflow-hidden h-40"
      },
      shared_styles: {
        label: "Shared Image Styles",
        value:
          "object-cover object-center w-full h-full transition ease-out duration-300 transform hover:scale-105"
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
        value: "/images/products/product-image-3.jpeg",
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
        value: "/images/products/product-image-4.jpeg",
        image: true
      }
    }
  },
  text: {
    data: {
      large_text_style: {
        label: "Large Text Style",
        value: " mt-sm text-2xl font-bold"
      },
      small_text_style: {
        label: "Small Text Style",
        value: "leading-8 text-xl"
      },
      left_side_large: {
        label: "Left Side Large",
        value: "Focus on screen",
        rte: true,
      },
      left_side_small: {
        label: "Left Side Small",
        value: "The navigation design should",
        rte: true,
      },
      right_side_large: {
        label: "Right Side Large",
        value: "Focus on screen",
        rte: true,
      },
      right_side_small: {
        label: "Right Side Small",
        value: "The navigation design should",
        rte: true,
      }
    }
  }
};
const GalleryV5 = ({ id }) => {
  const { _, check } = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          <div className={_.layout.data.left_side.value}>
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
            {check(_.text.data.left_side_large.value) && (
              <h3
                dangerouslySetInnerHTML={{
                  __html: _.text.data.left_side_large.value
                }}
                className={_.text.data.large_text_style.value}
              ></h3>
            )}
            {check(_.text.data.left_side_small.value) && (
              <p
                dangerouslySetInnerHTML={{
                  __html: _.text.data.left_side_small.value
                }}
                className={_.text.data.small_text_style.value}
              ></p>
            )}
          </div>

          <div className={_.layout.data.right_side.value}>
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
            {check(_.text.data.right_side_large.value) && (
              <h3
                dangerouslySetInnerHTML={{
                  __html: _.text.data.right_side_large.value
                }}
                className={_.text.data.large_text_style.value}
              ></h3>
            )}

            {check(_.text.data.right_side_small.value) && (
              <p
                dangerouslySetInnerHTML={{
                  __html: _.text.data.right_side_small.value
                }}
                className={_.text.data.small_text_style.value}
              ></p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryV5;
