module.exports = function (plop) {
  // Factory generator
  plop.setGenerator('factory', {
    description: 'Create a factory',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Factory name please',
      },
    ],
    actions: function (data) {
      const actions = [];

      actions.push(
        {
          type: 'addMany',
          destination: 'src/factories/{{pascalCase name}}',
          base: 'plop-templates/factory',
          templateFiles: 'plop-templates/factory/**',
          globOptions: {
            dot: true,
          },
        },
      );

      return actions;
    },
  });

  // Service generator
  plop.setGenerator('service', {
    description: 'Create a service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Service name please',
      },
    ],
    actions: function (data) {
      const actions = [];

      actions.push(
        {
          type: 'addMany',
          destination: 'src/services/{{pascalCase name}}',
          base: 'plop-templates/service',
          templateFiles: 'plop-templates/service/**',
          globOptions: {
            dot: true,
          },
        },
      );

      return actions;
    },
  });

  // Model generator
  plop.setGenerator('model', {
    description: 'Create a model',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Model name please',
      },
    ],
    actions: function (data) {
      const actions = [];

      actions.push(
        {
          type: 'addMany',
          destination: 'src/models/{{pascalCase name}}',
          base: 'plop-templates/model',
          templateFiles: 'plop-templates/model/**',
          globOptions: {
            dot: true,
          },
        },
      );

      return actions;
    },
  });

  // Component generator
  plop.setGenerator('component', {
    description: 'Create a React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Input component name',
      },
      {
          type: 'list',
          name: 'type',
          message: 'Choose component type',
          default: 'molecules',
          choices: [
            { name: 'Atom', value: 'atoms' },
            { name: 'Molecule', value: 'molecules' },
            { name: 'Organism', value: 'organisms' },
            { name: 'Functional', value: 'functional'},
          ],
        },
    ],
    actions: function (data) {
      switch(data.type) {
        case 'molecules':
          return [{
            type: 'addMany',
            destination: 'src/components/molecules/{{pascalCase name}}',
            base: 'plop-templates/component',
            templateFiles: 'plop-templates/component/**'
          }]
        case 'organisms':
          return [{
            type: 'addMany',
            destination: 'src/components/organisms/{{pascalCase name}}',
            base: 'plop-templates/component',
            templateFiles: 'plop-templates/component/**'
          }]
        case 'functional':
          return [{
            type: 'addMany',
            destination: 'src/components/functional/{{pascalCase name}}',
            base: 'plop-templates/component',
            templateFiles: 'plop-templates/component/**'
          }]
        default: // atoms
          return [{
            type: 'addMany',
            destination: 'src/components/atoms/{{pascalCase name}}',
            base: 'plop-templates/component',
            templateFiles: 'plop-templates/component/**'
          }]
      }
    },
  });
};
