import "dotenv/config";

import { server } from "./service/server";

server.listen(process.env.SERVICE_PORT || 4000, () => {
  console.log("%s listening on port %s", server.name, process.env.SERVICE_PORT);
});
