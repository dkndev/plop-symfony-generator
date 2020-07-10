const _ = require('lodash')
const pluralize = require('pluralize')
const inquirerRecursive = require('inquirer-recursive')


module.exports = (plop) => {
  plop.setPrompt('recursive', inquirerRecursive)
  plop.setHelper('pluralizeSnakeCase', function (text) {
    return pluralize(_.lowerCase(text))
  })

  plop.load('./plop/modelGenerator.js');

  // controller generator
  // plop.setGenerator('controller', {
  //   description: 'application controller logic',
  //   prompts: [{
  //     type: 'input',
  //     name: 'controllerName',
  //     message: 'controller name please'
  //   }],
  //   actions: [{
  //     type: 'add',
  //     path: `${config.folder.controller}/{{properCase controllerName}}Controller.php`,
  //     templateFile: 'plop/templates/controller.php.hbs'
  //   }]
  // })
  //

  // plop.setGenerator('create crud', {
  //   description: 'write message',
  //   prompts: [
  //     {
  //       type: 'checkbox',
  //       name: 'writeOptions',
  //       message: 'Write options',
  //       choices: ['add', 'update', 'delete', 'archive'],
  //       default: ['add', 'update', 'delete', 'archive']
  //     },
  //     {
  //       type: 'checkbox',
  //       name: 'readOptions',
  //       message: 'Read options',
  //       choices: ['listing', 'detail', 'select-listing'],
  //       default: ['listing', 'detail', 'select-listing'],
  //     },
  //     {
  //       type: 'input',
  //       name: 'featureName',
  //       message: 'feature name',
  //       validate: function (value) {
  //         if ((/.+/).test(value)) {
  //           return true
  //         }
  //         return 'name is required'
  //       }
  //     }
  //   ],
  //   actions: [
  //     {
  //       type: 'add',
  //       path: `${config.folder.writeMessage}/{{properCase featureName}}/{{crudType}}{{properCase featureName}}/{{crudType}}{{properCase featureName}}.php`,
  //       templateFile: 'plop/templates/crud/write/message.php.hbs',
  //       data: {crudType: 'Add'},
  //       skip(data) {
  //         console.log(data.writeOptions)
  //         if (!data.writeOptions.includes('add')) return 'not selected'
  //       }
  //     },
  //     {
  //       type: 'add',
  //       path: `${config.folder.writeMessage}/{{properCase featureName}}/{{crudType}}{{properCase featureName}}/{{crudType}}{{properCase featureName}}Handler.php`,
  //       templateFile: 'plop/templates/crud/write/messageHandler.php.hbs',
  //       data: {crudType: 'Add'},
  //       skip(data) {
  //         if (!data.writeOptions.includes('add')) return 'not selected'
  //       }
  //     },
  //     {
  //       type: 'add',
  //       path: `${config.folder.writeMessage}/{{properCase featureName}}/{{crudType}}{{properCase featureName}}/{{crudType}}{{properCase featureName}}.php`,
  //       templateFile: 'plop/templates/crud/write/message.php.hbs',
  //       data: {crudType: 'Update'},
  //       skip(data) {
  //         console.log(data.writeOptions)
  //         if (!data.writeOptions.includes('update')) return 'not selected'
  //       }
  //     },
  //     {
  //       type: 'add',
  //       path: `${config.folder.writeMessage}/{{properCase featureName}}/{{crudType}}{{properCase featureName}}/{{crudType}}{{properCase featureName}}Handler.php`,
  //       templateFile: 'plop/templates/crud/write/messageHandler.php.hbs',
  //       data: {crudType: 'Update'},
  //       skip(data) {
  //         if (!data.writeOptions.includes('update')) return 'not selected'
  //       }
  //     },
  //     {
  //       type: 'add',
  //       path: `${config.folder.writeMessage}/{{properCase featureName}}/{{crudType}}{{properCase featureName}}/{{crudType}}{{properCase featureName}}.php`,
  //       templateFile: 'plop/templates/crud/write/message.php.hbs',
  //       data: {crudType: 'Delete'},
  //       skip(data) {
  //         console.log(data.writeOptions)
  //         if (!data.writeOptions.includes('delete')) return 'not selected'
  //       }
  //     },
  //     {
  //       type: 'add',
  //       path: `${config.folder.writeMessage}/{{properCase featureName}}/{{crudType}}{{properCase featureName}}/{{crudType}}{{properCase featureName}}Handler.php`,
  //       templateFile: 'plop/templates/crud/write/messageHandler.php.hbs',
  //       data: {crudType: 'Delete'},
  //       skip(data) {
  //         if (!data.writeOptions.includes('delete')) return 'not selected'
  //       }
  //     },
  //     {
  //       type: 'add',
  //       path: `${config.folder.writeMessage}/{{properCase featureName}}/{{crudType}}{{properCase featureName}}/{{crudType}}{{properCase featureName}}.php`,
  //       templateFile: 'plop/templates/crud/write/message.php.hbs',
  //       data: {crudType: 'Archive'},
  //       skip(data) {
  //         console.log(data.writeOptions)
  //         if (!data.writeOptions.includes('archive')) return 'not selected'
  //       }
  //     },
  //     {
  //       type: 'add',
  //       path: `${config.folder.writeMessage}/{{properCase featureName}}/{{crudType}}{{properCase featureName}}/{{crudType}}{{properCase featureName}}Handler.php`,
  //       templateFile: 'plop/templates/crud/write/messageHandler.php.hbs',
  //       data: {crudType: 'Archive'},
  //       skip(data) {
  //         if (!data.writeOptions.includes('archive')) return 'not selected'
  //       }
  //     },
  //   ]
  // })
}
