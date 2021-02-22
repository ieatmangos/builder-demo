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
        value: "grid grid-cols-2 grid-rows-flow lg:grid-cols-3 lg:grid-row-4 min-h-160 gap-4"
      },
    }
  },
  images: {
    data:{
      shared_styles:{
        label: 'Shared Styles',
        value:'object-cover min-w-full min-h-full transition ease-out duration-300 transform scale-100 hover:scale-105'
      },
      image_1_container:{
        label: 'Image 1 Container',
        value: 'relative rounded grid-item col-span-2 row-span-auto md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-4 overflow-hidden',
      },
      image_2_container:{
        label: 'Image 2 Container',
        value: 'relative rounded grid-item lg:col-span-1 lg:row-span-2 overflow-hidden',
      },
      image_3_container:{
        label: 'Image 3 Container',
        value: 'relative rounded grid-item lg:col-span-1 lg:row-span-2 overflow-hidden',
      },
      image_4_container:{
        label: 'Image 4 Container',
        value: 'relative rounded grid-item lg:col-span-1 lg:row-span-2 overflow-hidden',
      },
      image_5_container:{
        label: 'Image 5 Container',
        value: 'relative rounded grid-item lg:col-span-1 lg:row-span-2 overflow-hidden',
      },
      image_1: {
        label: "Image 1",
        value: "/images/products/product-image-7.jpeg",
        image: true
      },
      image_2: {
        label: "Image 2",
        value: "/images/products/product-image-3.jpeg",
        image: true
      },
      image_3: {
        label: "Image 3",
        value: "/images/products/product-image-5.jpeg",
        image: true
      },
      image_4: {
        label: "Image 4",
        value: "/images/products/product-image-3.jpeg",
        image: true
      },
      image_5: {
        label: "Image 5",
        value: "/images/products/product-image-5.jpeg",
        image: true
      },
    },
}
}
const GalleryV7 = ({id}) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>

          <div className={_.layout.data.layout.value}>
            <div className={_.images.data.image_1_container.value}>
              <img
                className={_.images.data.shared_styles.value}
                src={_.images.data.image_1.value}
                alt=""
              />
            </div>
            <div className={_.images.data.image_2_container.value}>
              <img
                className={_.images.data.shared_styles.value}
                src={_.images.data.image_2.value}
                alt=""
              />
            </div>
            <div className={_.images.data.image_3_container.value}>
              <img
                className={_.images.data.shared_styles.value}
                src={_.images.data.image_3.value}
                alt=""
              />
            </div>
            <div className={_.images.data.image_4_container.value}>
              <img
                className={_.images.data.shared_styles.value}
                src={_.images.data.image_4.value}
                alt=""
              />
            </div>
            <div className={_.images.data.image_5_container.value}>
              <img
                className={_.images.data.shared_styles.value}
                src={_.images.data.image_5.value}
                alt=""
              />
            </div>
          </div>
        </div>

    </section>
  );
};

export default GalleryV7;
