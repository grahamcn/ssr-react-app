function getPageData(req) {
  const { url } = req
  const pageDataUrl = `http://127.0.0.1:8090/api${url}`

  return fetch(pageDataUrl).then(data => data.json())
}

export default getPageData
