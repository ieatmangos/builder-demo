import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: {data:{inner:''}},
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Footer hds-container bg-white hds-text-color "
      },
      section: {
        label: "Section Styles",
        value:"hds-section"
      }
    }
  },
  layout: {
    data: {
      container: {
        label: "Container",
        value:
          "flex justify-between"
      }
    }
  },
  lists: {
    data: {
      container: {
        label: "Container",
        value:
          "grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
      },
      li: {
        label: "List Item Style",
        value: ""
      },
      label: {
        label: "Label Style",
        value: "hds-title-color font-bold"
      }
    }
  },
  list_1: {
    data: {
      ul: {
        label: "List Style",
        value: ""
      },
      label: {
        label: "Label",
        value: "Catalog"
      },
      link_1: {
        label: "Link 1",
        value: "Catalog"
      },
      link_2: {
        label: "Link 2",
        value: "Popular"
      },
      link_3: {
        label: "Link 3",
        value: "Trending"
      },
      link_4: {
        label: "Link 4",
        value: "Features"
      }
    }
  },
  list_2: {
    data: {
      ul: {
        label: "List Style",
        value: ""
      },
      label: {
        label: "Label",
        value: "Catalog"
      },
      link_1: {
        label: "Link 1",
        value: "Catalog"
      },
      link_2: {
        label: "Link 2",
        value: "Popular"
      },
      link_3: {
        label: "Link 3",
        value: "Trending"
      },
      link_4: {
        label: "Link 4",
        value: "Features"
      }
    }
  },
  list_3: {
    data: {
      ul: {
        label: "List Style",
        value: ""
      },
      label: {
        label: "Label",
        value: "Catalog"
      },
      link_1: {
        label: "Link 1",
        value: "Catalog"
      },
      link_2: {
        label: "Link 2",
        value: "Popular"
      },
      link_3: {
        label: "Link 3",
        value: "Trending"
      },
      link_4: {
        label: "Link 4",
        value: "Features"
      }
    }
  },
  list_4: {
    data: {
      ul: {
        label: "List Style",
        value: ""
      },
      label: {
        label: "Label",
        value: "Catalog"
      },
      link_1: {
        label: "Link 1",
        value: "Catalog"
      },
      link_2: {
        label: "Link 2",
        value: "Popular"
      },
      link_3: {
        label: "Link 3",
        value: "Trending"
      },
      link_4: {
        label: "Link 4",
        value: "Features"
      }
    }
  },
  socials :{
    data :{
      container:{
        label: 'Container',
        value: 'block'
      },
      p: {
        label: 'Text Style',
        value: "mb-sm font-bold hds-copy"
      },
      text: {
        label: 'Text',
        value: 'Follow Us'
      },
      image_container:{
        label: 'Image Container',
        value: 'flex gap-2'
      },
      image_1: {
        label: 'Image 1',
        value: '/images/svg/twitter.svg',
        image: true
      },
      image_2: {
        label: 'Image 2',
        value: '/images/svg/facebook.svg',
        image: true
      },
      image_3: {
        label: 'Image 3',
        value: '/images/svg/google.svg',
        image: true
      },
      image_4: {
        label: 'Image 4',
        value: '/images/svg/instagram.svg',
        image: true
      },
    }
  },
  copyright:{
    data: {
      style: {
        label: 'Container',
        value:"hds-legal hidden md:block text-center mt-md"
      },
      text: {
        label: 'Text',
        value: '2020. All rights reserved'
      }
    }
  },
  privacy:{
    data: {
      style: {
        label: 'Container',
        value: "hds-copy md:hidden p-sm md:p-0 border-t md:border-0"
      },
      text: {
        label: 'Text',
        value: '2020. All rights reserved'
      },
      link_1:{
        label: 'Link 1',
        value: 'Privacy Policy',
      },
      link_2:{
        label: 'Link 2',
        value: 'Terms and Conditions',
      },

    }
  }
};

const FooterV1 = ({ id }) => {
  const {_} = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <footer className={_.section_styles.data.section.value}>
        <div className="">
          <div className={_.layout.data.container.value}>
            <div className={_.lists.data.container.value}>
              <ul className={_.list_1.data.ul.value}>
                <li className={_.lists.data.label.value}>
                  {_.list_1.data.label.value}
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_1.data.link_1.value}</a>
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_1.data.link_2.value}</a>
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_1.data.link_3.value}</a>
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_1.data.link_4.value}</a>
                </li>
              </ul>
              <ul className={_.list_2.data.ul.value}>
                <li className={_.lists.data.label.value}>
                  {_.list_2.data.label.value}
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_2.data.link_1.value}</a>
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_2.data.link_2.value}</a>
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_2.data.link_3.value}</a>
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_2.data.link_4.value}</a>
                </li>
              </ul>{" "}
              <ul className={_.list_3.data.ul.value}>
                <li className={_.lists.data.label.value}>
                  {_.list_3.data.label.value}
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_3.data.link_1.value}</a>
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_3.data.link_2.value}</a>
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_3.data.link_3.value}</a>
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_3.data.link_4.value}</a>
                </li>
              </ul>{" "}
              <ul className={_.list_4.data.ul.value}>
                <li className={_.lists.data.label.value}>
                  {_.list_4.data.label.value}
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_4.data.link_1.value}</a>
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_4.data.link_2.value}</a>
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_4.data.link_3.value}</a>
                </li>
                <li className={_.lists.data.li.value}>
                  <a href="/">{_.list_4.data.link_4.value}</a>
                </li>
              </ul>
            </div>

            <div className={_.socials.data.container.value}>
              <p className={_.socials.data.p.value}>{_.socials.data.text.value}</p>
              <div className={_.socials.data.image_container.value}>
                <a className='' href="/">
                  <img src={_.socials.data.image_1.value} alt={_.socials.data.image_1.value} />
                </a>
                <a className='' href="/">
                  <img src={_.socials.data.image_2.value} alt={_.socials.data.image_2.value} />
                </a>
                <a className='' href="/">
                  <img src={_.socials.data.image_3.value} alt={_.socials.data.image_3.value} />
                </a>
                <a className='' href="/">
                  <img src={_.socials.data.image_4.value} alt={_.socials.data.image_4.value} />
                </a>
              </div>
            </div>
          </div>

          <div className={_.copyright.data.style.value}>
            <p>&copy;{_.copyright.data.text.value}</p>
          </div>
        </div>

        <div className={_.privacy.data.style.value}>
            <a href="/">{_.privacy.data.link_1.value}</a>
            <a href="/">{_.privacy.data.link_2.value}</a>
        </div>
      </footer>
    </section>
  );
};

export default FooterV1;
