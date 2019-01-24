import { useEffect, useContext, useState } from 'react'
import { ApplicationDataContext } from '../context/applicationDataContext'

// utility functions
function handleError(e) {
  console.log('fetched data error') //eslint-disable-line
  console.log(e) //eslint-disable-line
}

function handlePageData(pageData, setPageData) {
  document.title = pageData.title
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', pageData.description)

  // update the usePageData state with the latest page data
  setPageData(pageData)
}

// any component utilising this hook will have this common behaviour added
const usePageData = path => {
  // initial data from SSR for 1st page hydration
  const { ssrPageData, removeSSRPageData } = useContext(ApplicationDataContext)

  // state: pageData, and whether it's currently being loaded.
  const [pageData, setPageData] = useState(ssrPageData)
  const [isLoading, setIsLoading] = useState(!ssrPageData)
  const dataUrl = `/api${path}`

  // side effects are handled by effects
  // the first time this runs on the client (it never runs on the server), we
  // use the bootstrapped ssr page data (and also use it to prevent the unecessary fetch),
  // then clean up/delete it
  useEffect(() => {
    if (!ssrPageData) {
      setIsLoading(true)

      fetch(dataUrl)
        .then(response => {
          if (response.status >= 400) {
            // 404 is a success with fetch, quick hack to keep CSR working.
            return {
              title: 'err',
              description: 'err desc',
              component: 'error',
              data: '{}',
            }
          }
          return response.json()
        })
        .then(apiJSON => handlePageData(apiJSON, setPageData))
        .catch(handleError)
        .finally(() => setIsLoading(false))
    } else {
      removeSSRPageData()
    }
  }, [dataUrl]) // the 2nd param passed to useEffect tells the effect to run only when a value in this array changes.

  // return the two pieces of state a page level component requires
  return {
    isLoading,
    pageData,
  }
}

export default usePageData
