import CallToActionV1 from "./CallToActionV1";
import CallToActionV7 from "./CallToActionV7";
import CallToActionV5 from "./CallToActionV5";
import HeroV1 from "./HeroV1";
import HeroV2 from "./HeroV2";
import HeroV3 from "./HeroV3";
import HeroV4 from "./HeroV4";
import HeroV5 from "./HeroV5";
import FooterV1 from "./FooterV1";
import FooterV2 from "./FooterV2";
import ProductCardGridV2 from "./ProductCardGridV2";
import Gallery from "./Gallery";
import GalleryV1 from "./GalleryV1";
import GalleryV5 from "./GalleryV5";
import GalleryV6 from "./GalleryV6";
import Text from "./Text";
import TextV1 from "./TextV1";
import FeaturesV2 from "./FeaturesV2";
import FeaturesV4 from "./FeaturesV4";
import FeaturesV10 from "./FeaturesV10";
import FeaturesV11 from "./FeaturesV11";
import Form1 from "./Form1";
import ContactV1 from "./ContactV1";
import ContactV2 from "./ContactV2";
import CartV1 from "./CartV1";
import MenuV1 from "./MenuV1";
import CallToAction from './CallToAction'
import CallToAction2 from './CallToAction2'
import { v4 as uuid } from "uuid";
import ProductDetail1 from "./ProductDetail1";
// import CallToActionV2 from "./CallToActionV2";
// import CallToActionV3 from "./CallToActionV3";
// import CallToActionV4 from "./CallToActionV4";
// import CallToActionV6 from "./CallToActionV6";
// import CallToActionV8 from "./CallToActionV8";
// import HeroV6 from "./HeroV6";
// import ProductCardGridV1 from "./ProductCardGridV1";
// import ProductCardGridV3 from "./ProductCardGridV3";
// import ProductCardGridV4 from "./ProductCardGridV4";
// import GalleryV2 from "./GalleryV2";
// import GalleryV3 from "./GalleryV3";
// import GalleryV4 from "./GalleryV4";
// import GalleryV7 from "./GalleryV7";
// import TextV2 from "./TextV2";
// import TextV3 from "./TextV3";
// import ProductDetailV1 from "./ProductDetailV1";
// import ProductDetailV2 from "./ProductDetailV2";
// import ProductDetailV3 from "./ProductDetailV3";
// import FormV1 from "./FormV1";
// import FormV2 from "./FormV2";
// import FormV3 from "./FormV3";
// import FormV4 from "./FormV4";



const getTag = (arg) =>{
  return {
    tag: arg,
    id: uuid()
  }
}

const data = [

  // Header
  {  c: MenuV1, label: "MenuV1", ...getTag('Header')},

  // Text
  {  c: CallToAction, label: "CallToAction", ...getTag('Text')},
  {  c: CallToActionV5, label: "CallToActionV5", ...getTag('Text')},
  {  c: CallToActionV7, label: "CallToActionV7", ...getTag('Text')},
  {  c: TextV1, label: "TextV1", ...getTag('Text')},
  {  c: Text, label: "Text", ...getTag('Text')},


  // Image with Text
  {  c: CallToAction2, label: "CallToAction2", ...getTag('Image with text')},
  {  c: GalleryV1, label: "GalleryV1", ...getTag('Image with text')},
  {  c: GalleryV6, label: "GalleryV6", ...getTag('Image with text')},
  {  c: GalleryV5, label: "GalleryV5", ...getTag('Image with text')},
  {  c: FeaturesV10, label: "FeaturesV10", ...getTag('Image with text')},
  {  c: FeaturesV11, label: "FeaturesV11", ...getTag('Image with text')},
  {  c: ContactV2, label: "ContactV2", ...getTag('Image with text')},
  {  c: FeaturesV2, label: "FeaturesV2", ...getTag('Image with text')},
  {  c: FeaturesV4, label: "FeaturesV4", ...getTag('Image with text')},

  // Hero
  {  c: HeroV1, label: "HeroV1", ...getTag('Hero')},
  {  c: HeroV2, label: "HeroV2", ...getTag('Hero')},
  {  c: HeroV4, label: "HeroV4", ...getTag('Hero')},
  {  c: HeroV5, label: "HeroV5", ...getTag('Hero')},
  // {  c: HeroV6, label: "HeroV6", ...getTag('Hero') },

  // Product
  // {  c: ProductCardGridV1, label: "ProductCardGridV1", ...getTag('Product')},
  {  c: ProductCardGridV2, label: "ProductCardGridV2", ...getTag('Product')},
  // {  c: ProductCardGridV3, label: "ProductCardGridV3", ...getTag('Product')},
  // {  c: ProductCardGridV4, label: "ProductCardGridV4", ...getTag('Product')},
  // {  c: ProductDetailV1, label: "ProductDetailV1", ...getTag('Product')},
  // {  c: ProductDetailV2, label: "ProductDetailV2", ...getTag('Product')},
  // {  c: ProductDetailV3, label: "ProductDetailV3", ...getTag('Product')},
  // {  c: ProductDetailV4, label: "ProductDetailV4", ...getTag('Product')},
  {  c: ProductDetail1, label: "ProductDetail1", ...getTag('Product')},

  // Forms
  {  c: CallToActionV1, label: "CallToActionV1", ...getTag('Forms')},
  {  c: HeroV3, label: "HeroV3", ...getTag('Forms')},
  // {  c: FormV1, label: "FormV1", ...getTag('Forms')},
  {  c: Form1, label: "Form1", ...getTag('Forms')},
  // {  c: FormV2, label: "FormV2", ...getTag('Forms')},
  // {  c: FormV3, label: "FormV3", ...getTag('Forms')},
  {  c: ContactV1, label: "ContactV1", ...getTag('Forms')},

  // Cart
  {  c: CartV1, label: "CartV1", ...getTag('Cart')},

  // Image Grid
  {  c: Gallery, label: "Gallery", ...getTag('Image Grid')},

  // Footer
  {  c: FooterV1, label: "FooterV1", ...getTag('Footer')},
  {  c: FooterV2, label: "FooterV2", ...getTag('Footer')},


  // Development, dont delete yet
  // Discarded
  // {  c: FormV4, label: "FormV4", tag: "Form", id: uuid()},

  // Combined 

  //  -- Gallery --
  // {  c: GalleryV2, label: "GalleryV2", tag: "Gallery", id: uuid()},
  // {  c: GalleryV3, label: "GalleryV3", tag: "Gallery", id: uuid()},
  // {  c: GalleryV4, label: "GalleryV4", tag: "Gallery", id: uuid()},
  // {  c: GalleryV7, label: "GalleryV7", tag: "Gallery", id: uuid()},

  // -- CallToAction --
  // { c: CallToActionV3, label: "CallToActionV3", tag: "CTA", id: uuid()},
  // { c: CallToActionV2, label: "CallToActionV2", tag: "CTA", id: uuid()},
  // { c: CallToActionV4, label: "CallToActionV4", tag: "CTA", id: uuid()},

  // -- CallToAction2 --
  // { c: CallToActionV6, label: "CallToActionV6", tag: "CTA", id: uuid()},
  // { c: CallToActionV8, label: "CallToActionV8", tag: "CTA", id: uuid()},
  
  //  -- Text --
  // {  c: TextV2, label: "TextV2", ...getTag('Text')},
  // {  c: TextV3, label: "TextV3", ...getTag('Text')},

];


let tagArray = Array.from(new Set(data.map(i => i.tag)));
tagArray.unshift("All");
export const tags = tagArray;
export default data;
