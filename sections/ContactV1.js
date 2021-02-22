import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Contact hds-container bg-white hds-text-color "
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
        label: "",
        value: "grid grid-cols-2 gap-md"
      }
    }
  },
  title: {
    data: {
      title_style: {
        label: "Title Style",
        value: "hds-title__large font-bold col-start-2"
      },
      title: {
        label: "Title",
        value: "Send us a message",
        rte: true
      }
    }
  },
  inputs: {
    data: {
      container: {
        label: "Container",
        value: "flex flex-col gap-sm"
      },
      input_style: {
        label: "Shared Input Style",
        value: "hds-form-input"
      },
      toggle_show_1: {
        label: "Toggle Show 1",
        value: true,
        toggle: true
      },
      placeholder_1: {
        label: "Input 1 Placeholder",
        value: "Email"
      },
      toggle_show_2: {
        label: "Toggle Show 2",
        value: true,
        toggle: true
      },
      placeholder_2: {
        label: "Input 2 Placeholder",
        value: "Subject"
      },
      toggle_show_3: {
        label: "Toggle Show 3",
        value: true,
        toggle: true
      },
      placeholder_3: {
        label: "Text Area 3 Placeholder",
        value: "Password"
      },
      button_style:{
        label: 'Button Style',
        value: 'hds-btn hds-btn__primary self-start'
      },
      button:{
        label: 'Button',
        value: 'Submit'
      }
    }
  },
  details: {
    data: {
      container: {
        label: "Container",
        value: "hds-copy"
      },
      sub_container: {
        label: "Shared Sub Container",
        value: "mb-sm"
      },
      label_style: {
        label: "Shared Label Style",
        value: "mb-xs font-bold"
      },
      toggle_show_card_1: {
        label: "Toggle Show Card 1",
        value: true,
        toggle: true
      },
      card_1_label: {
        label: "Card 1 Label",
        value: "Phone",
        rte: true
      },
      card_1_style: {
        label: "Card 1 Style",
        value: ""
      },
      card_1: {
        label: "Card 1 ",
        value: "+1 848 493 944",
        rte: true
      },
      toggle_show_card_2: {
        label: "Toggle Show Card 2",
        value: true,
        toggle: true
      },
      card_2_label: {
        label: "Card 2 Label",
        value: "Address",
        rte: true
      },
      card_2_style: {
        label: "Card 2 Style",
        value: ""
      },
      card_2: {
        label: "Card 2",
        value: "508 Bridle Avenue Newnan, GA 30263",
        rte: true
      },
      toggle_show_card_3: {
        label: "Toggle Show Card 3",
        value: true,
        toggle: true
      },
      card_3_label: {
        label: "Card 3 Label",
        value: "Socials"
      },
      socials_container: {
        label: "Card 3 Container",
        value: "flex"
      },
      icon_style: {
        label: "Shared Icon Style",
        value: "pr-2"
      },
      icon_1_path: {
        label: "Icon 1",
        value: "/images/svg/instagram.svg",
        image: true
      },
      icon_2_path: {
        label: "Icon 2",
        value: "/images/svg/facebook.svg",
        image: true
      },
      icon_3_path: {
        label: "Icon 3",
        value: "/images/svg/twitter.svg",
        image: true
      },
      icon_4_path: {
        label: "Icon 4",
        value: "/images/svg/google.svg",
        image: true
      }
    }
  }
};

const ContactV1 = ({ id }) => {
  const { _, check } = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          {/* Title */}
          {check(_.title.data.title_style.value) && (
            <h1
              dangerouslySetInnerHTML={{ __html: _.title.data.title.value }}
              className={_.title.data.title_style.value}
            ></h1>
          )}

          {/* Details */}

          <div className={_.details.data.container.value}>
            {/* 1 */}
            {check(_.details.data.toggle_show_card_1.value) && (
              <div className={_.details.data.sub_container.value}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: _.details.data.card_1_label.value
                  }}
                  className={_.details.data.label_style.value}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: _.details.data.card_1.value
                  }}
                  className={_.details.data.card_1_style.value}
                ></p>
              </div>
            )}

            {/* 2 */}
            {check(_.details.data.toggle_show_card_2.value) && (
              <div className={_.details.data.sub_container.value}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: _.details.data.card_2_label.value
                  }}
                  className={_.details.data.label_style.value}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: _.details.data.card_2.value
                  }}
                  className={_.details.data.card_2_style.value}
                ></p>
              </div>
            )}

            {/* 3 */}
            {check(_.details.data.toggle_show_card_3.value) && (
              <div className={_.details.data.sub_container.value}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: _.details.data.card_3_label.value
                  }}
                  className={_.details.data.label_style.value}
                ></p>

                {/* Socials */}

                <div className={_.details.data.socials_container.value}>
                  <a className={_.details.data.icon_style.value} href="/">
                    <img src={_.details.data.icon_1_path.value} alt="" />
                  </a>
                  <a className={_.details.data.icon_style.value} href="/">
                    <img src={_.details.data.icon_2_path.value} alt="" />
                  </a>
                  <a className={_.details.data.icon_style.value} href="/">
                    <img src={_.details.data.icon_3_path.value} alt="" />
                  </a>
                  <a className={_.details.data.icon_style.value} href="/">
                    <img src={_.details.data.icon_4_path.value} alt="" />
                  </a>
                </div>
              </div>
            )}
          </div>
          {/* Inputs */}
          <div id={`form-${id}`} className={_.inputs.data.container.value}>
            {check(_.inputs.data.toggle_show_1.value) && (
              <input
                type="text"
                className={_.inputs.data.input_style.value}
                placeholder={_.inputs.data.placeholder_1.value}
              />
            )}
            {check(_.inputs.data.toggle_show_2.value) && (
              <input
                type="text"
                className={_.inputs.data.input_style.value}
                placeholder={_.inputs.data.placeholder_2.value}
              />
            )}
            {check(_.inputs.data.toggle_show_3.value) && (
              <textarea
                type="text"
                className={_.inputs.data.input_style.value}
                placeholder={_.inputs.data.placeholder_3.value}
              />
            )}
             <button form={`form-${id}`} type='submit' className={_.inputs.data.button_style.value}>
            {_.inputs.data.button.value}
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactV1;
