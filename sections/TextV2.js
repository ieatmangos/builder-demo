import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: {data:{inner:''}},
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Hero hds-container bg-white hds-text-color"
      },
      section: {
        label: "Section Styles",
        value:
          "hds-section"
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: "Layout",
        value: "grid gap-lg"
      }
    }
  },
  text: {
    data: {
      container: {
        label: "Container",
        value: "flex flex-col gap-sm"
      },
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__small hds-title-color font-bold "
      },
      small_text_style: {
        label: "Small Text Style",
        value: "hds-copy"
      },
      large_text_1: {
        label: "Large Text 1",
        value: "The relationship"
      },
      large_text_2: {
        label: "Large Text 2",
        value: "The relationship"
      },
      small_text_11: {
        label: "Small Text 1/1",
        value:
          "Wireframes are generally created by business analysts, user experience designers, developers, visual designers, and by those with expertise"
      },
      small_text_12: {
        label: "Small Text 1/2",
        value:
          "The navigation system provides a set of screen elements that allow the user to move page to page through the website. The navigation design should communicate the relationship between the links it contains"
      },
      small_text_21: {
        label: "Small Text 2/1",
        value:
          "Wireframes are generally created by business analysts, user experience designers, developers, visual designers, and by those with expertise"
      },
      small_text_22: {
        label: "Small Text 2/2",
        value:
          "The navigation system provides a set of screen elements that allow the user to move page to page through the website. The navigation design should communicate the relationship between the links it contains"
      }
    }
  }
};
const TextV2 = ({ id }) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          <div className={_.text.data.container.value}>
            <h3 className={_.text.data.large_text_style.value}>
              {_.text.data.large_text_1.value}
            </h3>
            <p className={_.text.data.small_text_style.value}>
              {_.text.data.small_text_11.value}
            </p>
            <p className={_.text.data.small_text_style.value}>
              {_.text.data.small_text_12.value}
            </p>
          </div>
          <div className={_.text.data.container.value}>
            <h3 className={_.text.data.large_text_style.value}>
              {_.text.data.large_text_2.value}
            </h3>
            <p className={_.text.data.small_text_style.value}>
              {_.text.data.small_text_21.value}
            </p>
            <p className={_.text.data.small_text_style.value}>
              {_.text.data.small_text_22.value}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TextV2;
