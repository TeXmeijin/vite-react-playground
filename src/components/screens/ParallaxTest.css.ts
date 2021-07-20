import { style } from '@vanilla-extract/css';

export const styles = {
  parallax: style({
    width: '100%',
    height: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  text: style({
    padding: 32,
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: 'white',
  }),
};
