import { ToRgbaPipe } from './to-rgba.pipe';

describe('ToRgbaPipe', () => {
    it('create an instance', () => {
        const pipe = new ToRgbaPipe();
        expect(pipe).toBeTruthy();
    });

    it('transforms [42, 42, 42] to "rgba(42,42,42,1)"', () => {
        const pipe = new ToRgbaPipe();
        expect(pipe.transform([42, 42, 42])).toBe("rgba(42,42,42,1)");
    });


    it('transforms [42, 42, 300], 0.5 to "rgba(42,42,255,0.5)"', () => {
        const pipe = new ToRgbaPipe();
        expect(pipe.transform([42, 42, 300], 0.5)).toBe("rgba(42,42,255,0.5)");
    });

    it('transforms [42, 42, 42], 5.5 to "rgba(42,42,42,1)"', () => {
        const pipe = new ToRgbaPipe();
        expect(pipe.transform([42, 42, 42], 5.5)).toBe("rgba(42,42,42,1)");
    });

    it('transforms [42, 42, -42], 0.5 to "rgba(42,42,0,0.5)"', () => {
        const pipe = new ToRgbaPipe();
        expect(pipe.transform([42, 42, -42], 0.5)).toBe("rgba(42,42,0,0.5)");
    });
});
