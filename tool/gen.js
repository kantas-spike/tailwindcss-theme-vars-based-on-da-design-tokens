import nunjucks from "nunjucks";
import fs from "fs";
import path from "path";

const dest_path = "dist/theme.css";
const dest_dir = path.dirname(dest_path);
const config_path = "tool/theme.json";

const theme = JSON.parse(fs.readFileSync(config_path, "utf-8"));

if (!fs.existsSync(dest_dir)) {
  fs.mkdirSync(dest_dir, { recursive: true });
}

/* console.log(theme) */
nunjucks.configure("tool/templates", { autoescape: true });
nunjucks.render("theme.css", { theme }, (err, res) => {
  //console.log(res);
  fs.writeFileSync(dest_path, res);
});
