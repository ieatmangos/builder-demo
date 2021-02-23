import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Hero hds-container bg-primary text-white"
      },
      section: {
        label: "Section Styles",
        value: "hds-section"
      }
    }
  },
  image: {
    data: {
      container: {
        label: "Container",
        value: "w-full md:w-1/2 md:absolute right-0 inset-y-0 overflow-hidden"
      },
      image_style: {
        label: "Image Style",
        value:
          "object-cover min-w-full min-h-full transition ease-out duration-300 transform scale-100 hover:scale-105"
      },
      image: {
        label: "Image",
        value: "/images/demo/light.png",
        image: true
      }
    }
  },
  text: {
    data: {
      container: {
        label: "Container",
        value: "max-w-md mx-auto lg:mx-0 text-center lg:text-left z-10 lg:pr-sm"
      },
      small_text_style: {
        label: "Small Text Style",
        value: "hds-legal mb-sm"
      },
      small_text: {
        label: "Small Text",
        value: "New Edition",
        rte: true
      },
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__large text-white mb-sm font-black "
      },
      large_text: {
        label: "Large Text",
        value: "Help Project Team Collaborate More Effectively",
        rte: true
      },
      medium_text_style: {
        label: "Medium Text Style",
        value: "hds-copy mb-md"
      },
      medium_text: {
        label: "Medium Text",
        value:
          "Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases",
        rte: true
      }
    }
  },
  form: {
    data: {
      form: {
        label: "Form",
        value: "flex flex-wrap md:flex-no-wrap gap-xs"
      },
      toggle_show_input: {
        label: "Toggle Show Input",
        value: true,
        toggle: true
      },
      input: {
        label: "Input",
        value: "hds-form-input flex-1"
      },
      place_holder: {
        label: "Place Holder",
        value: "Email"
      },
      toggle_show_button: {
        label: "Toggle Show Button",
        value: true,
        toggle: true
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__light w-full md:w-auto"
      },
      button: {
        label: "Button",
        value: "Button"
      }
    }
  }
};

const HeroV3 = ({ id }) => {
  const {_, check} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.image.data.container.value}>
        <img
          className={_.image.data.image_style.value}
          src={_.image.data.image.value}
          alt=""
        />
      </div>
      <div className={_.section_styles.data.section.value}>
        <div className={_.text.data.container.value}>
          {check(_.text.data.small_text.value)&&<p
            dangerouslySetInnerHTML={{ __html: _.text.data.small_text.value }}
            className={_.text.data.small_text_style.value}
          ></p>}
          {check(_.text.data.large_text.value)&&<h4
            dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }}
            className={_.text.data.large_text_style.value}
          ></h4>}
          {check(_.text.data.medium_text.value)&&<p
            dangerouslySetInnerHTML={{ __html: _.text.data.medium_text.value }}
            className={_.text.data.medium_text_style.value}
          ></p>}
          <form className={_.form.data.form.value}>
          {check(_.form.data.toggle_show_input.value)&&<input
              className={_.form.data.input.value}
              type="email"
              placeholder={_.form.data.place_holder.value}
            />}
            {check(_.form.data.toggle_show_button.value)&&<button className={_.form.data.button_style.value} type="submit">
              {_.form.data.button.value}
            </button>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroV3;
