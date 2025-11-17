import { style } from '@vanilla-extract/css';

export const modalStyle = style({
  position: 'fixed',
  top: '30%',
  display: 'flex',
  flexDirection: 'column',
  border: 'none',
  borderRadius: '12px',
  padding: '40px 60px',
  maxWidth: 'min(90vw, 400px)',
  width: '100%',
  textAlign: 'center',
  gap: '20px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
});
