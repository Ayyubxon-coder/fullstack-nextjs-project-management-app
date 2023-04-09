export const delay = (time: number): Promise<any> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });
