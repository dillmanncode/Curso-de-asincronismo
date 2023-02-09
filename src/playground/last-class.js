export function runCode(url) {
    let bolean = validate(url)
    if (bolean === false || url === 'http://') {
      throw new Error('Invalid URL');
    }
  
    return fetchData(url).then(res => res.json()).catch(err => {throw new Error('Something was wrong')})
  }
  
  const validate = (url) => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  
  function fetchData (url) {
    return fetch(url, { method: "GET" });
  }