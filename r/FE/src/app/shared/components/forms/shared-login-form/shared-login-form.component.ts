import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import ButtonType from 'src/app/shared/types/button.type';
import FormOptionsType from 'src/app/shared/types/form-options.type';
import { LoginBackgroundImg } from 'src/assets/images';

@Component({
  selector: 'app-shared-login-form',
  templateUrl: './shared-login-form.component.html',
  styleUrl: './shared-login-form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SharedLoginFormComponent implements AfterViewInit {
  @Input() options!: FormOptionsType;

  @ViewChild('form') form!: ElementRef<HTMLFormElement>;
  @ViewChild('file') file!: ElementRef<HTMLInputElement>;
  @ViewChild('img') img!: ElementRef<HTMLImageElement>;
  @ViewChild('btn_container_parent')
  btnContainerParent?: ElementRef<HTMLDivElement>;
  @ViewChild('btn_container_left')
  btnContainerLeft?: ElementRef<HTMLDivElement>;
  @ViewChild('btn_container_right')
  btnContainerRight?: ElementRef<HTMLDivElement>;

  imgMSLoginBtnForm = LoginBackgroundImg;

  ngAfterViewInit() {
    this.form.nativeElement.style.setProperty(
      '--computed-height',
      `${this.form.nativeElement.offsetHeight.toString()}px`
    );

    const btnContainerLeftHeight =
      this.btnContainerLeft?.nativeElement.offsetHeight ?? 0;
    const btnContainerRightHeight =
      this.btnContainerRight?.nativeElement.offsetHeight ?? 0;

    this.btnContainerParent?.nativeElement.style.setProperty(
      '--computed-height',
      `${
        (btnContainerLeftHeight > btnContainerRightHeight
          ? btnContainerLeftHeight
          : btnContainerRightHeight) + 1
      }px`
    );
  }

  generateClassLayer: (button: ButtonType, i: number) => string = (
    button,
    i
  ) => {
    const isfirst = i === 0 || (i === 1 && button.display === 'inline-right');
    const isLast =
      i === this.options.buttons.length - 1 ||
      (i === this.options.buttons.length - 2 &&
        button.display === 'inline-left');

    return [
      button.display,
      isfirst && this.options.padding?.between_input_button ? 'mt-12' : '',
      isLast && this.options.padding?.large_after_last
        ? 'mb-36'
        : isLast && this.options.mslogin
        ? ''
        : 'mb-16',
    ].join(' ');
  };

  fileInputTrigger(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.file.nativeElement.click();
  }

  fileInputChange(e: Event) {
    const file = (e.target as HTMLInputElement).files![0];
    this.img.nativeElement.src = URL.createObjectURL(file);
    this.options.inputs[0].onChange(e);
  }
}
