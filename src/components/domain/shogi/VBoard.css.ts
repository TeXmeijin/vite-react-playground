import { style } from '@vanilla-extract/css';

export const theBoardStyles = {
  container: style({
    display: 'flex',
  }),
  board: style({
    display: 'flex',
    flexDirection: 'row-reverse',
  }),
};
