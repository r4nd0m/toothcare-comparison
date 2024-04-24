import { Directive, HostBinding, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[calculateButtonDirective]'
})
export class CalculateButtonDirective implements OnInit, OnChanges {
  @HostBinding('textContent') buttonText: string;
  @HostBinding('disabled') buttonDisabled: boolean;
  @Input('inputDataPresent') inputDataPresent: boolean;
  @Input('calculatingInProgress') calculatingInProgress: boolean;

  constructor() { }

  ngOnInit() {
    this.buttonText = 'calculate';
  }

  ngOnChanges() {
    this.buttonDisabled = this.calculatingInProgress || !this.inputDataPresent;

    this.buttonText = this.calculatingInProgress ? 'calculating' : 'recalculate';
  }
}
