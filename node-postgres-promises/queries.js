var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:postgres@localhost:5432/BGRI';
var db = pgp(connectionString);

// add query functions
module.exports = {
  getData: getData,
  getMap: getMap
};

function getData(req, res, next) {
    db.any('SELECT * FROM points_conc_porto')
    .then(function (data) {
        res.status(200)
        .json({
            status: 'success',
            data: data,
            message: 'Retrieved data'
        });
    })
    .catch(function (err) {
        return next(err);
    });
}

function getMap(req, res, next) {
    db.any('select gid, objectid, fr11, sec11, ss11, bgri11, lug11, descr, ST_ASGeoJSON(geom) as geom from bgri11_cont_conc_porto order by gid')
    .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved map'
        });
    })
    .catch(function (err) {
        return next(err);
    });
}