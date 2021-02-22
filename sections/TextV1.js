import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Text hds-container bg-white hds-text-color"
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
        value: "grid sm:grid-cols-2 gap-sm sm:gap-lg"
      }
    }
  },
  text: {
    data: {
      large_text_style: {
        label: "Large Text Style",
        value:
          "max-w-sm hds-title__large hds-title-color hds-title-color font-black"
      },
      large_text: {
        label: "Large Text",
        value: "Say Goodbye to Sprays",
        rte: true,
      },
      small_text_style: {
        label: "Small Text Style",
        value: "md:col-start-2 max-w-xl mb-sm ml-auto hds-copy mb-sm"
      },
      small_text: {
        label: "Small Text",
        value:
          " With Thermacell’s Zone Mosquito Repellent technology, stop mosquitoes before they get close enough to bite or bother you. Now you can say goodbye to messy chemical sprays and lotions.",
        rte: true,
      }
    }
  },
};

const TextV1 = ({ id }) => {
  const { _, check } = useEdit(defaults, id);
  useMyData(id, defaults);

  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          {check(_.text.data.large_text.value)&&<h4
            dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }}
            className={_.text.data.large_text_style.value}
          ></h4>}
          {check(_.text.data.small_text.value)&&<p
            dangerouslySetInnerHTML={{
              __html: _.text.data.small_text.value
            }}
            className={_.text.data.small_text_style.value}
          ></p>}
        </div>
      </div>
    </section>
  );
};
export default TextV1;
