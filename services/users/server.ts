import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { environment } from "./app/environment";
import db from "./app/models";
import { usersRouter } from "./app/routes/user.routes";

const app = express();

if (environment.env === "development") {
  const { host, cors_port } = environment;
  const corsOptions = { origin: `http://${host}:${cors_port}` };
  app.use(cors(corsOptions));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/// db.sequelize.sync();
// May need this while in development
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

usersRouter(app);

const port = environment.port;
app.listen(port, () => console.log(`Server is running on port ${port}`));
