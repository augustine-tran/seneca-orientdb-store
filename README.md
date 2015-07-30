seneca-postgresql-store
=======================

[![Build Status](https://travis-ci.org/nherment/seneca-postgresql-store.svg)](https://travis-ci.org/nherment/seneca-postgresql-store)

seneca-postgresql-store is a [PostgreSQL][postgresqlorg] database plugin for the [Seneca][seneca] MVP toolkit. The plugin is using the
[node-postgres][nodepg] driver.

Usage:

    var seneca = require('seneca');
    var store = require('seneca-orientdb-store');

    var config = {}
    var storeopts = {
      name:'dbname',
      host:'127.0.0.1',
      port:2424,
      username:'user',
      password:'password'
    };

    ...

    var si = seneca(config)
    si.use(store, storeopts)
    si.ready(function() {
      var product = si.make('product')
      ...
    })
    ...

[postgresqlorg]: http://www.orientdb.org/
[seneca]: http://senecajs.org/
[nodepg]: https://github.com/orientdb/orientjs
