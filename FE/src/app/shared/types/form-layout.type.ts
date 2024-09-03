import FormOptionsType from './form-options.type';
import {BackgroundType} from "../../core/types";

type FormLayoutType = {
  panel: FormOptionsType;
  background?: {
    img: BackgroundType;
    float: 'left' | 'right';
  };
};

export default FormLayoutType;
