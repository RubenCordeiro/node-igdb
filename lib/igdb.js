'use strict';

var _baseUrl = 'http://igdb.com/api/v1/games/',
    _token = null;

function _getCompanyGames(companyIdentifier) {

}

function _getPersonGames(personIdentifier) {

}

function _getPersonTitles(personIdentifier) {

}

module.exports = {
    init: function (token) {
        _token = token;
    },
    games: {
        meta: function () {

        },
        search: function (term, options) {

        },
        one: function (id) {

        }
    },
    companies: {
        meta: function () {

        },
        all: function (options) {

        },
        one: function (identifier) {

        }
    },
    people: {
        meta: function () {

        },
        all: function (options) {

        },
        one: function (identifier) {

        }
    }
};

