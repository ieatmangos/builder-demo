import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "CallToAction hds-container bg-white hds-text-color "
      },
      section: {
        label: "Section Styles",
        value:
          "hds-section  flex flex-wrap md:justify-center text-left md:text-center "
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: "Layout",
        value: "w-full max-w-xl m-auto"
      }
    }
  },
  text: {
    data: {
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__large hds-title-color mb-sm font-black "
      },
      large_text: {
        label: "Large Text",
        value: "Blueprint Wireframes",
        rte: true
      },
      small_text_style: {
        label: "Small Text Style",
        value: "hds-copy mb-sm text-left md:text-center"
      },
      small_text: {
        label: "Small Text",
        value:
          "Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases where.",
        rte: true
      },
      bottom_copy_style: {
        label: "Legal Text Style",
        value: "hds-legal"
      },
      bottom_copy: {
        label: "Legal Text",
        value: "Since wire-frame renderings",
        rte: true
      }
    }
  },
  button: {
    data: {
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary mb-sm"
      },
      button: {
        label: "Button",
        value: "try"
      }
    }
  }
};
const CallToActionV2 = ({ id }) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          <h4
            dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }}
            className={_.text.data.large_text_style.value}
          ></h4>
          <p
            dangerouslySetInnerHTML={{ __html: _.text.data.small_text.value }}
            className={_.text.data.small_text_style.value}
          ></p>
          <button
            dangerouslySetInnerHTML={{ __html: _.button.data.button.value }}
            className={_.button.data.button_style.value}
            type="button"
          ></button>
          <p
            dangerouslySetInnerHTML={{ __html: _.text.data.bottom_copy.value }}
            className={_.text.data.bottom_copy_style.value}
          ></p>
        </div>
      </div>
    </section>
  );
};
export default CallToActionV2;
