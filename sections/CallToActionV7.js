import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "CallToAction hds-container bg-white hds-text-color"
      },
      section: {
        label: "Section Styles",
        value: "hds-section "
      }
    }
  },
  color_background: {
    data: {
      style: {
        label: "Color Background",
        value:"bg-primary absolute left-0 top-0 w-full h-1/2 sm:w-1/2 sm:h-full"
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: "Layout",
        value: "w-full grid grid-cols-1 gap-lg sm:grid-cols-2"
      }
    }
  },
  group_1: {
    data: {
      container: {
        label: "Container",
        value: "flex flex-col items-start"
      },

      title_style: {
        label: "Title Style",
        value: "hds-title__medium hds-title-color mb-xs md:mb-sm font-black "
      },
      title: {
        label: "Title",
        value: "Strategy",
        rte: true
      },
      body_style: {
        label: "Body Style",
        value: "hds-copy mb-sm md:mb-md flex-1"
      },
      body: {
        label: "Body",
        value:
          "Wireframes can be pencil drawings or sketches on whiteboard, or they can be",
        rte: true
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__light"
      },
      button: {
        label: "Button",
        value: "View"
      }
    }
  },
  group_2: {
    data: {
      container: {
        label: "Container",
        value: "flex flex-col items-start "
      },

      title_style: {
        label: "Title Style",
        value: "hds-title__medium hds-title-color mb-xs md:mb-sm font-black"
      },
      title: {
        label: "Title",
        value: "Strategy",
        rte: true
      },
      body_style: {
        label: "Body Style",
        value: "hds-copy mb-sm md:mb-md flex-1"
      },
      body: {
        label: "Body",
        value: "Wireframes can be pencil drawings or sketches on whiteboard, or they can be",
        rte: true
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary"
      },
      button: {
        label: "Button",
        value: "View"
      }
    }
  }
};

const CallToActionV7 = ({ id }) => {
  const {_, check} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.color_background.data.style.value} />
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          <div className={_.group_1.data.container.value}>
            
              {check(_.group_1.data.title.value)&&<h4
                dangerouslySetInnerHTML={{ __html: _.group_1.data.title.value }}
                className={_.group_1.data.title_style.value}
              ></h4>}
             {check(_.group_1.data.body.value)&& <p
                dangerouslySetInnerHTML={{ __html: _.group_1.data.body.value }}
                className={_.group_1.data.body_style.value}
              ></p>}
              {check(_.group_1.data.button.value)&&<button
                className={_.group_1.data.button_style.value}
                type="button"
              >
                {_.group_1.data.button.value}
              </button>}
            
          </div>
          <div className={_.group_2.data.container.value}>
           
             {check(_.group_2.data.title.value)&& <h4
                dangerouslySetInnerHTML={{ __html: _.group_2.data.title.value }}
                className={_.group_2.data.title_style.value}
              ></h4>}
              {check(_.group_2.data.body.value)&&<p
                dangerouslySetInnerHTML={{ __html: _.group_2.data.body.value }}
                className={_.group_2.data.body_style.value}
              ></p>}
              {check(_.group_2.data.button.value)&&<button
                className={_.group_2.data.button_style.value}
                type="button"
              >
                {_.group_2.data.button.value}
              </button>}
            </div>
          
        </div>
      </div>
    </section>
  );
};
export default CallToActionV7;
