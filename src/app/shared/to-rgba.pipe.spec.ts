import { ToRgbaPipe } from './to-rgba.pipe';

describe('ToRgbaPipe', () => {
    let pipe: ToRgbaPipe;

    beforeEach(() => {
        pipe = new ToRgbaPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('normalizeColor should return 0 when value is less than 0', () => {
        const result = (pipe as any).normalizeColor(-5);
        expect(result).toBe(0);
    });

    it('normalizeColor should return 255 when value is greater than 255', () => {
        const result = (pipe as any).normalizeColor(260);
        expect(result).toBe(255);
    });

    it('normalizeColor should return same value when value is between 0 and 255', () => {
        const result = (pipe as any).normalizeColor(42);
        expect(result).toBe(42);
    });

    it('transforms [42, 42, 42] to "rgba(42,42,42,1)"', () => {
        expect(pipe.transform([42, 42, 42])).toBe("rgba(42,42,42,1)");
    });

    it('transforms [42, 42, 300], 0.5 to "rgba(42,42,255,0.5)"', () => {
        expect(pipe.transform([42, 42, 300], 0.5)).toBe("rgba(42,42,255,0.5)");
    });

    it('transforms [42, 42, 42], 5.5 to "rgba(42,42,42,1)"', () => {
        expect(pipe.transform([42, 42, 42], 5.5)).toBe("rgba(42,42,42,1)");
    });

    it('transforms [42, 42, -42], 0.5 to "rgba(42,42,0,0.5)"', () => {
        expect(pipe.transform([42, 42, -42], 0.5)).toBe("rgba(42,42,0,0.5)");
    });
});
