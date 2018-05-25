import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {SpinnerService} from './spinner.service';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnChanges {

  @Input() display?: 'inline' | 'block' = 'block';
  @Input() color?: colorOptions;
  @Input() animation?: string;
  @Input() size?: number;

  inlineStyles: SpinnerStyles = {};
  blockStyles: SpinnerStyles = {};

  calculateSizes(size: number) {
    const borderWidth = Math.ceil(size / 7);
    const widthAndHeight = Math.ceil(size);
    return {
      width: widthAndHeight + 'px',
      height: widthAndHeight + 'px',
      'border-width': borderWidth + 'px'
    };
  }

  constructor(private elementRef: ElementRef,
              private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.setColor(this.color);
    this.setSize(this.size);
    this.setAnimation(this.animation);
  }

  setColor(newColor: string | undefined) {
    if (newColor) {
      const predefinedColors = ['primary', 'secondary'];
      let newColorIsPredefinedColor = false;
      predefinedColors.forEach(color => {
        if (color === newColor) {
          newColorIsPredefinedColor = true;
        }
      });
      if (newColorIsPredefinedColor) {
        this.doForAllStyles(style => {
          style['border-color'] = this.spinnerService.spinnerState[newColor + 'Color'];
          style['border-top-color'] = 'transparent';
        });
      } else {
        this.doForAllStyles(style => {
          style['border-color'] = newColor;
          style['border-top-color'] = 'transparent';
        });
      }
    } else {
      const fontColor = window.getComputedStyle(this.elementRef.nativeElement).getPropertyValue('color');
      this.setColor(fontColor);
    }
  }

  setSize(newSize: number | undefined) {
    if (newSize) {
      this.doForAllStyles(style => {
        Object.assign(style, this.calculateSizes(newSize));
      });
    } else {
      const setInlineSize = () => {
        const fontSize = window.getComputedStyle(this.elementRef.nativeElement).getPropertyValue('font-size');
        const correctionFactor = 0.68;
        Object.assign(this.inlineStyles, this.calculateSizes(parseFloat(fontSize) * correctionFactor));
      };
      setInlineSize();
      const setBlockSize = () => {
        Object.assign(this.blockStyles, this.calculateSizes(42));
      };
    }
  }

  setAnimation(newAnimation: string) {
    this.doForAllStyles(style => {
      if (newAnimation) {
        style.animation = newAnimation;
      } else if (this.spinnerService.spinnerState.animation) {
        style.animation = this.spinnerService.spinnerState.animation;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const colorChange: SimpleChange = changes.color;
    if (colorChange) {
      this.setColor(colorChange.currentValue);
    }
    const animationChange: SimpleChange = changes.animation;
    if (animationChange) {
      this.setAnimation(animationChange.currentValue);
    }
    const sizeChange: SimpleChange = changes.size;
    if (sizeChange) {
      this.setSize(sizeChange.currentValue);
    }
  }

  doForAllStyles(someFunction) {
    const allStyles = [this.inlineStyles, this.blockStyles];
    allStyles.forEach(style => someFunction(style));
  }

}

export type colorOptions = 'primary' | 'secondary' | string;

export interface SpinnerStyles {
  animation?: string;
  'border-width'?: string;
  width?: string;
  height?: string;
  'border-color'?: string;
  'border-top-color'?: string;
}
