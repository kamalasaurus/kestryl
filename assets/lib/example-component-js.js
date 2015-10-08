var multiline = require('multiline');

module.exports = {
  filename: 'example-component.js',
  file: multiline.stripIndent(function(){/*
    import m from 'mithril';

    const { keys } = Object;

    export default class ExampleComponent {

      constructor() {
        this.componentId = m.prop('');
        this.data = m.prop({keys: [], list: []});

        this.controller = ()=> {

          this.userID(m.route.param('userID'));
          m.request({
              method: 'GET',
              url: `/list/${this.userID()}`,
              background: true,
              initialValue: {
                keys: [],
                list: []
              }
            }).then((success)=> {
              this.data(success);
              m.redraw(this);
            }.bind(this));

          return this;
        }
      }

      view(controller) {

        var header = [
          m('tr', controller.data().keys.map((el)=> {
              return m('th', el);
            })
          )
        ];

        var list = controller.data().list.map((el)=> {
          var isGreen = +el.percent === 100 ? '.green' : '';

          return m('tr', {
              onclick: this.audit.bind(this, el.batch)
            },
            [
              m('td.center', el.batch),
              m('td', el.date),
              m('td', el.files),
              m(`td${isGreen}`, el.percent)
            ]);
        });

        var menu = [ new Menu('list') ];
        var spinner = [ m('div', 'loading') ];
        var table = [m('table', header.concat(list))];

        var content = controller.data().keys.length
          ? menu.concat(table)
          : menu.concat(spinner);

        return m('div.list', content);

      }

    }
    */})
}
