import { style } from '@vanilla-extract/css';

const root = style({
  backgroundColor: '#ddd',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const card = style({
  borderRadius: 24,
  background: '#fff',
  padding: 32,
});

export const AnimationCardStyles = {
  root,
  card,
};
