import restify from "restify";
import morgan from "morgan";
import corsMiddleware from "restify-cors-middleware2";
// importing routes
import PrincipalRoute from "../routes";

const server = restify.createServer({
  name: process.env.SERVICE_NAME || "service-name",
  version: process.env.SERVICE_VERSION || "1.0.0",
});

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ["http://localhost:3000", "https://leoda-shop.vercel.app"],
  allowHeaders: ["API-Token"],
  exposeHeaders: ["API-Token-Expiry"],
});

// middlewares
server.pre(cors.preflight);
server.use(cors.actual);
server.use(morgan("dev"));

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
PrincipalRoute.applyRoutes(server);

export { server };
