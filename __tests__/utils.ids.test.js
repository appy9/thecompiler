import {createDashDelimitedId} from '../utils/ids';

describe('createDashDelimitedId', () => {
  test('should create basic id', () => {
    expect(createDashDelimitedId('hello world')).toBe('hello-world');
  });

  test('should lowercase and respect existing special chars', () => {
    expect(createDashDelimitedId('Hello/World')).toBe('hello/world');
  });
});
