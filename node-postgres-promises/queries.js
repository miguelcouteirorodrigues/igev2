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
    var parishID = parseInt(req.params.id);

    //var query = 'SELECT "ANO", "GEO_COD_DSG", "N_EDIFICIOS_1OU2_PISOS", "N_EDIFICIOS_3OU4_PISOS", "N_EDIFICIOS_5OU_MAIS_PISOS" FROM public.bgri_cont_dados WHERE "GEO_COD" = E\'\\\'' + parishID + '\';';
    var query = 'SELECT dados."ANO", public.lug11.descr as "GEO_COD_DSG", dados."N_EDIFICIOS_1OU2_PISOS", dados."N_EDIFICIOS_3OU4_PISOS", dados."N_EDIFICIOS_5OU_MAIS_PISOS" FROM public.bgri_cont_dados dados INNER JOIN public.bgri11_cont_conc_porto ON public.bgri11_cont_conc_porto.bgri11 = SUBSTRING(dados."GEO_COD", 2) INNER JOIN public.lug11 ON public.lug11.id = public.bgri11_cont_conc_porto.lug11 WHERE public.bgri11_cont_conc_porto.bgri11 = \'' + parishID + '\'';

    console.log(query);

    db.any(query)
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
    db.any('SELECT * FROM public_topo.bgri11_cont_conc_porto_geo')
    .then(function (data) {
        res.status(200)
           /* .json({
                geometries: data
                
                //data: data
             }); */
            .send(data);
    })
    .catch(function (err) {
        return next(err);
    });
}