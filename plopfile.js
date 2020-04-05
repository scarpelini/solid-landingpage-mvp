/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-undef
module.exports = plop => {
  plop.setGenerator('page', {
    description: 'Create a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'generator/template/page/Page.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/Layout/{{pascalCase name}}Layout.tsx',
        templateFile: 'generator/template/page/layout/Layout.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/Layout/{{pascalCase name}}.styled.ts',
        templateFile: 'generator/template/page/layout/Layout.styled.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/Layout/{{pascalCase name}}Layout.stories.tsx',
        templateFile: 'generator/template/page/layout/Layout.stories.tsx.hbs',
        skipIfExists: true,
      },
    ],
  });

  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'list',
        name: 'type',
        message: 'What is your component type?',
        choices: ['Function', 'Class'],
      },
    ],
    actions: function (data) {
      const actions = [];

      if (data.type === 'Function') {
        actions.push({
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'generator/template/component/FunctionComponent.tsx.hbs',
          skipIfExists: true,
        });
      } else {
        actions.push({
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'generator/template/component/ClassComponent.tsx.hbs',
          skipIfExists: true,
        });
      }

      actions.push({
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.styled.ts',
        templateFile: 'generator/template/component/Styled.ts.hbs',
        skipIfExists: true,
      });

      actions.push({
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'generator/template/component/Stories.tsx.hbs',
        skipIfExists: true,
      });

      actions.push({
        type: 'append',
        path: 'src/components/index.ts',
        template: "export { default as {{pascalCase name}} } from './{{pascalCase name}}/{{pascalCase name}}';",
        unique: true,
      });

      return actions;
    },
  });

  plop.setGenerator('service', {
    description: 'Create a new service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/services/{{name}}Service.ts',
        templateFile: 'generator/template/service/service.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/services/index.ts',
        template: "export { default as {{name}}Service } from './{{name}}Service';",
      },
    ],
  });
};
