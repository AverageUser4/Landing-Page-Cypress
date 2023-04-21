export default function getData(isMobileView) {
  if(typeof isMobileView !== 'boolean') {
    console.error(`Function requires its only argument to be a boolean value, provided:`, isMobileView);
  }
  
  const types = {
    link: `link ${!isMobileView ? 'link-a' : ''}`,
    linkBold: `link ${!isMobileView ? 'link-a link-a--bold' : ''}`,
  };

  const classNames = {
    svg: isMobileView ? '' : 'icon-container__svg',
  };

  return { types, classNames };
}