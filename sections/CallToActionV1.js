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
        value: "hds-section max-w-3xl m-auto text-center"
      }
    }
  },
  text: {
    data: {
      small_text_style: {
        label: "Small Text Style",
        value: "hds-copy text-left md:text-center mb-xs md:mb-sm"
      },
      small_text: {
        label: "Small Text",
        value: "Great Updates",
        rte: true
      },
      large_text_style: {
        label: "Large Text Style",
        value:
          "hds-title__large pb-sm md:pb-lg text-left md:text-center font-black"
      },
      large_text: {
        label: "Large Text",
        value: "Try something totally different and cool right now.",
        rte: true
      },
    }
  },
  input: {
    data: {
      container: {
        label: "Input Container",
        value: "flex flex-wrap justify-center w-full mb-sm"
      },
      input_style: {
        label: "Input Style",
        value:
          "flex-1 md:max-w-md bg-white py-xs px-sm border w-full md:w-auto mb-xs md:mb-0"
      },
      input_placeholder: {
        label: "Input Placeholder",
        value: "Username or Email"
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary w-full md:w-auto md:ml-xs"
      },
      button: {
        label: "Button",
        value: "Subscribe"
      }
    }
  },
  bottom_text: {
    data: {
      text_style: {
        label: "Text Style",
        value: "hds-legal text-center"
      },
      text: {
        label: "Text",
        value:
          "Attentiion! Offer expires in 30 days. Make sure not to miss this opportunity",
        rte: true
      },
    }
  }
};
const CallToActionV1 = ({ id }) => {
  const {_, check} = useEdit(defaults, id);
  useMyData(id, defaults);

  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        {check(_.text.data.small_text.value)&&<p
          dangerouslySetInnerHTML={{ __html: _.text.data.small_text.value }}
        ></p>}
        {check(_.text.data.large_text_style.value)&&<h4
          dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }}
          className={_.text.data.large_text_style.value}
        ></h4>}
        <form className={_.input.data.container.value}>
          <input
            className={_.input.data.input_style.value}
            type="email"
            placeholder={_.input.data.input_placeholder.value}
          />
          <button className={_.input.data.button_style.value} type="submit">
            {_.input.data.button.value}
          </button>
        </form>
        {check(_.bottom_text.data.text_style.value)&&<p
          dangerouslySetInnerHTML={{ __html: _.bottom_text.data.text.value }}
          className={_.bottom_text.data.text_style.value}
        ></p>}
      </div>
    </section>
  );
};
export default CallToActionV1;
