import { style } from '@vanilla-extract/css';

const massStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 60,
  height: 60,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#999',
});

const myTurnMassStyle = style({
  cursor: 'pointer',
});

const selectedMassStyle = style({
  background: '#dd7',
});

const enemyStyle = style({
  transform: 'rotate(180deg)',
});

export { massStyle, enemyStyle, selectedMassStyle, myTurnMassStyle };
