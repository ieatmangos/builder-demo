import React from "react";
import { useEdit, useMyData} from '../edit'
const defaults={
  focus_element: {data:{inner:''}},
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Form hds-container bg-white hds-text-color"
      },
      section: {
        label: "Section Styles",
        value: "hds-section"
      }
    }
  },
  layout:{
    data:{
      layout: {
        label: 'Layout',
        value: 'max-w-xl mx-auto'
      }
    }
  },
  form_styles: {
    data: {
      container: {
        label: 'Container',
        value: 'grid gap-sm'
      },
      input_style: {
        label: "Input Style",
        value: "hds-form-input"
      },
      large_text: {
        label: 'Large Text Style',
        value: 'hds-title__large font-black mb-sm md:mb-md'
      },
      
    }
  },
  text:{
    data:{
      large: {
        label: 'Large',
        value: 'Sign up'
      },
      placeholder_1:{
        label: 'Input 1 Placeholder',
        value: 'Name'
      },
      placeholder_2:{
        label: 'Input 2 Placeholder',
        value: 'Email'
      },
      placeholder_3:{
        label: 'Input 3 Placeholder',
        value: 'Password'
      },
      placeholder_4:{
        label: 'Input 4 Placeholder',
        value: 'Repeat password'
      },
    }
  },
  checkbox:{
    data: {
      container: {
        label: "Container",
        value: 'flex gap-xs items-center mt-sm'
      },
      image_style:{
        label: 'Icon Style',
        value: ''
      },
      image:{
        label: 'Icon',
        value: '/images/svg/checkbox-selected.svg',
        image: true,
      },
      text_style:{
        label: 'Text Style',
        value: ''
      },
      text:{
        label: 'Text',
        value: 'I agree to the Wireframe terms',
      },
    }
  },
  button:{
    data:{
      button_style: {
        label:'Button Style',
        value: 'hds-btn hds-btn__primary mt-sm md:mt-md'
      },
      button: {
        label:'Button',
        value: 'Sign up'
      },
    }
  }
}
const FormV2 = ({id}) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
        <div className={_.section_styles.data.section.value}>
          <div className={_.layout.data.layout.value}>
            <h4 className={_.form_styles.data.large_text.value}>
            {_.text.data.large.value}
            </h4>
            <div className={_.form_styles.data.container.value}>
            <input
              type="text"
              className={_.form_styles.data.input_style.value}
              placeholder={_.text.data.placeholder_1.value}
            />
            <input
              type="text"
              className={_.form_styles.data.input_style.value}
              placeholder={_.text.data.placeholder_2.value}
            />
            <input
              type="text"
              className={_.form_styles.data.input_style.value}
              placeholder={_.text.data.placeholder_3.value}
            />
            <input
              type="text"
              className={_.form_styles.data.input_style.value}
              placeholder={_.text.data.placeholder_4.value}
            />
            </div>
            <div className={_.checkbox.data.container.value}>
              <img
                className={_.checkbox.data.image_style.value}
                src={_.checkbox.data.image.value}
                alt="check box selected"
              />
              <p className={_.checkbox.data.text_style.value}>{_.checkbox.data.text.value}</p>
            </div>
            <button className={_.button.data.button_style.value}>{_.button.data.button.value}</button>
          </div>
        </div>
      
    </section>
  );
};
export default FormV2;
