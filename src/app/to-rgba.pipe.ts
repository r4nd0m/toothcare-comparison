import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toRgba'
})
export class ToRgbaPipe implements PipeTransform {

    transform(colors: [number, number, number], alpha?: number): string {
        let normalizedAlpha: number = alpha === undefined ? 1 : alpha;

        if (normalizedAlpha < 0) normalizedAlpha = 0;
        if (normalizedAlpha > 1) normalizedAlpha = 1;

        return 'rgba(' + colors.map(this.normalizeColor).join(',') + ',' + normalizedAlpha + ')';
    }

    private normalizeColor(value: number) {
        if (value < 0) value = 0;
        if (value > 255) value = 255;

        return value;
    }

}
