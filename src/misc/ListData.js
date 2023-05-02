import getData from "./HeaderSubmenuElementsData";

export default function getListData({ type, isMobileView }) {
  const { types: basicTypes } = getData(isMobileView);
  
  const classNames = {
    heading: `head head--d ${type === 'b' && 'head--color-a head--bit-bold'}`
  };
  const types = {
    link: type === 'a' ? basicTypes.link : 'link link-c'
  };

  return { classNames, types };
}