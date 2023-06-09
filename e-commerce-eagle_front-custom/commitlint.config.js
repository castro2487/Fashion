const typeRegex =
  /(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)/;
const scopeRegex = new RegExp(/PSEP-([0-9]+)/);
const exampleCommit =
  'Example => feat(PSEP-123456789): this commit subject should be at least 10 chars and max 80 chars';

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
    'function-rules/type-enum': [
      2,
      'always',
      (parsed) => {
        if (typeRegex.test(parsed.type)) {
          return [true];
        }

        return [false, exampleCommit];
      },
    ],
    'function-rules/subject-min-length': [
      2,
      'always',
      (parsed) => {
        if (parsed.subject && parsed.subject.length >= 10) {
          return [true];
        }

        return [false, exampleCommit];
      },
    ],
    'function-rules/subject-max-length': [
      2,
      'always',
      (parsed) => {
        if (parsed.subject && parsed.subject.length <= 80) {
          return [true];
        }

        return [false, exampleCommit];
      },
    ],
    'function-rules/scope-enum': [
      2,
      'always',
      (parsed) => {
        if (scopeRegex.test(parsed.scope)) {
          return [true];
        }

        return [false, exampleCommit];
      },
    ],
    'function-rules/scope-enum': [
      2,
      'always',
      (parsed) => {
        if (scopeRegex.test(parsed.scope)) {
          return [true];
        }

        return [false, exampleCommit];
      },
    ],
  },
};
