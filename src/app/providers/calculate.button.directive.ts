import { Directive, HostBinding, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
    standalone: true,
    selector: '[calculateButton]'
})
export class CalculateButtonDirective implements OnInit, OnChanges {
    @HostBinding('textContent') buttonText: string;
    @HostBinding('disabled') buttonDisabled: boolean;
    @Input({required: true}) inputDataPresent: boolean;
    @Input({required: true}) calculatingInProgress: boolean;

    ngOnInit() {
        this.buttonText = 'calculate';
    }

    ngOnChanges() {
        this.buttonDisabled = this.calculatingInProgress || !this.inputDataPresent;

        this.buttonText = this.calculatingInProgress ? 'calculating' : 'recalculate';
    }
}
