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
        value: "grid max-w-xl mx-auto"
      }
    }
  },
  form_styles: {
    data: {
      container: {
        label: "Container",
        value: "grid gap-sm"
      },
      input_style: {
        label: "Input Style",
        value: "hds-form-input"
      },
      large_text: {
        label: "Large Text Style",
        value: "hds-title__large font-black mb-sm md:mb-md"
      },
      link_one_style: {
        label: "Sign In Style",
        value: "hds-copy float-right"
      },
      link_two_style: {
        label: "Forgot Paswword Style",
        value: "hds-copy my-xs"
      },
    }
  },
  text: {
    data: {
      large_text: {
        label: "Large Text",
        value: "A Default Title"
      },
      link_1: {
        label: "Sign In",
        value: "Sign In"
      },
      input_1: {
        label: "Input 1 Placeholder",
        value: "Email"
      },
      input_2: {
        label: "Input 2 Placeholder",
        value: "Password"
      },
      link_2: {
        label: "Forgot Password",
        value: "Forgot Password"
      },
    }
  },
  button: {
    data: {
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary"
      },
      button: {
        label: "Button",
        value: "Sign up"
      },
    }
  }
};

const FormV3 = ({ id }) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          <h4 className={_.form_styles.data.large_text.value}>
            {_.text.data.large_text.value}
            <a href="/" className={_.form_styles.data.link_one_style.value}>
              {_.text.data.link_1.value}
            </a>
          </h4>
          <div className={_.form_styles.data.container.value}>
            <input
              type="text"
              className={_.form_styles.data.input_style.value}
              placeholder={_.text.data.input_1.value}
            />
            <input
              type="text"
              className={_.form_styles.data.input_style.value}
              placeholder={_.text.data.input_2.value}
            />
          </div>
          <a href="/" className={_.form_styles.data.link_two_style.value}>
            <p className="inline-flex">{_.text.data.link_2.value}</p>
          </a>
          <button className={_.button.data.button_style.value}>
            {_.button.data.button.value}
          </button>
        </div>
      </div>
    </section>
  );
};
export default FormV3;
