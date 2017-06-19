//fetch server data
export const fetchText = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        err: null,
        text: 'hello world from webapi'
      });
    }, 200);
  });
};
