// Utils
/**
 * @param {string} page1 old page
 * @param {string} page2 new page
 */
function pageRoute(page1, page2) {
  const p1 = document.querySelector(`#${page1}`);
  const p2 = document.querySelector(`#${page2}`);
  p1.classList.add('hide');
  p2.classList.remove('hide');
}

/**
 *
 * @param {string} selector
 * @returns element
 */
function qs(selector) {
  return document.querySelector(selector);
}

/**
 *
 * @param {string} btn_id btn_id without '#'
 * @param {method} method
 */
function addClickEvent(btn_id, method) {
  const btn = qs(`#${btn_id}`);
  btn.addEventListener('click', method);
}
