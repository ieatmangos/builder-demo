import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: {data:{inner:''}},
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "CallToAction hds-container bg-primary animation duration-300  hds-text-color "
      },
      section: {
        label: "Section Styles",
        value: "hds-section flex flex-wrap md:justify-center text-center "
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: 'Layout Styles',
        value: 'w-full max-w-xl m-auto'
      }
    }
  },
  text: {
    data: {
      large_text_style: {
        label: "Large Text Style",
        value: 'hds-title__medium hds-title-color mb-sm md:mb-md font-black'
      },
      large_text: {
        label: "Large Text",
        value: "Since wire-frame renderings are relatively simple and super fast to calculate, high screen",
        rte: true
      },
      small_text_style: {
        label: "Small Text Style",
        value: "hds-copy mb-xs md:mb-sm"
      },
      small_text: {
        label: "Small Text",
        value:
          "Features",
        rte: true
      }
    }
  },
  button: {
    data: {
      style: {
        label: 'Style',
        value: 'hds-btn hds-btn__secondary'
      },
      text: {
        label: 'Button',
        value: 'Start'
      },
    }
  },
  
}

const CallToActionV3 = ({id}) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);


  return (
    <section id={id} className={_.section_styles.data.container.value}>
        <div className={_.section_styles.data.section.value}>
          <div className={_.layout.data.layout.value}>
            <p dangerouslySetInnerHTML={{ __html: _.text.data.small_text.value }} className={_.text.data.small_text_style.value}></p>
            <h4 dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }} className={_.text.data.large_text_style.value}>
              
            </h4>
            <button className={_.button.data.style.value} type="button">
              {_.button.data.text.value}
            </button>
          </div>
        </div>
    </section>
  );
};
export default CallToActionV3;
