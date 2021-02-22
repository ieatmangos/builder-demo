import React from "react";
import { useEdit, useMyData } from "../edit";
const defaults ={
  focus_element: {data:{inner:''}},
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Gallery hds-container bg-white hds-text-color max-h-screen"
      },
      section: {
        label: "Section Styles",
        value:"hds-section"
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: 'Layout Grid',
        value: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-sm'
      }
    }
  },
  images: {
    data:{
      shared_styles:{
        label: 'Shared Styles',
        value: 'object-cover min-w-full md:min-h-full transition ease-out duration-300 transform hover:scale-105'
      },
      image_1_container:{
        label: 'Image 1 Container',
        value: 'relative rounded grid-item sm:row-span-2 overflow-hidden',
      },
      image_2_container:{
        label: 'Image 2 Container',
        value: 'relative rounded grid-item overflow-hidden min-h-40',
      },
      image_3_container:{
        label: 'Image 3 Container',
        value: 'relative rounded grid-item overflow-hidden min-h-40',
      },
      image_4_container:{
        label: 'Image 4 Container',
        value: 'relative rounded grid-item sm:col-span-2 lg:row-start-1 lg:col-start-2 overflow-hidden min-h-88',
      },
      image_1: {
        label: "Image 1",
        value: "/images/products/product-image-3.jpeg",
        image: true
      },
      image_2: {
        label: "Image 2",
        value: "/images/products/product-image-4.jpeg",
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
      }
    }
  }
}
const GalleryV4 = ({id}) => {
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
      </div>
      </div>
 
    </section>
  );
};

export default GalleryV4;
