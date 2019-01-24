import getClientSettings from './get-client-settings'
import getPageData from './get-page-data'

function getRequestData(req, res, next) {
  return Promise.all([getClientSettings(req), getPageData(req)]).then(
    ([clientSettings, pageData]) => {
      req.clientSettings = clientSettings
      req.pageData = pageData
      next()
    },
  )
}

export default getRequestData
