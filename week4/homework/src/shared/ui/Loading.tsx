import { Column } from '@shared/ui/index.ts';
import { MoonLoader } from 'react-spinners';
import { vars } from '@shared/styles/token.css.ts';

const Loading = () => {
  return (
    <Column justify={'center'} align={'center'} fullWidth={true} fullHeight={true}>
      <MoonLoader color={vars.color.primary} />
    </Column>
  );
};

export default Loading;
