// Back-end API RESTful
import cors from "@fastify/cors";
import Fastify from "fastify";
import { appRoutes } from "./routes";

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
  port: 3333,
  host: '192.168.5.13'
}).then(() => {
  console.log('HTTP Server running in port 3333!')
})