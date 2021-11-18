import { Directive, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[clickOutside]',
})
export class ClickOutsideDirective {
    @Input('ignoreOnId') ignoreOnId: string;

    @Output() public clickOutside = new EventEmitter();
    constructor(private _elementRef: ElementRef) {

    }

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        if (this.ignoreOnId && targetElement.id === this.ignoreOnId) {
            return;
        }
        const isClickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!isClickedInside) {
            this.clickOutside.emit(null);
        }
    }
}
