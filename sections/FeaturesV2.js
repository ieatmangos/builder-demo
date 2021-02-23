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
        value: "grid grid-cols-1 sm:grid-cols-2 sm:gap-md md:gap-lg "
      }
    }
  },
  images: {
    data: {
      images_layout:{
        label: 'Images Layout',
        value: 'grid grid-cols-2 gap-x-sm'
      },
      shared_container:{
        label: 'Shared Container',
        value:  'relative rounded-md overflow-hidden'
      },
      shared_styles:{
        label: 'Shared Image Styles',
        value: 'object-cover object-center w-full h-full transition ease-out duration-300 transform scale-100 hover:scale-105'
      },
      image_1_container:{
        label: 'Image 1 Container',
        value: 'mb-sm',
      },
      image_1_style:{
        label: 'Image 1 Style',
        value: '',
      },
      image_1: {
        label: "Image 1",
        value: "/images/demo/dark.png",
        image: true
      },
      image_2_container:{
        label: 'Image 2 Container',
        value: 'mt-sm',
      },
      image_2_style:{
        label: 'Image 2 Style',
        value: '',
      },
      image_2: {
        label: "Image 2",
        value: "/images/demo/dark.png",
        image: true
      },
      image_3_container:{
        label: 'Image 3 Container',
        value: 'mb-sm',
      },
      image_3_style:{
        label: 'Image 3 Style',
        value: '',
      },
      image_3: {
        label: "Image 3",
        value: "/images/demo/dark.png",
        image: true
      },
      image_4_container:{
        label: 'Image 4 Container',
        value: 'mt-sm',
      },
      image_4_style:{
        label: 'Image 4 Style',
        value: '',
      },
      image_4: {
        label: "Image 4",
        value: "/images/demo/dark.png",
        image: true
      },
    }
  },
  text: {
    data: {
      container: {
        label: "Container",
        value: "flex flex-col justify-center max-w-lg"
      },
      title_style: {
        label: "Title Style",
        value: "hds-title__medium hds-title-color mb-sm md:mb-md"
      },
      title: {
        label: "Title",
        value: "It is difficult for designers to assess how closely the",
        rte: true
      }
    }
  },
  features: {
    data: {
      card_layout: {
        label: "Card Layout",
        value: ""
      },
      card_container: {
        label: "Shared Card Container",
        value: ""
      },
      large_text_style: {
        label: "Shared Large Text Style",
        value: "hds-copy font-bold mb-xs"
      },
      small_text_style: {
        label: "Shared Small Text Style",
        value: "hds_copy mb-sm"
      },
      f1_large_text: {
        label: "F1 Large Text",
        value: "New features",
        rte: true
      },
      f1_small_text: {
        label: "F1 Small Text",
        value: "It is difficult for designers to assess how closely the wireframe needs to",
        rte: true
      },
      f2_large_text: {
        label: "F2 Large Text",
        value: "New features",
        rte: true
      },
      f2_small_text: {
        label: "F2 Small Text",
        value: "It is difficult for designers to assess how closely the wireframe needs to",
        rte: true
      },
    }
  }
};

const FeaturesV2 = ({id}) => {
  const { _, check } = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <div id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
      <div className={_.layout.data.layout.value}>
        <div className={_.text.data.container.value}>
          {check(_.text.data.title.value)&&<h3 dangerouslySetInnerHTML={{ __html: _.text.data.title.value }} className={_.text.data.title_style.value}></h3>}
          <div className={_.features.data.card_layout.value}>
            <div className={_.features.data.card_container.value}>
              {check(_.features.data.f1_large_text.value)&&<h3 dangerouslySetInnerHTML={{ __html: _.features.data.f1_large_text.value }} className={_.features.data.large_text_style.value}></h3>}
              {check(_.features.data.f1_small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.features.data.f1_small_text.value }} className={_.features.data.small_text_style.value}></p>}
            </div>
            <div className={_.features.data.card_container.value}>
              {check(_.features.data.f2_large_text.value)&&<h3 dangerouslySetInnerHTML={{ __html: _.features.data.f2_large_text.value }} className={_.features.data.large_text_style.value}></h3>}
              {check(_.features.data.f2_small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.features.data.f2_small_text.value }} className={_.features.data.small_text_style.value}></p>}
            </div>
          
        </div>
        </div>
          <div className={_.images.data.images_layout.value}>
          {check(_.images.data.image_1.value)&&<div className={_.images.data.shared_container.value + ' ' + _.images.data.image_1_container.value }>
              <img
                className={_.images.data.shared_styles.value + ' ' + _.images.data.image_1_style.value}
                src={_.images.data.image_1.value}
                alt=""
              />
            </div>}
            {check(_.images.data.image_2.value)&&<div className={_.images.data.shared_container.value + ' ' + _.images.data.image_2_container.value }>
              <img
                className={_.images.data.shared_styles.value + ' ' + _.images.data.image_2_style.value}
                src={_.images.data.image_2.value}
                alt=""
              />
            </div>}
            {check(_.images.data.image_3.value)&&<div className={_.images.data.shared_container.value + ' ' + _.images.data.image_3_container.value }>
              <img
                className={_.images.data.shared_styles.value + ' ' + _.images.data.image_3_style.value}
                src={_.images.data.image_3.value}
                alt=""
              />
            </div>}
            {check(_.images.data.image_4.value)&&<div className={_.images.data.shared_container.value + ' ' + _.images.data.image_4_container.value }>
              <img
                className={_.images.data.shared_styles.value + ' ' + _.images.data.image_4_style.value}
                src={_.images.data.image_4.value}
                alt=""
              />
            </div>}
        
        </div>
      </div>
      </div>
    </div>
  );
};

export default FeaturesV2;
