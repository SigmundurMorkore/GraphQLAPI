const hapi = require("hapi")
const mongoose = require("mongoose")

mongoose.connect(
  "mongodb://sigmundur:Testing1234@ds237620.mlab.com:37620/graphql"
)

mongoose.connection.once("open", () => {
  console.log("Connected to database")
})

const server = hapi.server({
  port: 4000,
  host: "localhost"
})

const init = async () => {
  server.route({
    method: "GET",
    path: "/",
    handler: (request, reply) => {
      return `<h1>My modern api</h1>`
    }
  })

  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()
