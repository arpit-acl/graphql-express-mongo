import { addAliases } from "module-alias";
addAliases({
    "@module": __dirname + "/src/modules",
    "@schema": __dirname + "/src/schema",
    "@config": __dirname + "/src/config",
    "@jobs": __dirname + "/src/jobs",
    "@models": __dirname + "/src/models",
    "@helpers": __dirname + "/src/helpers",
    "@middlewares": __dirname + "/src/middleware"
})
