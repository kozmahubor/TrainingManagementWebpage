import { BackgroundType } from 'src/app/core/types';
import FormOptionsType from './form-options.type';

type FormLayoutType = {
  panel: FormOptionsType;
  background?: {
    img: BackgroundType;
    float: 'left' | 'right';
  };
};

export default FormLayoutType;
