export const httpHelper = () => {
    const customFetch = (endpoint, options) => {
      const defaultHeader = {
        accept: "application/json",
      };
  
      const controller = new AbortController();
      options.signal = controller.signal;
  
      options.method = options.method || "GET";
      options.headers = options.headers
        ? { ...defaultHeader, ...options.headers }
        : defaultHeader;
  
      options.body = JSON.stringify(options.body) || false;
      if (!options.body) delete options.body;
  
  
      let abortTime = 10000 * 4 //40 seconds to abort
      setTimeout(() => controller.abort(), abortTime);
  
      return fetch(endpoint, options)
        .then((res) =>
          res.ok
            ? res.json()
            : Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "An error occur",
              })
        )
        .catch((err) => err);
    };
  
    const get = (url, options = {}) => customFetch(url, options);
  
    const post = (url, options = {}) => {
      options.method = "POST";
      return customFetch(url, options);
    };
  
    const put = (url, options = {}) => {
      options.method = "PUT";
      return customFetch(url, options);
    };
  
    const del = (url, options = {}) => {
      options.method = "DELETE";
      return customFetch(url, options);
    };
  
    return {
      get,
      post,
      put,
      del,
    };
  };