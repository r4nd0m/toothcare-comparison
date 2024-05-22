import { TestBed } from '@angular/core/testing';

import { CalculationService } from './calculation.service';
import { ToRgbaPipe } from './to-rgba.pipe';

describe('CalculationService', () => {
    let service: CalculationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ToRgbaPipe]
        });
        service = TestBed.inject(CalculationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
