import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Jean',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Jean&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Jean',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Jean&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Jean',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});
0;

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Jean&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Jean',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value pair to object', () => {
    const qs = 'name=Jean';

    expect(parse(qs)).toEqual({
      name: 'Jean',
    });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Jean&abilities=JS,TDD';

    expect(parse(qs)).toEqual({
      name: 'Jean',
      abilities: ['JS', 'TDD'],
    });
  });
});
