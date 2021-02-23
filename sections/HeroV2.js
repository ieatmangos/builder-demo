import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Hero hds-container bg-primary text-white"
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
        value: "grid grid-cols-1 md:grid-cols-2 md:gap-lg"
      }
    }
  },
  image: {
    data: {
      parent_container: {
        label: "Parent Container",
        value: "w-full"
      },
      container: {
        label: "Image Container",
        value: "relative rounded overflow-hidden mb-sm h-full w-full rounded-md"
      },
      image_style: {
        label: "Image Style",
        value:
          "object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
      },
      image: {
        label: "Image",
        value: "/images/demo/light-square.png",
        image: true
      },
      icons_container: {
        label: "Icon Container",
        value: "flex justify-center gap-xs"
      },
      icon_open: {
        label: "Icon Open",
        value: "/images/svg/circleOpen.svg",
        image: true
      },
      icon_closed: {
        label: "Icon Open",
        value: "/images/svg/circleClosed.svg",
        image: true
      }
    }
  },
  text: {
    data: {
      container: {
        label: "Container",
        value: "mt-md"
      },
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__large mb-sm font-black"
      },
      large_text: {
        label: "Large Text",
        value: "Wireframes can be pencil drawings",
        rte: true
      },
      small_text_style: {
        label: "Small Text Style",
        value: "hds-copy mb-lg md:mb-md"
      },
      small_text: {
        label: "Small Text",
        value:
          " Wireframes are generally created by business analysts, user experience designers, developers, visual designers, and by those with expertise",
        rte: true
      }
    }
  },
  buttons: {
    data: {
      container: {
        label: "Container",
        value: "grid grid-cols-1 sm:grid-cols-2 gap-xs "
      },
      button_1_style: {
        label: "Button 1 Style",
        value: "hds-btn hds-btn__light"
      },
      button_1: {
        label: "Button 1",
        value: "Button"
      },
      button_2_style: {
        label: "Button 2 Style",
        value: "hds-btn hds-btn__light-hollow"
      },
      button_2: {
        label: "Button 2",
        value: "Button"
      }
    }
  }
};
const HeroV2 = ({ id }) => {
  const {_,check} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          <div className={_.image.data.parent_container.value}>
            {check(_.image.data.image.value)&&<div className={_.image.data.container.value}>
              <img
                className={_.image.data.image_style.value}
                src={_.image.data.image.value}
                alt=""
              />
            </div>}

            <div className={_.image.data.icons_container.value}>
              {check(_.image.data.icon_closed.value)&&<img
                className=""
                src={_.image.data.icon_closed.value}
                alt="dot"
              />}
              {check(_.image.data.icon_open.value)&&<img className="" src={_.image.data.icon_open.value} alt="dot" />}
              {check(_.image.data.icon_open.value)&&<img className="" src={_.image.data.icon_open.value} alt="dot" />}
            </div>
          </div>

          <div className={_.text.data.container.value}>
            {check(_.text.data.large_text.value)&&<h4
              dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }}
              className={_.text.data.large_text_style.value}
            ></h4>}
            {check(_.text.data.small_text.value)&&<p
              dangerouslySetInnerHTML={{ __html: _.text.data.small_text.value }}
              className={_.text.data.small_text_style.value}
            ></p>}
            {(check(_.buttons.data.button_1.value)|| _.buttons.data.button_2.value )&&<div className={_.buttons.data.container.value}>
              {check(_.buttons.data.button_1.value)&&<button
                className={_.buttons.data.button_1_style.value}
                type="button"
              >
                {_.buttons.data.button_1.value}
              </button>}
              {check(_.buttons.data.button_2.value)&&<button
                className={_.buttons.data.button_2_style.value}
                type="button"
              >
                {_.buttons.data.button_2.value}
              </button>}
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
