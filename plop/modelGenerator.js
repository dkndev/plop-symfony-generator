const config = require('./config.json')
const { inputRequired } = require('./utils')

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
              'text',
              'json',
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
    actions: [
      {
        type: 'add',
        path: `${config.folder.model}/{{properCase modelName}}/{{properCase modelName}}.php`,
        templateFile: 'plop/templates/model/model.php.hbs',
      },
      {
        type: 'add',
        path: `${config.folder.model}/{{properCase modelName}}/{{properCase modelName}}Id.php`,
        templateFile: 'plop/templates/model/modelId.php.hbs'
      },
      // {
      //   type: 'add',
      //   path: `${config.folder.model}/{{properCase modelName}}/{{properCase modelName}}.php`,
      //   templateFile: 'plop/templates/modelType.php.hbs',
      //   skip(data) {
      //     console.log(data)
      //   }
      // }
    ],
  })
}
