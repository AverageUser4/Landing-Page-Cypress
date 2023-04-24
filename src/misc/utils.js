export function getFocusableChildNodes(parentNode) {
  return parentNode.querySelectorAll(`
    a[href]:not(:disabled), 
    area[href]:not(:disabled),
    input:not(:disabled),
    select:not(:disabled),
    textarea:not(:disabled),
    button:not(:disabled)
  `);
}