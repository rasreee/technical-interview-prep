function times(n: number): number[];

function times<Cb extends (n: number) => any>(n: number, callback: Cb): ReturnType<Cb>[];

function times<Cb extends (n: number) => any>(n: number, callback?: Cb): (number[] | ReturnType<Cb>)[] {
  const result: any[] = [];

  let i = 0;
  while (i < n) {
    result[i] = callback ? callback(i) : i;
    i += 1;
  }

  return result;
}

export default times;
