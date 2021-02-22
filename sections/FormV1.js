import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: {data:{inner:''}},
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Form hds-container hds-text-color bg-white"
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
        value: "w-full sm:w-1/2"
      },
      bg_color: {
        label: "Background Color",
        value: "absolute inset-y-0 w-full sm:w-7/12 bg-primary"
      }
    }
  },
  form_styles: {
    data: {
      container: {
        label: "Container",
        value: "grid grid-cols-1 sm:grid-cols-2 gap-md "
      },
      form_collumn: {
        label: "Form Collumn Style",
        value: "flex flex-col gap-sm justify-center"
      },
      large_text_style: {
        label: "Large Text Style",
        value:"hds-title__large font-black mb-sm md:mb-md mt-lg md:mt-0 text-center md:text-left"
      },
      small_text_style: {
        label: "small Text Style",
        value: "hds-copy"
      },
      input_style: {
        label: "Input Style",
        value: "hds-form-input"
      },
      divider: {
        label: 'Divider',
        value: 'border border-solid h-px w-full border-secondary'
      }
    }
  },
  text:{
    data: {
      large_text:{
        label: 'Large Text',
        value: 'Sign in'
      },
      placeholder_1:{
        label: 'Input 1 Placeholder',
        value: 'Username or Email'
      },
      placeholder_2:{
        label: 'Input 2 Placeholder',
        value: 'Password'
      },
      small_text_1:{
        label: 'Small Text 1',
        value: 'Forgot password'
      },
      small_text_2:{
        label: 'Small Text 2',
        value: 'Link'
      },
    }
  },
  buttons:{
    data:{
      button_1_style:{
        label: 'Button 1 Style',
        value: 'hds-btn hds-btn__light-hollow flex justify-center'
      },
      icon_1:{
        label: 'Button 1 Icon',
        value: '/images/svg/facebook-white.svg',
        image: true,
      },
      button_2_style:{
        label: 'Button 2 Style',
        value: 'hds-btn hds-btn__light-hollow flex justify-center'
      },
      icon_2:{
        label: 'Button 2 Icon',
        value: '/images/svg/google-white.svg',
        image: true,
      },
    }
  }

  
};
const FormV1 = ({ id }) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.layout.data.bg_color.value} />
      <div className={_.section_styles.data.section.value}>
        <div className={_.layout.data.layout.value}>
          <h4 className={_.form_styles.data.large_text_style.value}>
            {_.text.data.large_text.value}
          </h4>
          <div className={_.form_styles.data.container.value}>
            {/* Left Side */}
            <div className={_.form_styles.data.form_collumn.value}>
              <input
                type="text"
                className={_.form_styles.data.input_style.value}
                placeholder={_.text.data.placeholder_1.value}
              />
              <a href="/" className={_.form_styles.data.small_text_style.value}>
              {_.text.data.small_text_1.value}
              </a>
              <div className={_.form_styles.data.divider.value} />
              <button className={_.buttons.data.button_1_style.value}>
                <img
                  className=""
                  src={_.buttons.data.icon_1.value}
                  alt="facebook"
                />
              </button>
            </div>
            {/* Right Side */}
            <div className={_.form_styles.data.form_collumn.value}>
              <input
                type="text"
                className={_.form_styles.data.input_style.value}
                placeholder={_.text.data.placeholder_2.value}
              />
              <a href="/" className={_.form_styles.data.small_text_style.value}>
              {_.text.data.small_text_2.value}
              </a>
              <div className={_.form_styles.data.divider.value} />
              <button className={_.buttons.data.button_2_style.value}>
                <img
                  className=""
                  src={_.buttons.data.icon_2.value}
                  alt="facebook"
                />
              </button>
            </div>
            
          </div>
          <div className=" flex flex-wrap mt-lg flex justify-between">
            <p>Don't have an account yet?</p>
            <p>Sign up</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FormV1;
