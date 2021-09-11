import { css } from 'linaria';
import { styled } from '@linaria/react';

const styles = css`
  padding: 32px;
`;

const Button = styled.button<{ size: 'small' | 'medium' | 'large' }>`
  padding: ${(props) => (props.size === 'small' ? '4px 8px' : props.size === 'medium' ? '6px 12px' : '8px 16px')};
  background: blue;
  border-radius: 8px;
`;

const StyledButton = styled(Button)`
  display: block;
  margin-top: 8px;
`;

export const LinariaTest = () => {
  return (
    <section className={styles}>
      <h1>Linaria Test</h1>
      <Button size={'medium'}>Medium</Button>
      <Button size={'small'}>Small</Button>
      <Button size={'large'}>Large</Button>
      <StyledButton size={'medium'}>Medium</StyledButton>
      <StyledButton size={'small'}>Small</StyledButton>
      <StyledButton size={'large'}>Large</StyledButton>
    </section>
  );
};
