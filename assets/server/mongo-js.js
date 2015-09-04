var multiline = require('multiline');

module.exports = {
  filename: 'mongo.js',
  file: multiline.stripIndent(function(){/*
    import Mongorito from 'mongorito';

    class Opinions extends Mongorito.Model {
      collection() {
        return 'opinions';
      }
    }

    export default class Mongo {

      constructor() {
        Mongorito.connect('mongodb://54.184.18.78:27017/kenny');
      }

      *getCases(ids) {
        var opinions = yield Opinions.where('id').include(['topic', 'nickname', 'date', 'jdx', 'id']).in(ids).find();
        var byTopics = opinions.reduce((obj, opinion)=> {
          var op = opinion.attributes;
          var topic = op.topic || 'uncategorized';
          obj[topic] ? obj[topic].push(op) : obj[topic] = [op];
          return obj;
        }, {});
        return byTopics;
      }
    }
    */})
}
