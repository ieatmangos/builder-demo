import React from "react";
import { useEdit, useMyData } from "../edit";


const defaults = {
  focus_element: {data:{inner:''}},
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Form hds-container bg-white hds-text-color"
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
        value: "flex flex-wrap md:flex-no-wrap justify-between items-center lg:px-lg z-10"
      },
      bg_color: {
        label: "Background Color",
        value: "absolute inset-y-0 z-0 w-full md:w-4/6  bg-primary"
      }
    }
  },
  left_side: {
    data: {
      container: {
        label: "Container",
        value: "max-w-lg"
      },
      title_style: {
        label: "Title Style",
        value: "hds-title__medium hds-title-color font-bold mb-xs lg:mb-xs"
      },
      title: {
        label: "Title",
        value: "A default Title"
      },
      body_style: {
        label: "Body Style",
        value: "hds-copy"
      },
      body: {
        label: "Body",
        value: "A default Body"
      }
    }
  },

  right_side: {
    data: {
      container: {
        label: "Container",
        value: "p-sm bg-white rounded-md w-full md:w-auto max-w-lg md:mr-0"
      },
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__small hds-title-color font-bold mb-sm text-center"
      },
      large_text: {
        label: "Large Text",
        value: "Contact us"
      },
      small_text_style: {
        label: "Small Text Style",
        value: "text-lg text-center mb-sm"
      },
      small_text: {
        label: "Small Text",
        value: "some text"
      },
      inputs_container: {
        label: "Inputs Container",
        value: "flex flex-col gap-xs my-xs"
      },
      input_wrapper: {
        label: "Input Wrappers",
        value:
          "flex items-center justify-between text-lg border rounded border-gray-300"
      },
      input_styles: {
        label: "Input Styles",
        value: "hds-text-input w-full"
      },
      placeholder_1: {
        label: "Input 1 Placeholder",
        value: "Name"
      },
      placeholder_2: {
        label: "Input 2 Placeholder",
        value: "Email"
      },
      placeholder_3: {
        label: "Input 3 Placeholder",
        value: "Password"
      },
      button_styles: {
        label: "Button Styles",
        value: "hds-btn hds-btn__primary w-full"
      },
      button: {
        label: "Button Text",
        value: "Register Now"
      },
    }
  },
  icons: {
    data: {
      icon_style: {
        label: "Icon Style",
        value: "ml-6 mr-3"
      },
      icon_1: {
        label: "Icon 1",
        value: "/images/svg/person.svg",
        image: true
      },
      icon_2: {
        label: "Icon 2",
        value: "/images/svg/email.svg",
        image: true
      },
      icon_3: {
        label: "Icon 3",
        value: "/images/svg/lock.svg",
        image: true
      }
    }
  }
};

const FormV4 = ({ id }) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);

  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.layout.data.bg_color.value} />

      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          <div className={_.left_side.data.container.value}>
            <h3 className={_.left_side.data.title_style.value}>
              {_.left_side.data.title.value}
            </h3>
            <p className={_.left_side.data.body_style.value}>
              {_.left_side.data.body.value}
            </p>
          </div>
          <div className={_.right_side.data.container.value}>
            <h4 className={_.right_side.data.large_text_style.value}>
              {_.right_side.data.large_text.value}
            </h4>
            <p className={_.right_side.data.small_text_style.value}>
              {_.right_side.data.small_text.value}
            </p>
            <div className={_.right_side.data.inputs_container.value}>
              <div className={_.right_side.data.input_wrapper.value}>
                <img
                  className={_.icons.data.icon_style.value}
                  src={_.icons.data.icon_1.value}
                  alt=""
                />
                <input
                  type="text"
                  className={_.right_side.data.input_styles.value}
                  placeholder={_.right_side.data.placeholder_1.value}
                />
              </div>
              <div className={_.right_side.data.input_wrapper.value}>
                <img
                  className={_.icons.data.icon_style.value}
                  src={_.icons.data.icon_2.value}
                  alt=""
                />
                <input
                  type="text"
                  className={_.right_side.data.input_styles.value}
                  placeholder={_.right_side.data.placeholder_2.value}
                />
              </div>
              <div className={_.right_side.data.input_wrapper.value}>
                <img
                  className={_.icons.data.icon_style.value}
                  src={_.icons.data.icon_3.value}
                  alt=""
                />

                <input
                  type="text"
                  className={_.right_side.data.input_styles.value}
                  placeholder={_.right_side.data.placeholder_3.value}
                />
              </div>
            </div>
            <button className={`${_.right_side.data.button_styles.value}`}>
              {_.right_side.data.button.value}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FormV4;
