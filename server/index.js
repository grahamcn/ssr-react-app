import 'isomorphic-fetch'

import app from './app'

const PORT = process.env.PORT || 8090
console.log(`App is listening on port ${PORT}`) // eslint-disable-line

app.listen(PORT)
