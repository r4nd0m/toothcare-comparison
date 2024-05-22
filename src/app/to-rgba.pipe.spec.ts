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

  
  it('transforms [42, 42, 42], 0.5 to "rgba(42,42,42,1)"', () => {
    const pipe = new ToRgbaPipe();
    expect(pipe.transform([42, 42, 42], 0.5)).toBe("rgba(42,42,42,0.5)");
  });
});
