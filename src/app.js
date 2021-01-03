const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");

const app = express();
//===================================
//ルーティングロード
//===================================
const indexRouter = require('./routes/r_index');
const usersRouter = require('./routes/r_users');
//===================================
//コントローラーロード
//===================================
const initTestController = require('./controllers/initTestsController');
const c_position = require('./controllers/c_position');
//===================================
//mongoose接続
//===================================
mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@mongo:27017/uniq_db`,
  { userNewParser: true }
);
mongoose.set("useCreateIndex", true);
mongoose.Promise = global.Promise;
//===================================
//セットアップ
//===================================
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//===================================
//ミドルウェア
//===================================
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//===================================
//ルーティング
//===================================
app.get('/initTest', initTestController.test);/* 初期テストルーティング */
app.get('/getPosition', c_position.getPosition);
app.get('/savePosition', c_position.savePosition);
app.use('/', indexRouter);
app.use('/users', usersRouter);
//===================================
//エラーハンドラ
//===================================
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
