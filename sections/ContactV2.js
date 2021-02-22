import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: {data:{inner:''}},
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Contact hds-container bg-white hds-text-color"
      },
      section: {
        label: "Section Styles",
        value: "hds-section"
      }
    }
  },
  layout:{
    data:{
      layout:{
        label: 'Layout',
        value:''
      }
    }
  },
  text: {
    data: {
      container: {
        label: "Container",
        value: 'text-center'
      },
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__large hds-title-color font-bold mb-xs sm:mb-sm"
      },
      large_text: {
        label: "Large Text",
        value: "Got questions?",
        rte: true,
      },
      small_text_style: {
        label: "Small Text Style",
        value: "hds-copy mb-sm sm:mb-md"
      },
      small_text: {
        label: "Small Text",
        value: "Contact one of our departments to solve your problem",
        rte: true,
      }
    }
  },

  shared_cards:{
    data:{
      layout: {
        label: "Card Layout",
        value: "grid grid-cols-1 sm:grid-cols-3 gap-sm"
      },
      shared_container: {
        label: "Shared Card Container",
        value: "flex flex-col text-center py-md px-sm bg-primary rounded-md"
      },
      shared_large_text_style: {
        label: "Shared Large Text Style",
        value: "mb-xs font-bold"
      },
      shared_small_text_style: {
        label: "Shared Small Text Style",
        value: "hds-copy mb-sm flex-1"
      },
      shared_icon_style: {
        label: "Icon Style",
        value: "mb-sm mx-auto"
      },
    }
  },
  card_1: {
    data: {
      card_container: {
        label: "Card Container",
        value: ""
      },
      icon: {
        label: "Icon",
        value: "/images/svg/video.svg",
        image: true,
      },
      large_text: {
        label: "Large Text",
        value: "Design",
        rte: true,
      },
      small_text: {
        label: "Small Text",
        value: "Aside from websites, wireframes are utilized for the prototyping",
        rte: true,
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__light"
      },
      button: {
        label: "Button",
        value: "Button"
      }
    }
  },
  card_2: {
    data: {
      card_container: {
        label: "Card Container",
        value: ""
      },
      icon: {
        label: "Icon Style",
        value: "/images/svg/basket.svg",
        image: true,
      },
      large_text: {
        label: "Large Text",
        value: "Design",
        rte: true,
      },
      small_text: {
        label: "Small Text",
        value: "Aside from websites, wireframes are utilized for the prototyping",
        rte: true,
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__light"
      },
      button: {
        label: "Button",
        value: "Button"
      }
    }
  },
  card_3: {
    data: {
      card_container: {
        label: "Card Container",
        value: ""
      },
      icon: {
        label: "Icon ",
        value: "/images/svg/checkmark.svg",
        image: true,
      },
      large_text: {
        label: "Large Text",
        value: "Design",
        rte: true,
      },
      small_text: {
        label: "Small Text",
        value: "Aside from websites, wireframes are utilized for the prototyping",
        rte: true,
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__light"
      },
      button: {
        label: "Button",
        value: "Button"
      }
    }
  },
  card_4: {
    data: {
      card_container: {
        label: "Card Container",
        value: ""
      },
      icon: {
        label: "Icon ",
        value: "/images/svg/checkmark.svg",
        image: true,
      },
      large_text: {
        label: "Large Text",
        value: "",
        rte: true,
      },
      small_text: {
        label: "Small Text",
        value:"",
        rte: true,
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__light"
      },
      button: {
        label: "Button",
        value: "Button"
      }
    }
  },
  
};
const ContactV2 = ({ id }) => {
  const {_, check} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value} >
        {(check(_.text.data.small_text.value)||check(_.text.data.large_text.value)) && <div className={_.text.data.container.value}>
          {check(_.text.data.large_text.value)&&<h2 dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }} className={_.text.data.large_text_style.value}></h2>}
          {check(_.text.data.small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.text.data.small_text.value }} className={_.text.data.small_text_style.value}></p>}
        </div>}

        <div className={_.shared_cards.data.layout.value} >

         {(check(_.card_1.data.small_text.value)||check(_.card_1.data.large_text.value)) && <div className={_.shared_cards.data.shared_container.value+' '+_.card_1.data.card_container.value}>
            <img className={_.shared_cards.data.shared_icon_style.value} src={_.card_1.data.icon.value} alt="" />
            {check(_.card_1.data.large_text.value)&&<h6 dangerouslySetInnerHTML={{ __html: _.card_1.data.large_text.value }} className={_.shared_cards.data.shared_large_text_style.value}></h6>}
            {check(_.card_1.data.small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_1.data.small_text.value }} className={_.shared_cards.data.shared_small_text_style.value} ></p>}
            {check(_.card_1.data.button.value)&&<button className={_.card_1.data.button_style.value} type="button">{_.card_1.data.button.value}</button>}
          </div>}


          {(check(_.card_2.data.small_text.value)||check(_.card_2.data.large_text.value)) &&<div className={_.shared_cards.data.shared_container.value+' '+_.card_2.data.card_container.value}>
            <img className={_.shared_cards.data.shared_icon_style.value} src={_.card_2.data.icon.value} alt="" />
            {check(_.card_2.data.large_text.value)&&<h6 dangerouslySetInnerHTML={{ __html: _.card_2.data.large_text.value }} className={_.shared_cards.data.shared_large_text_style.value}></h6>}
            {check(_.card_2.data.small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_2.data.small_text.value }} className={_.shared_cards.data.shared_small_text_style.value} ></p>}
            {check(_.card_2.data.button.value)&&<button className={_.card_2.data.button_style.value} type="button">{_.card_2.data.button.value}</button>}
          </div>}

          {(check(_.card_3.data.small_text.value)||check(_.card_3.data.large_text.value)) &&<div className={_.shared_cards.data.shared_container.value+' '+_.card_3.data.card_container.value}>
            <img className={_.shared_cards.data.shared_icon_style.value} src={_.card_3.data.icon.value} alt="" />
            {check(_.card_3.data.large_text.value)&&<h6 dangerouslySetInnerHTML={{ __html: _.card_3.data.large_text.value }} className={_.shared_cards.data.shared_large_text_style.value}></h6>}
            {check(_.card_3.data.small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_3.data.small_text.value }} className={_.shared_cards.data.shared_small_text_style.value} ></p>}
            {check(_.card_3.data.button.value)&&<button className={_.card_3.data.button_style.value} type="button">{_.card_3.data.button.value}</button>}
          </div>}

           {(check(_.card_4.data.small_text.value)||check(_.card_4.data.large_text.value)) &&<div className={_.shared_cards.data.shared_container.value+' '+_.card_4.data.card_container.value}>
             <img className={_.shared_cards.data.shared_icon_style.value} src={_.card_4.data.icon.value} alt="" />
             {check(_.card_4.data.large_text.value)&&<h6 dangerouslySetInnerHTML={{ __html: _.card_4.data.large_text.value }} className={_.shared_cards.data.shared_large_text_style.value}></h6>}
             {check(_.card_4.data.small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_4.data.small_text.value }} className={_.shared_cards.data.shared_small_text_style.value} ></p>}
             {check(_.card_4.data.button.value)&&<button className={_.card_4.data.button_style.value} type="button">{_.card_4.data.button.value}</button>}
           </div>} 

        </div>
        </div>
      </div>
    </section>
  );
};
export default ContactV2;
