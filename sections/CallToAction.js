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
      pretitle_style: {
        label: "Pre Title Style",
        value: "hds-copy mb-xs md:mb-sm"
      },
      pretitle: {
        label: "Pre Title",
        value:
          "Features",
        rte: true
      },
      title_style: {
        label: "Title Style",
        value: "hds-title__large hds-title-color mb-sm font-black "
      },
      title: {
        label: "Title Text",
        value: "Blueprint Wireframes",
        rte: true
      },
      body_style: {
        label: "Body Style",
        value: "hds-copy mb-sm text-left md:text-center"
      },
      body: {
        label: "Body",
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
  buttons: {
    data: {
      container: {
        label: "Container",
        value: "grid md:grid-cols-2 gap-xs md:gap-sm max-w-md mx-auto mb-sm"
      },
      button_1_style: {
        label: "Button 1 Style",
        value: "hds-btn hds-btn__primary-hollow "
      },
      button_1: {
        label: "Button 1",
        value: "Buy"
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

const CallToAction = ({ id }) => {
  const {_, check} = useEdit(defaults, id);
  useMyData(id, defaults);

  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          {/* Pretitle */}
          {check(_.text.data.pretitle.value)&&<p dangerouslySetInnerHTML={{ __html: _.text.data.pretitle.value }} className={_.text.data.pretitle_style.value}></p>}

          {/* Title */}
         {check(_.text.data.title.value) && <h4
            dangerouslySetInnerHTML={{ __html: _.text.data.title.value }}
            className={_.text.data.title_style.value}
          ></h4>}
          {/* Body */}
          {check(_.text.data.body.value)&&<p
            dangerouslySetInnerHTML={{ __html: _.text.data.body.value }}
            className={_.text.data.body_style.value}
          ></p>}
          {/* Buttons */}
        <div className={_.buttons.data.container.value}>
          {check(_.buttons.data.button_1.value)&&<button className={_.buttons.data.button_1_style.value} type="button">
            {_.buttons.data.button_1.value}
          </button>}
          {check(_.buttons.data.button_2.value)&&<button className={_.buttons.data.button_2_style.value} type="button">
            {_.buttons.data.button_2.value}
          </button>}
        </div>
        {/* Bottom Text */}
        {check(_.text.data.bottom_copy.value)&&  <p
            dangerouslySetInnerHTML={{ __html: _.text.data.bottom_copy.value }}
            className={_.text.data.bottom_copy_style.value}
          ></p>}
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
