import app from "./server"
import { MongoClient } from "mongodb"
import MoviesDAO from "../src/dao/moviesDAO"
import UsersDAO from "./dao/usersDAO"
import CommentsDAO from "./dao/commentsDAO"

const port = process.env.PORT || 8000

const testClient = MongoClient.connect(
  process.env.MFLIX_DB_URI,
  {
    useNewUrlParser: true,
    poolSize: 50,
    wtimeout: 2500
  },
)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await MoviesDAO.injectDB(client)
    await UsersDAO.injectDB(client)
    await CommentsDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })