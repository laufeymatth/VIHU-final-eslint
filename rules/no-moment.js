// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
    create(context) {
      return {
        ImportDeclaration(node) {
          if (node.source.value === "moment")
            context.report({
              node,
              message: "Moment should not be used.",
            });
        },
      };
    },
  };