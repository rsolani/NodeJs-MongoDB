/**
 * Created by robertsonvicente on 21/12/16.
 */
var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var db;

MongoClient.connect('mongodb://ip:port/{dbname}', function (err, database) {
    assert.equal(err, null);
    db = database;
    console.log('MongoDB conectado')

    router.get('/', function(req, res) {

        var collection = db.collection('promotion');

        collection.find({}).toArray(function(err, dados) {
            res.status(200).json(dados);
        });
    });
});

module.exports = router;
