import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Feature hds-container bg-white hds-text-color"
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
        value: "grid md:grid-cols-2 gap-sm md:gap-md"
      }
    }
  },
  image: {
    data: {
      image_1_container: {
        label: "Image 1 Container",
        value:
          "rounded overflow-hidden "
      },
      image_1_style: {
        label: "Image 1 Style",
        value:
          "object-cover object-center w-full h-full transition ease-out duration-300 transform hover:scale-105"
      },
      image_1: {
        label: "Image 1",
        value: "/images/demo/dark.png",
        image: true
      }
    }
  },
  text: {
    data: {
      container: {
        label: "Container",
        value: "flex flex-col justify-center"
      },
      pretitle_style: {
        label: "Pretitle Style",
        value: "mb-xs lg:mb-sm"
      },
      pretitle: {
        label: "Pretitle",
        value: "Actual images",
        rte: true
      },
      title_style: {
        label: "Title Style",
        value: "hds-title__medium font-black mb-sm xl:mb-md"
      },
      title: {
        label: "Title",
        value: "Unlike low wireframes, high fidelity wireframes can",
        rte: true
      }
    }
  },
  cards: {
    data: {
      card_layout: {
        label: "Card Layout Grid",
        value: "grid grid-cols-1 sm:grid-cols-2 gap-md "
      },
      card_container: {
        label: "Shared Card Container",
        value: "flex flex-col"
      },
      large_text_style: {
        label: "Shared Large Text Style",
        value: "font-bold mb-sm"
      },
      small_text_style: {
        label: "Shared Small Text Style",
        value: "flex-1"
      },
      f1_large_text: {
        label: "F1 Large Text",
        value: "Yellow",
        rte: true
      },
      f1_small_text: {
        label: "F1 Small Text",
        value:
          "The navigation design should communicate the relationship between the links it contains",
        rte: true
      },
      f2_large_text: {
        label: "F2 Large Text",
        value: "Yellow",
        rte: true
      },
      f2_small_text: {
        label: "F2 Small Text",
        value:
          "The navigation design should communicate the relationship between the links it contains",
        rte: true
      },
      f3_large_text: {
        label: "F3 Large Text",
        value: "Yellow",
        rte: true
      },
      f3_small_text: {
        label: "F3 Small Text",
        value:
          "The navigation design should communicate the relationship between the links it contains",
        rte: true
      },
      f4_large_text: {
        label: "F4 Large Text",
        value: "Yellow",
        rte: true
      },
      f4_small_text: {
        label: "F4 Small Text",
        value:
          "The navigation design should communicate the relationship between the links it contains",
        rte: true
      }
    }
  }
};

const FeatureV10 = ({ id }) => {
  const { _, check } = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
      <div className={_.layout.data.layout.value}>
        {/* Image 1 */}
        {check(_.image.data.image_1.value)&&<div className={_.image.data.image_1_container.value}>
          <img
            className={_.image.data.image_1_style.value}
            src={_.image.data.image_1.value}
            alt=""
          />
        </div>}

        {/* Text */}
        <div className={_.text.data.container.value}>
          {check(_.text.data.pretitle.value) && (
            <p
              dangerouslySetInnerHTML={{ __html: _.text.data.pretitle.value }}
              className={_.text.data.pretitle_style.value}
            ></p>
          )}
          {check(_.text.data.title.value) && (
            <h3
              dangerouslySetInnerHTML={{ __html: _.text.data.title.value }}
              className={_.text.data.title_style.value}
            ></h3>
          )}

          {/* cards */}
          <div className={_.cards.data.card_layout.value}>
            {/* 1 */}
            <div className={_.cards.data.card_container.value}>
              {check(_.cards.data.f1_large_text.value) && (
                <h4
                  dangerouslySetInnerHTML={{
                    __html: _.cards.data.f1_large_text.value
                  }}
                  className={_.cards.data.large_text_style.value}
                ></h4>
              )}

              {check(_.cards.data.f1_small_text.value) && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: _.cards.data.f1_small_text.value
                  }}
                  className={_.cards.data.small_text_style.value}
                ></p>
              )}
            </div>
            {/* 2 */}
            <div className={_.cards.data.card_container.value}>
              {check(_.cards.data.f2_large_text.value) && (
                <h4
                  dangerouslySetInnerHTML={{
                    __html: _.cards.data.f2_large_text.value
                  }}
                  className={_.cards.data.large_text_style.value}
                ></h4>
              )}

              {check(_.cards.data.f2_small_text.value) && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: _.cards.data.f2_small_text.value
                  }}
                  className={_.cards.data.small_text_style.value}
                ></p>
              )}
            </div>
            {/* 3 */}
            <div className={_.cards.data.card_container.value}>
              {check(_.cards.data.f3_large_text.value) && (
                <h4
                  dangerouslySetInnerHTML={{
                    __html: _.cards.data.f3_large_text.value
                  }}
                  className={_.cards.data.large_text_style.value}
                ></h4>
              )}

              {check(_.cards.data.f3_small_text.value) && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: _.cards.data.f3_small_text.value
                  }}
                  className={_.cards.data.small_text_style.value}
                ></p>
              )}
            </div>
            {/* 4 */}
            <div className={_.cards.data.card_container.value}>
              {check(_.cards.data.f4_large_text.value) && (
                <h4
                  dangerouslySetInnerHTML={{
                    __html: _.cards.data.f4_large_text.value
                  }}
                  className={_.cards.data.large_text_style.value}
                ></h4>
              )}

              {check(_.cards.data.f4_small_text.value) && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: _.cards.data.f4_small_text.value
                  }}
                  className={_.cards.data.small_text_style.value}
                ></p>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
export default FeatureV10;
