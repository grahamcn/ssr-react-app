function getClientSettings(req) {
  const clientId = 1 // feature A ON
  // const clientId = 2 // feature A OFF

  console.log(`Get Client Settings, API Route: ${req.url}, Client: ${clientId}`) // eslint-disable-line

  return fetch(`http://127.0.0.1:8090/client-settings/${clientId}`).then(data =>
    data.json(),
  )
}

export default getClientSettings
