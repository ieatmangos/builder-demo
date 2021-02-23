import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: {data:{inner:''}},
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Gallery hds-container bg-white"
      },
      section: {
        label: "Section Styles",
        value:
          "hds-section"
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: "Layout Grid",
        value: "grid grid-cols-2 lg:grid-cols-3 gap-xs"
      },
    }
  },
  images: {
    data:{
      shared_container:{
        label: 'Shared Container',
        value:  'relative rounded-md overflow-hidden h-88'
      },
      shared_styles:{
        label: 'Shared Image Styles',
        value: 'object-cover object-top w-full h-full transition ease-out duration-300 transform scale-100 hover:scale-105'
      },
      image_1_container:{
        label: 'Image 1 Container',
        value: '',
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
        value: '',
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
        value: '',
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
        value: '',
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
      image_5_container:{
        label: 'Image 5 Container',
        value: '',
      },
      image_5_style:{
        label: 'Image 5 Style',
        value: '',
      },
      image_5: {
        label: "Image 5",
        value: "/images/demo/dark.png",
        image: true
      },
      image_6_container:{
        label: 'Image 6 Container',
        value: '',
      },
      image_6_style:{
        label: 'Image 6 Style',
        value: '',
      },
      image_6: {
        label: "Image 6",
        value: "/images/demo/dark.png",
        image: true
      },
    },
}
}
const Gallery = ({id}) => {
  const {_, check} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
          <div className={_.layout.data.layout.value}>
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
            {check(_.images.data.image_5.value)&&<div className={_.images.data.shared_container.value + ' ' + _.images.data.image_5_container.value }>

              <img
                className={_.images.data.shared_styles.value + ' ' + _.images.data.image_5_style.value}
                src={_.images.data.image_5.value}
                alt=""
              />
            </div>}
            {check(_.images.data.image_6.value)&&<div className={_.images.data.shared_container.value + ' ' + _.images.data.image_6_container.value }>
              <img
                className={_.images.data.shared_styles.value + ' ' + _.images.data.image_6_style.value}
                src={_.images.data.image_6.value}
                alt=""
              />
            </div>}
          </div>
        </div>

    </section>
  );
};

export default Gallery;
