import * as createError from "http-errors";
import express from "express";
import logger from "morgan";
import indexRouter from "./routes/index";
import releaseRequestsRouter from "./routes/releaseRequests";
import resourceRequestRouter from "./routes/resourceRequest";
import skillsRouter from "./routes/skills";
import certificatesRouter from "./routes/certificates";
import trainingsRouter from "./routes/trainings";
import employeesRouter from "./routes/employees";
import logInRouter from "./routes/logIn";

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/requests/release", releaseRequestsRouter);
app.use("/requests/resource", resourceRequestRouter);
app.use("/skills", skillsRouter);
app.use("/certificates", certificatesRouter);
app.use("/trainings", trainingsRouter);
app.use("/employees", employeesRouter);
app.use("/logIn", logInRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, _) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
