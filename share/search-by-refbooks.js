const { REF_CODES } = require("../share/constants");
const { CONDITIONS } = require("../data/refbooks/conditions");
const { PROCESS_RULES } = require("../data/refbooks/process-rule");
const { RULE_COLUMNS } = require("../data/refbooks/rule-column");
const { TARGETS } = require("../data/refbooks/target");

const searchByRrefbooks = (ref_code, substring) => {
  let refbook;
  switch (ref_code) {
    case REF_CODES.CONDITION: {
      refbook = CONDITIONS;
      break;
    }
    case REF_CODES.PROCESS_RULE: {
      refbook = PROCESS_RULES;
      break;
    }
    case REF_CODES.RULE_COLUMN: {
      refbook = RULE_COLUMNS;
      break;
    }
    case REF_CODES.TARGET:
      refbook = TARGETS;
      break;
    default:
      refbook = [];
  }

  const flatSearch = () =>
    refbook.filter((it) => {
      const name = (it.name || "").toLowerCase().trim();
      const search = (substring || "").toLowerCase().trim();
      return name.includes(search);
    });

  return flatSearch();
};

module.exports = {
  searchByRrefbooks,
};