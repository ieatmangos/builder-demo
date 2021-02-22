import React from "react";
import { useEdit, useMyData } from "../edit";
const defaults = {
  focus_element: { data: { inner: "" } },
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
        value: "max-w-xl mx-auto"
      }
    }
  },

  text: {
    data: {
      large_text_container: {
        label: "Large Text Container",
        value: "flex justify-between items-center mb-sm md:mb-md"
      },
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__large font-black"
      },
      large_text: {
        label: "Large Text",
        value: "Sign up",
        rte: true
      },
      link_1_style: {
        label: "Link 1 Style",
        value: ""
      },
      link_1: {
        label: "Link 1",
        value: "Sign In"
      },
      link_2_style: {
        label: "Link 2 Style",
        value: "block mt-sm underline"
      },
      link_2: {
        label: "Link 2",
        value: "Forgot Password",
      }
    }
  },
  inputs: {
    data: {
      container: {
        label: "Form Container",
        value: "grid gap-sm"
      },
      input_style: {
        label: "Shared Input Style",
        value: "hds-form-input"
      },
      toggle_show_1: {
        label: "Toggle Show 1",
        value: true,
        toggle: true
      },
      placeholder_1: {
        label: "Input 1 Placeholder",
        value: "Name"
      },
      toggle_show_2: {
        label: "Toggle Show 2",
        value: true,
        toggle: true
      },
      placeholder_2: {
        label: "Input 2 Placeholder",
        value: "Email"
      },
      toggle_show_3: {
        label: "Toggle Show 3",
        value: true,
        toggle: true
      },
      placeholder_3: {
        label: "Input 3 Placeholder",
        value: "Password"
      },
      toggle_show_4: {
        label: "Toggle Show 4",
        value: true,
        toggle: true
      },
      placeholder_4: {
        label: "Input 4 Placeholder",
        value: "Repeat password"
      }
    }
  },
  checkbox: {
    data: {
      toggle_show: {
        label: "Toggle Show",
        value: true,
        toggle: true
      },
      container: {
        label: "Container",
        value: "flex gap-xs items-center mt-sm"
      },
      image_style: {
        label: "Icon Style",
        value: ""
      },
      image: {
        label: "Icon",
        value: "/images/svg/checkbox-selected.svg",
        image: true
      },
      text_style: {
        label: "Text Style",
        value: ""
      },
      text: {
        label: "Text",
        value: "I agree to the Wireframe terms",
        rte: true
      }
    }
  },
  button: {
    data: {
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary mt-sm md:mt-md"
      },
      button: {
        label: "Button",
        value: "Sign up"
      }
    }
  }
};
const Form1 = ({ id }) => {
  const { _, check } = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          <div className={_.text.data.large_text_container.value}>
            {check(_.text.data.large_text.value) && (
              <h4
                dangerouslySetInnerHTML={{
                  __html: _.text.data.large_text.value
                }}
                className={_.text.data.large_text_style.value}
              ></h4>
            )}
            {check(_.text.data.link_1.value)&&<a href="/" className={_.text.data.link_1_style.value}>
              {_.text.data.link_1.value}
            </a>}
          </div>
          <form id={`form-${id}`} className={_.inputs.data.container.value}>
            {check(_.inputs.data.toggle_show_1.value) && (
              <input
                type="text"
                className={_.inputs.data.input_style.value}
                placeholder={_.inputs.data.placeholder_1.value}
              />
            )}
            {check(_.inputs.data.toggle_show_2.value) && (
              <input
                type="text"
                className={_.inputs.data.input_style.value}
                placeholder={_.inputs.data.placeholder_2.value}
              />
            )}
            {check(_.inputs.data.toggle_show_3.value) && (
              <input
                type="text"
                className={_.inputs.data.input_style.value}
                placeholder={_.inputs.data.placeholder_3.value}
              />
            )}
            {check(_.inputs.data.toggle_show_4.value) && (
              <input
                type="text"
                className={_.inputs.data.input_style.value}
                placeholder={_.inputs.data.placeholder_4.value}
              />
            )}
          </form>
          {check(_.checkbox.data.toggle_show.value) && (
            <div className={_.checkbox.data.container.value}>
              <img
                className={_.checkbox.data.image_style.value}
                src={_.checkbox.data.image.value}
                alt="check box selected"
              />
              <p
                dangerouslySetInnerHTML={{ __html: _.checkbox.data.text.value }}
                className={_.checkbox.data.text_style.value}
              ></p>
            </div>
          )}
          {check(_.button.data.button.value)&&<button form={`form-${id}`} type='submit' className={_.button.data.button_style.value}>
            {_.button.data.button.value}
          </button>}
          {check(_.text.data.link_2.value)&&<a href="/" className={_.text.data.link_2_style.value}>
            {_.text.data.link_2.value}
          </a>}
        </div>
      </div>
    </section>
  );
};
export default Form1;
