import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: {data:{inner:''}},
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Gallery hds-container bg-primary text-white"
      },
      section: {
        label: "Section Styles",
        value: "hds-section"
      }
    }
  },
  layout: {
    data: {
      layout:{
        label: 'Layout Grid',
        value: 'grid sm:grid-cols-2 gap-sm md:gap-md'
      },
      image_layout:{
        label: 'Image Layout Grid',
        value: 'grid gap-sm'
      }
    }
  },
  images: {
    data:{
      shared_container: {
        label: "Shared Container",
        value: "rounded overflow-hidden h-88"
      },
      shared_styles: {
        label: "Shared Image Styles",
        value:
          "object-cover object-top w-full h-full transition ease-out duration-300 transform hover:scale-105"
      },
      image_1_container: {
        label: "Image 1 Container",
        value: ""
      },
      image_1_style: {
        label: "Image 1 Style",
        value: ""
      },
      image_1: {
        label: "Image 1",
        value: "/images/demo/light.png",
        image: true
      },
      image_2_container: {
        label: "Image 2 Container",
        value: ""
      },
      image_2_style: {
        label: "Image 2 Style",
        value: ""
      },
      image_2: {
        label: "Image 2",
        value: "/images/demo/light.png",
        image: true
      },
      image_3_container: {
        label: "Image 3 Container",
        value: ""
      },
      image_3_style: {
        label: "Image 3 Style",
        value: ""
      },
      image_3: {
        label: "Image 3",
        value: "/images/demo/light.png",
        image: true
      },

    }
  },
  text: {
    data:{
      container:{
        label: 'Container',
        value: 'max-w-xs md:ml-auto'
      },
      large_text_style: {
        label: "Large Text Style",
        value: "hds-title__medium font-black mt-sm mb-xs lg:mb-sm"
      },
      large_text: {
        label: "Large Text",
        value: "New Editorial Showcase 17",
        rte: true,
      },
      small_text_style: {
        label: "Small Text Style",
        value: "hds-copy mb-sm"
      },
      small_text: {
        label: "Small Text",
        value: "Since wire-frame renderings are relatively simple and fast to calculate",
        rte: true,
      },
      button_style: {
        label: "Button Text Style",
        value: "hds-btn hds-btn__light flex items-center mb-xs"
      },
      button: {
        label: "Button",
        value: "View"
      },
      icon_style:{
        label: 'Icon Style',
        value: 'ml-xs'
      },
      icon:{
        label: 'Icon',
        value: '/images/svg/arrowRight.svg',
        image: true,
      }
      
    }
  }
}
const GalleryV6 = ({id}) => {
  const {_, check} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
    <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          <div className={_.layout.data.image_layout.value}>
            {/* Image 1 */}
            {check(_.images.data.image_1.value)&&<div className={_.images.data.shared_container.value +" " +_.images.data.image_1_container.value}>
                <img className={ _.images.data.shared_styles.value + " " + _.images.data.image_1_style.value } 
                    src={_.images.data.image_1.value} alt="" />
            </div>}
            {/* Image 2 */}
            {check(_.images.data.image_2.value)&&<div className={_.images.data.shared_container.value +" " +_.images.data.image_2_container.value}>
                <img className={ _.images.data.shared_styles.value + " " + _.images.data.image_2_style.value } 
                    src={_.images.data.image_2.value} alt="" />
            </div>}
            {/* Image 3 */}
            {check(_.images.data.image_3.value)&&<div className={_.images.data.shared_container.value +" " +_.images.data.image_3_container.value}>
                <img className={ _.images.data.shared_styles.value + " " + _.images.data.image_3_style.value } 
                    src={_.images.data.image_3.value} alt="" />
            </div>}
          </div>
          {/* Text Container */}
          <div className={_.text.data.container.value}>
            {check(_.text.data.large_text.value)&&<h4 dangerouslySetInnerHTML={{ __html: _.text.data.large_text.value }} className={_.text.data.large_text_style.value}></h4>}
            {check(_.text.data.small_text.value)&&<p dangerouslySetInnerHTML={{ __html: _.text.data.small_text.value }} className={_.text.data.small_text_style.value}></p>}
            {check(_.text.data.button.value)&&<button className={_.text.data.button_style.value}>
            {_.text.data.button.value}
              {check(_.text.data.icon.value)&&<span className={_.text.data.icon_style.value}>
                <img src={_.text.data.icon.value} alt="arrow right" />
              </span>}
            </button>}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GalleryV6;
