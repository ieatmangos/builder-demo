import React from "react";
import { useEdit, useMyData } from "../edit";
const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "CallToAction hds-container bg-white  hds-text-color text-center"
      },
      section: {
        label: "Section Styles",
        value: "hds-section"
      }
    }
  },
  text: {
    data: {
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__large hds-title-color pb-sm font-black"
      },
      large_text: {
        label: "Large Text",
        value: "Blueprint Wireframe",
        rte: true
      },
      small_text_style: {
        label: "Small Text Style",
        value: "hds-copy mb-md"
      },
      small_text: {
        label: "Small Text",
        value:
          "Since wire-frame renderings are relatively simple and fast to calculate, they are often used in good cases where a high screen needed",
        rte: true
      }
    }
  },
  buttons: {
    data: {
      container: {
        label: "Container",
        value: "grid md:grid-cols-2 gap-xs md:gap-sm max-w-md mx-auto"
      },
      button_1_style: {
        label: "Button 1 Style",
        value: "hds-btn hds-btn__primary-hollow "
      },
      button_1: {
        label: "Button 1",
        value: "Button"
      },
      button_2_style: {
        label: "Button 2 Style",
        value: "hds-btn hds-btn__primary "
      },
      button_2: {
        label: "Button 2",
        value: "Subscribe"
      }
    }
  }
};
const CallToActionV4 = ({ id }) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <h4
          dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }}
          className={_.text.data.large_text_style.value}
        ></h4>
        <p
          dangerouslySetInnerHTML={{ __html: _.text.data.small_text.value }}
          className={_.text.data.small_text_style.value}
        ></p>
        <div className={_.buttons.data.container.value}>
          <button className={_.buttons.data.button_1_style.value} type="button">
            {_.buttons.data.button_1.value}
          </button>
          <button className={_.buttons.data.button_2_style.value} type="button">
            {_.buttons.data.button_2.value}
          </button>
        </div>
      </div>
    </section>
  );
};
export default CallToActionV4;
