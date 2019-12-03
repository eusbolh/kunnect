export const getResponseData = response => response.data;

export const getErrorData = error => error.response;

export const getErrorDetails = error => error.response && error.response.data && error.response.data.data && error.response.data.data.errors;

export const makeCancelable = (promise) => {
  let hasCanceled = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (val) => {
        if (hasCanceled) {
          return reject();
        }
        return resolve(val);
      },
      () => {
        if (hasCanceled) {
          return reject();
        }
        return resolve();
      },
    );
  });
  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    },
  };
};
