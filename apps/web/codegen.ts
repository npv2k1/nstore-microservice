import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  generates: {
    './src/services/graphql/codegen/index.tsx': {
      schema: 'http://localhost:4005/graphql',
      documents: ['./**/services/graphql/gql/*.graphql'],
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
    },
  },
};

export default config;
