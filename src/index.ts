import "dotenv/config";

import { server } from "./service/server";

server.listen(process.env.PORT || 4000, () => {
  console.log("%s listening on port %s", server.name, process.env.PORT);
});
