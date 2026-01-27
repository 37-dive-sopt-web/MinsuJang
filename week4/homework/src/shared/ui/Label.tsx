import { fonts } from '@shared/styles/fonts.css';

type LabelProps = {
  htmlFor: string;
  required?: boolean;
  label: string;
};

const Label = ({ htmlFor, label }: LabelProps) => {
  return <label htmlFor={htmlFor} className={fonts.caption}>{label}</label>;
};

export default Label;
