import React from "react";
import { useEdit, useMyData } from "../edit";
const defaults = {
  focus_element: {data:{inner:''}},
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "CallToAction hds-container bg-white hds-text-color "
      },
      section: {
        label: "Section Styles",
        value:
        "hds-section flex flex-wrap md:justify-center "
      }
    }
  },
  layout:{
    data:{
      layout:{
        label:'Container Layout',
        value: 'w-full',
      },
      inside_layout: {
        label: 'Inside Layout',
        value: 'flex justify-between flex-wrap md:flex-no-wrap  '
      }
    }
  },
  text: {
    data: {
      small_text_style: {
        label: "Small Text Style",
        value: "hds-copy mb-xs md:mb-sm"
      },
      small_text: {
        label: "Small Text",
        value:
          "Great updates",
        rte: true,
      },
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__medium hds-title-color mb-sm md:mb-0 max-w-3xl font-black"
      },
      large_text: {
        label: "Large Text",
        value: "Color choices are not included, different values in color can be represented in.",
        rte: true,
      },
    }
  },
  button: {
    data: {
      button_style: {
        label: "Button Style",
        value: "ml-auto lg:ml-0"
      },
      button:{
        label: 'Button',
        value: ''
      },
      icon_style:{
        label: 'Icon Style',
        value: '',
      },
      icon:{
        label: 'Icon',
        value: '/images/svg/arrowInCircle.svg',
        image: true,
      },
    }
  }
};


const CallToActionV5 = ({id}) => {
  const {_,check} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
    <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          {check(_.text.data.small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.text.data.small_text.value }} className={_.text.data.small_text_style.value}></p>}
          <div className={_.layout.data.inside_layout.value}>
            {check(_.text.data.large_text.value)&&<h4 dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }} className={_.text.data.large_text_style.value}></h4>}
            {(check(_.button.data.icon.value) || check(_.button.data.button_style.value))&&<button type="button" className={_.button.data.button_style.value}>
              {check(_.button.data.button.value)&&_.button.data.button.value}
              {check(_.button.data.icon.value) &&<img
                className={_.button.data.icon_style.value}
                src={_.button.data.icon.value}
                alt="person"
              />}
            </button>}
          </div>
        </div>
      </div>
   
    </section>
  );
};
export default CallToActionV5;
