'use strict';

/**
 * This function adjusts the top margin of a non-fixed element in a container
 * with a fixed one above it so that the fixed element doesn't possibly overlap
 * with it.
 * @param {htmlElement} fixedElement
 * @param {htmlElement} notFixedElement
 */
const adjustNotFixedElement = (fixedElement, notFixedElement) => {
  notFixedElement.style.marginTop = fixedElement.offsetHeight + 'px';
};

/**
 * Modifies the CSS of a given element so that it's an
 * [obround](https://www.wordnik.com/words/obround). The function does so by
 * setting the `border-radius`, `padding-right`, and `padding-left` properties
 * to half of the element's height.
 * @param {HTMLElement} htmlElement - HTML element to change
 */
const makeElementObround = (htmlElement) => {
  const HALF_HEIGHT = ~~(0.5 * htmlElement.offsetHeight) + 'px';
  htmlElement.style.borderRadius = HALF_HEIGHT;
  htmlElement.style.paddingRight = HALF_HEIGHT;
  htmlElement.style.paddingLeft = HALF_HEIGHT;
};

const projectName = 'product-landing-page';

const LOGO_AND_NAV = document.getElementById('logo-and-nav');
const TITLE_AND_SUBTITLE = document.getElementById('title-and-subtitle');

adjustNotFixedElement(LOGO_AND_NAV, TITLE_AND_SUBTITLE);

window.addEventListener('resize', () =>
  adjustNotFixedElement(LOGO_AND_NAV, TITLE_AND_SUBTITLE));

makeElementObround(document.getElementById('email'));
makeElementObround(document.getElementById('submit'));
