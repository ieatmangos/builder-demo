import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "hds-container bg-white relative hds-text-color"
      },
      section: {
        label: "Section Styles",
        value: "hds-section"
      }
    }
  },
  text: {
    data: {
      container: {
        label: "Container",
        value: "max-w-sm"
      },
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__large font-black mb-4"
      },
      large_text: {
        label: "Large Text",
        value: "Simple Process For The Reproduction of Any Document",
        rte: true
      },
      small_text_style: {
        label: "Body Style",
        value: "hds-copy mb-6 "
      },
      small_text: {
        label: "Small Text",
        value:
          "Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases",
        rte: true
      }
    }
  },
  button: {
    data: {
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__secondary"
      },
      button: {
        label: "Button",
        value: "Button",
        input: true
      }
    }
  },
  image: {
    data: {
      container: {
        label: "Container",
        value: "absolute inset-0"
      },
      image_style: {
        label: "Image Style",
        value: "object-cover w-full h-full"
      },
      image: {
        label: "Image",
        value: "/images/products/product-image.jpeg",
        image: true
      }
    }
  }
};
const HeroV5 = ({ id }) => {
  const {_} = useEdit(defaults, id);
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
          <h4
            dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }}
            className={_.text.data.large_text_style.value}
          ></h4>
          <p
            dangerouslySetInnerHTML={{ __html: _.text.data.small_text.value }}
            className={_.text.data.small_text_style.value}
          ></p>
          <button className={_.button.data.button_style.value}>
            {_.button.data.button.value}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroV5;
