import * as createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import path from 'path';
import indexRouter from './routes/index';
import releaseRequestsRouter from './routes/releaseRequests';
import resourceRequestRouter from './routes/resourceRequest';
import skillsRouter from './routes/skills';
import certificatesRouter from './routes/certificates';
import trainingsRouter from './routes/trainings';
import employeesRouter from './routes/employees';
import logInRouter from './routes/logIn';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/', indexRouter);
app.use('/api/requests/release', releaseRequestsRouter);
app.use('/api/requests/resource', resourceRequestRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/certificates', certificatesRouter);
app.use('/api/trainings', trainingsRouter);
app.use('/api/employees', employeesRouter);
app.use('/api/logIn', logInRouter);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  console.log(`${__dirname}/frontend/build/index.html`);
  res.sendFile(path.join(`${__dirname}/../../frontend/build/index.html`));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, _) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
