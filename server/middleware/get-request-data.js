import getPageData from './get-page-data'

function getRequestData(req, res, next) {
  return Promise.all([getPageData(req)]).then(([pageData]) => {
    req.pageData = pageData
    next()
  })
}

export default getRequestData
