import { style } from '@vanilla-extract/css';

const massStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 60,
  height: 60,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#ccc',
});

const enemyStyle = style({
  transform: 'rotate(180deg)',
});

export { massStyle, enemyStyle };
