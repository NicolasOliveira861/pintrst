import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
});

export const ImageContainer = styled('div', {
  columnCount: 4,
  columnGap: '10px',
  width: '1008px',
  maxWidth: '100%',
});

export const Card = styled('figure', {
  margin: 0,
  display: 'grid',
  gridTemplateRows: '1fr auto',
  breakInside: 'avoid',
  overflow: 'hidden',
  padding: '0 0 2.5rem 0',

  '& > img': {
    gridRow: '1 / -1',
    gridColumn: '1',
    height: 'fit-content',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '0.5rem',
  },

  '& > span': {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    lineClamp: 1,
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    textAlign: 'left',
    fontSize: '0.875rem',
    color: '#211922',
    margin: '0.5rem 0 -0.25rem 0',
    fontWeight: '600',
  },
});
