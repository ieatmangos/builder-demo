import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Feature hds-container bg-white hds-text-color"
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
        value: "grid sm:grid-cols-2 gap-md "
      }
    }
  },
  text:{
    data: {
      title_style:{
        label: 'Title Style',
        value: 'hds-title__medium hds-title-color mb-md'
      },
      title:{
        label: 'Title',
        value: 'The goal is to facilitate useability'
      }
    }
  },
  features: {
    data: {
      card_container: {
        label: "Shared Card Container",
        value: "flex gap-xs flex-col md:flex-row md:items-start "
      },
      text_container: {
        label: "Shared Text Container",
        value: "flex flex-col"
      },
      icon_style:{
        label: 'Shared Icon Style',
        value: ''
      },
      large_text_style: {
        label: "Shared Large Text Style",
        value: "mb-xs font-bold"
      },
      small_text_style: {
        label: "Shared Small Text Style",
        value: "flex-1"
      },
      f1_icon: {
        label: "F1 Icon",
        value: "/images/svg/person2.svg",
        image: true
      },
      f1_large_text: {
        label: "F1 Large Text",
        value: "Super Organized",
        rte: true
      },
      f1_small_text: {
        label: "F1 Small Text",
        value: "Since wire-frame renderings are relatively simple and fast to calculate",
        rte: true
      },
      f2_icon: {
        label: "F2 Icon",
        value: "/images/svg/person2.svg",
        image: true
      },
      f2_large_text: {
        label: "F2 Large Text",
        value: "Super Organized",
        rte: true
      },
      f2_small_text: {
        label: "F2 Small Text",
        value: "Since wire-frame renderings are relatively simple and fast to calculate",
        rte: true
      },
      f3_icon: {
        label: "F3 Icon",
        value: "/images/svg/person2.svg",
        image: true
      },
      f3_large_text: {
        label: "F3 Large Text",
        value: "Super Organized",
        rte: true
      },
      f3_small_text: {
        label: "F3 Small Text",
        value: "Since wire-frame renderings are relatively simple and fast to calculate",
        rte: true
      },
      f4_icon: {
        label: "F4 Icon",
        value: "/images/svg/person2.svg",
        image: true
      },
      f4_large_text: {
        label: "F4 Large Text",
        value: "Super Organized",
        rte: true
      },
      f4_small_text: {
        label: "F4 Small Text",
        value: "Since wire-frame renderings are relatively simple and fast to calculate",
        rte: true
      },
      f5_icon: {
        label: "F5 Icon",
        value: "/images/svg/person2.svg",
        image: true
      },
      f5_large_text: {
        label: "F5 Large Text",
        value: "Super Organized",
        rte: true
      },
      f5_small_text: {
        label: "F5 Small Text",
        value: "Since wire-frame renderings are relatively simple and fast to calculate",
        rte: true
      },
      f6_icon: {
        label: "F6 Icon",
        value: "/images/svg/person2.svg",
        image: true
      },
      f6_large_text: {
        label: "F6 Large Text",
        value: "Super Organized",
        rte: true
      },
      f6_small_text: {
        label: "F6 Small Text",
        value: "Since wire-frame renderings are relatively simple and fast to calculate",
        rte: true
      },
      
    }
  }
}
const FeatureV11 = ({id}) => {
  const { _, check } = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        {/* Title */}
        {check(_.text.data.title.value)&&<h2 dangerouslySetInnerHTML={{ __html: _.text.data.title.value }} className={_.text.data.title_style.value} ></h2>}
          
          <div className={_.layout.data.layout.value}>
            {/* 1 */}
            {(check(_.features.data.f1_large_text.value)||check(_.features.data.f1_small_text.value))&&<div className={_.features.data.card_container.value}>
              {check(_.features.data.f1_icon.value)&&<img
                className={_.features.data.icon_style.value}
                src={_.features.data.f1_icon.value}
                alt=""
              />}
              <div className={_.features.data.text_container.value}>
                {check(_.features.data.f1_large_text.value)&&<h3 dangerouslySetInnerHTML={{ __html: _.features.data.f1_large_text.value }} className={_.features.data.large_text_style.value}></h3>}
                {check(_.features.data.f1_small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.features.data.f1_small_text.value }} className={_.features.data.small_text_style.value}></p>}
              </div>
            </div>}
            {/* 2 */}
            {(check(_.features.data.f2_large_text.value)||check(_.features.data.f2_small_text.value))&&<div className={_.features.data.card_container.value}>
              {check(_.features.data.f2_icon.value)&&<img
                className={_.features.data.icon_style.value}
                src={_.features.data.f2_icon.value}
                alt=""
              />}
              <div className={_.features.data.text_container.value}>
                {check(_.features.data.f2_large_text.value)&&<h3 dangerouslySetInnerHTML={{ __html: _.features.data.f2_large_text.value }} className={_.features.data.large_text_style.value}></h3>}
                {check(_.features.data.f2_small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.features.data.f2_small_text.value }} className={_.features.data.small_text_style.value}></p>}
              </div>
            </div>}
            {/* 3 */}
            {(check(_.features.data.f3_large_text.value)||check(_.features.data.f3_small_text.value))&&<div className={_.features.data.card_container.value}>
              {check(_.features.data.f3_icon.value)&&<img
                className={_.features.data.icon_style.value}
                src={_.features.data.f3_icon.value}
                alt=""
              />}
              <div className={_.features.data.text_container.value}>
                {check(_.features.data.f3_large_text.value)&&<h3 dangerouslySetInnerHTML={{ __html: _.features.data.f3_large_text.value }} className={_.features.data.large_text_style.value}></h3>}
                {check(_.features.data.f3_small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.features.data.f3_small_text.value }} className={_.features.data.small_text_style.value}></p>}
              </div>
            </div>}
            {/* 4 */}
            {(check(_.features.data.f4_large_text.value)||check(_.features.data.f4_small_text.value))&&<div className={_.features.data.card_container.value}>
              {check(_.features.data.f4_icon.value)&&<img
                className={_.features.data.icon_style.value}
                src={_.features.data.f4_icon.value}
                alt=""
              />}
              <div className={_.features.data.text_container.value}>
                {check(_.features.data.f4_large_text.value)&&<h3 dangerouslySetInnerHTML={{ __html: _.features.data.f4_large_text.value }} className={_.features.data.large_text_style.value}></h3>}
                {check(_.features.data.f4_small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.features.data.f4_small_text.value }} className={_.features.data.small_text_style.value}></p>}
              </div>
            </div>}
            {/* 5 */}
            {(check(_.features.data.f5_large_text.value)||check(_.features.data.f5_small_text.value))&&<div className={_.features.data.card_container.value}>
              {check(_.features.data.f5_icon.value)&&<img
                className={_.features.data.icon_style.value}
                src={_.features.data.f5_icon.value}
                alt=""
              />}
              <div className={_.features.data.text_container.value}>
                {check(_.features.data.f5_large_text.value)&&<h3 dangerouslySetInnerHTML={{ __html: _.features.data.f5_large_text.value }} className={_.features.data.large_text_style.value}></h3>}
                {check(_.features.data.f5_small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.features.data.f5_small_text.value }} className={_.features.data.small_text_style.value}></p>}
              </div>
            </div>}
            {/* 6 */}
            {(check(_.features.data.f6_large_text.value)||check(_.features.data.f6_small_text.value))&&<div className={_.features.data.card_container.value}>
              {check(_.features.data.f6_icon.value)&&<img
                className={_.features.data.icon_style.value}
                src={_.features.data.f6_icon.value}
                alt=""
              />}
              <div className={_.features.data.text_container.value}>
                {check(_.features.data.f6_large_text.value)&&<h3 dangerouslySetInnerHTML={{ __html: _.features.data.f6_large_text.value }} className={_.features.data.large_text_style.value}></h3>}
                {check(_.features.data.f6_small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.features.data.f6_small_text.value }} className={_.features.data.small_text_style.value}></p>}
              </div>
            </div>}            
          </div>
        </div>

    </section>
  );
};
export default FeatureV11;
