// running via babel-node rathan than node means we can use ES6 features - & modules
// currently using fetch server side, so:
import 'isomorphic-fetch'

import app from './app'

const PORT = process.env.PORT || 8090

console.log(`App is listening on port ${PORT}`) // eslint-disable-line

app.listen(PORT)
