import { unsafeCSS, css } from 'lit-element';
import spacingClasses from './spacing.scss';

const getCSS = (value) => css`${unsafeCSS(value)}`;
const composeStyles = (...items) => items.reduceRight((acc, curr) => acc.concat(getCSS(curr)), []);

const spacing = getCSS(spacingClasses);

export {
  spacing,
  composeStyles
};
