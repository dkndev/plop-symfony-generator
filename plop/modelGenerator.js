const config = require('./config.json')
const {inputRequired} = require('./utils')
const _ = require('lodash')

module.exports = plop => {
  plop.setGenerator('model/entity', {
    prompts: [
      {
        type: 'input',
        name: 'modelName',
        message: 'model name please',
        validate: inputRequired('modelName')
      },
      {
        type: 'recursive',
        name: 'fields',
        message: 'Would you like to add a field?',
        default: true,
        prompts: [
          {
            type: 'input',
            name: 'name',
            message: 'Field Name',
            validate: inputRequired('name')
          },
          {
            type: 'list',
            name: 'type',
            message: 'Field Type:',
            choices: [
              'customType',
              'string',
              'int',
              'array',
              'boolean',
              'dateTime',
            ]
          },
          {
            message: 'Will this field be nullable?',
            type: 'confirm',
            name: 'nullable',
            default: false
          },
        ]
      }
    ],
    actions: data => {
      let actions = []

      data.fields = data.fields.map(field => {
        if (field.type === 'customType') {
          field.isCustomType = true
        } else {
          field.isCustomType = false
        }

        return field
      })

      actions.push({
          type: 'add',
          path: `${config.folder.model}/{{properCase modelName}}/{{properCase modelName}}.php`,
          templateFile: 'templates/model/model.php.hbs',
        },
        {
          type: 'add',
          path: `${config.folder.model}/{{properCase modelName}}/{{properCase modelName}}Id.php`,
          templateFile: 'templates/model/modelId.php.hbs'
        })

      data.fields.forEach(field => {
        if (field.isCustomType) {
          actions.push(
            {
              data: {field},
              type: 'add',
              path: `${config.folder.model}/{{properCase modelName}}/{{properCase modelName}}${_.upperFirst(_.camelCase(field.name))}.php`,
              templateFile: 'templates/model/modelType.php.hbs',
            }
          )
        }
      })

      return actions
    },
  })
}
