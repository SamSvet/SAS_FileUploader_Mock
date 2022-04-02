const { REF_CODES } = require("../share/constants");
const { CONDITIONS, conditions } = require("../data/refbooks/conditions");
const { PROCESS_RULES, process_rules } = require("../data/refbooks/process-rule");
const { RULE_COLUMNS, rule_columns } = require("../data/refbooks/rule-column");
const { TARGETS, targets } = require("../data/refbooks/targets");
const { TARGET_COLUMNS, target_columns } = require("../data/refbooks/target-column");

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
    case REF_CODES.TARGET_COLUMN:
      refbook = TARGET_COLUMNS;
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

const searchOriginalRefBook = (ref_code) => {
  const originalIndex = {
    [REF_CODES.CONDITION]: conditions,
    [REF_CODES.PROCESS_RULE]: process_rules,
    [REF_CODES.RULE_COLUMN]: rule_columns,
    [REF_CODES.TARGET]: targets,
    [REF_CODES.TARGET_COLUMN]: target_columns,
  }

  return originalIndex[ref_code] || {}
}

module.exports = {
  searchByRrefbooks, searchOriginalRefBook
};