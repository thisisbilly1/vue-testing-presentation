function callApi(url) {
  return fetch(url).then(response => response.json())
}

export {
  callApi
}