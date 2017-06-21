//fetch server data
export const fetchText = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        err: null,
        res: 'hello plume2'
      });
    }, 200);
  });
};
