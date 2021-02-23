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
        label: "Layout",
        value: ""
      }
    }
  },
  title: {
    data: {
      title_style: {
        label: "Title Style",
        value: "hds-title__medium hds-title-color font-black md:w-2/3"
      },
      title: {
        label: "Title",
        value: "It is difficult for designers to assess how closely the wireframe needs to depict actual screen layouts.",
        rte: true
      },
    }
  },
  features: {
    data: {
      card_layout: {
        label: "Card Layout",
        value: "grid sm:grid-cols-3 sm:gap-sm lg:gap-xl",
      },
      shared_card_container: {
        label: "Shared Card Container",
        value: "",
      },
      large_text_style: {
        label: "Shared Label",
        value: "font-bold hds-copy mt-sm mb-xs"
      },
      small_text_style: {
        label: "Shared Body",
        value: "hds-copy"
      },
      shared_container: {
        label: "Shared Image Container",
        value: "relative rounded-md overflow-hidden h-80"
      },
      shared_styles: {
        label: "Shared Image Styles",
        value: "object-cover object-top w-full h-full transition ease-out duration-300 transform scale-100 hover:scale-105"
      },
    }
  },
  card_1:{
    data:{
      container:{
        label: 'Card Container',
        value: 'mt-md sm:mt-xl'
      },
      image_1_container:{
        label: 'Image Container',
        value: '',
      },
      image_1_style:{
        label: 'Image Style',
        value: '',
      },
      image_1: {
        label: "Image",
        value: "/images/demo/dark.png",
        image: true
      },
      f1_large_text: {
        label: "Large Text",
        value: "Feature",
        rte: true
      },
      f1_small_text: {
        label: "Small Text",
        value: "Modern design incorporates various devices such panels, hover",
        rte: true
      },
    }
  },
  card_2:{
    data:{
      container:{
        label: 'Card Container',
        value: 'mt-md '
      },
      image_2_container:{
        label: 'Image Container',
        value: '',
      },
      image_2_style:{
        label: 'Image Style',
        value: '',
      },
      image_2: {
        label: "Image",
        value: "/images/demo/dark.png",
        image: true
      },
      f2_large_text: {
        label: "Large Text",
        value: "Feature",
        rte: true
      },
      f2_small_text: {
        label: "Small Text",
        value: "Modern design incorporates various devices such panels, hover",
        rte: true
      },
    }
  },
  card_3:{
    data:{
      container:{
        label: 'Card Container',
        value: 'mt-md sm:mt-sm'
      },
      image_3_container:{
        label: 'Image Container',
        value: '',
      },
      image_3_style:{
        label: 'Image Style',
        value: '',
      },
      image_3: {
        label: "Image",
        value: "/images/demo/dark.png",
        image: true
      },
      f3_large_text: {
        label: "Large Text",
        value: "Feature",
        rte: true
      },
      f3_small_text: {
        label: "Small Text",
        value: "Modern design incorporates various devices such panels, hover",
        rte: true
      },
    }
  },
};

const FeaturesV4 = ({ id }) => {
  const { _, check } = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <div id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          {check(_.title.data.title.value)&&<h3 dangerouslySetInnerHTML={{ __html: _.title.data.title.value }} className={_.title.data.title_style.value}></h3>}

          <div className={_.features.data.card_layout.value}>
            
            {/* 1 */}
            <div className={_.features.data.shared_card_container.value+' '+_.card_1.data.container.value}>
              {check(_.card_1.data.image_1.value)&&<div className={_.features.data.shared_container.value + ' ' + _.card_1.data.image_1_container.value }>
                <img
                  className={_.features.data.shared_styles.value + ' ' + _.card_1.data.image_1_style.value}
                  src={_.card_1.data.image_1.value}
                  alt=""
                />
              </div>}
              {check(_.card_1.data.f1_large_text.value)&&<h3 dangerouslySetInnerHTML={{ __html: _.card_1.data.f1_large_text.value }} className={_.features.data.large_text_style.value}></h3>}
              {check(_.card_1.data.f1_small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_1.data.f1_small_text.value }} className={_.features.data.small_text_style.value}></p>}
            </div>
            {/* 2 */}
            <div className={_.features.data.shared_card_container.value+' '+_.card_2.data.container.value}>
              {check(_.card_2.data.image_2.value)&&<div className={_.features.data.shared_container.value + ' ' + _.card_2.data.image_2_container.value }>
                <img
                  className={_.features.data.shared_styles.value + ' ' + _.card_2.data.image_2_style.value}
                  src={_.card_2.data.image_2.value}
                  alt=""
                />
              </div>}
              {check(_.card_2.data.f2_large_text.value)&&<h3 dangerouslySetInnerHTML={{ __html: _.card_2.data.f2_large_text.value }} className={_.features.data.large_text_style.value}></h3>}
              {check(_.card_2.data.f2_small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_2.data.f2_small_text.value }} className={_.features.data.small_text_style.value}></p>}
            </div>
            {/* 3 */}
            <div className={_.features.data.shared_card_container.value+' '+_.card_3.data.container.value}>
              {check(_.card_3.data.image_3.value)&&<div className={_.features.data.shared_container.value + ' ' + _.card_3.data.image_3_container.value }>
                <img
                  className={_.features.data.shared_styles.value + ' ' + _.card_3.data.image_3_style.value}
                  src={_.card_3.data.image_3.value}
                  alt=""
                />
              </div>}
              {check(_.card_3.data.f3_large_text.value)&&<h3 dangerouslySetInnerHTML={{ __html: _.card_3.data.f3_large_text.value }} className={_.features.data.large_text_style.value}></h3>}
              {check(_.card_3.data.f3_small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.card_3.data.f3_small_text.value }} className={_.features.data.small_text_style.value}></p>}
            </div>

            

          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesV4;
