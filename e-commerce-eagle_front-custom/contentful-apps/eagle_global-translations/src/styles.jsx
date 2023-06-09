import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

const styles = {
  editor: css({
    padding: tokens.spacingL,
    marginBottom: tokens.spacingM,
  }),
  card: css({
    marginBottom: tokens.spacingXs,
  }),
  spaceBottom: css({
    display: 'block',
    marginBottom: tokens.spacingS,
  }),
  dangerousActions: css({
    width: '100%',
    backgroundColor: tokens.yellow200,
    padding: tokens.spacingS,
    marginBottom: tokens.spacingXs,
  }),
  simpleActions: css({
    width: '100%',
    backgroundColor: tokens.gray100,
    padding: tokens.spacingS,
    marginBottom: tokens.spacingL,
  }),
};

export default styles;
