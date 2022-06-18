const PATHS = {
    CAMPAIGNS: "/api/campaigns",
    DICTIONARIES: "/api/dictionaries",
    TAGS: "/api/tags",
    SAS_UPLOADER: "/SASStoredProcess/do"
  };
  
  const SCREENS = {
    CAMPAIGNS_LIST: "campaigns.list",
    CAMPAIGNS_VIEW: "campaigns.view",
    CAMPAIGNS_CREATE: "campaigns.create",
    CAMPAIGNS_EDIT: "campaigns.edit",
  };
  
  const CAMPAIGN_STATUS = {
    NEW: "new",
    EDIT: "edit",
    NEED_APPROVE: "need_approve",
    NEED_EDIT: "need_edit",
    DEACTIVATE: "deactivate",
    APPROVE: "approve",
    PLAN: "plan",
    RUN: "run",
    RUNNING: "running",
    FINISH: "finish",
  };
  
  // const REF_CODES = {
  //   ACTIVITY_GROUP: "activity_group",
  //   CAMPAIGN_MANAGER: "campaign_manager",
  //   TAGS: "tags",
  //   CAMPAIGN_KIND: "campaign_kind",
  //   ACTIVITY_TYPE: "activity_type",
  //   PRODUCT: "product",
  //   CHANNEL: "channel",
  //   UPLOADING_TYPE: "uploading_type",
  //   SEGMENT: "segment",
  //   MODEL: "model_name",
  //   CAMPAIGN_STATUS: "campaign_status",
  // };

  const REF_CODES = {
    CONDITION: "condition",
    PROCESS_RULE: "process_rule",
    RULE_COLUMN: "rule_column",
    TARGET: "target",
    TARGET_COLUMN: "target_column",
  };
  
  const ERROR_CODES = {
    NOT_AUTHENTICATED: -1,
    NOT_AUTHORIZED: -2,
    NO_PAGE: -3,
    BAD_PARAMS: -4,
    INVALID_OPERATION: -5,
    LOCKED: -6,
    NOT_FOUND: -7,
    NO_ACCESS: -8,
    SYSTEM_ERROR: -32400,
  };
  
  const ERROR_MODALS = {
    BAD_PARAMS: "badParams",
    FAIL: "fail",
    NO_ACCESS: "noAccess",
    SYSTEM_ERROR: "systemError",
    NOT_FOUND: "notFound",
    NO_PAGE: "noPage",
    INVALID_OPERATION: "invalidOperation",
  };
  
  const ERROR_MESSAGES = {
    NO_ACCESS: "Недостаточно прав доступа.",
    SYSTEM_ERROR:
      "На сервере произошла непредвиденная ошибка. Пожалуйста, обратитесь к администратору.",
    NOT_FOUND: "Данные не найдены.",
    BAD_PARAMS: "Необходимо скорректировать введенные данные.",
    INVALID_OPERATION: "Недопустимая операция",
    LOCKED: "Объект закблокирован.",
    NO_PAGE: "Запрошенная страница не найдена.",
    FAIL_RESPONSE: "Произошла ошибка.",
  };
  
  const errModals = {};
  errModals[ERROR_CODES.BAD_PARAMS] = ERROR_MESSAGES.BAD_PARAMS;
  errModals[ERROR_CODES.NO_ACCESS] = ERROR_MODALS.NO_ACCESS;
  errModals[ERROR_CODES.SYSTEM_ERROR] = ERROR_MODALS.SYSTEM_ERROR;
  errModals[ERROR_CODES.NOT_FOUND] = ERROR_MODALS.NOT_FOUND;
  errModals[ERROR_CODES.NO_PAGE] = ERROR_MODALS.NO_PAGE;
  errModals[ERROR_CODES.NOT_AUTHENTICATED] = ERROR_MODALS.FAIL;
  errModals[ERROR_CODES.NOT_AUTHORIZED] = ERROR_MODALS.FAIL;
  errModals[ERROR_CODES.LOCKED] = ERROR_MODALS.INVALID_OPERATION;
  errModals[ERROR_CODES.INVALID_OPERATION] = ERROR_MODALS.INVALID_OPERATION;
  
  const errMessages = {};
  errMessages[ERROR_CODES.NO_ACCESS] = ERROR_MESSAGES.NO_ACCESS;
  errMessages[ERROR_CODES.SYSTEM_ERROR] = ERROR_MESSAGES.SYSTEM_ERROR;
  errMessages[ERROR_CODES.NOT_FOUND] = ERROR_MESSAGES.NOT_FOUND;
  errMessages[ERROR_CODES.BAD_PARAMS] = ERROR_MESSAGES.BAD_PARAMS;
  errMessages[ERROR_CODES.NO_PAGE] = ERROR_MESSAGES.NO_PAGE;
  errMessages[ERROR_CODES.NOT_AUTHENTICATED] = ERROR_MESSAGES.FAIL_RESPONSE;
  errMessages[ERROR_CODES.NOT_AUTHORIZED] = ERROR_MESSAGES.FAIL_RESPONSE;
  errMessages[ERROR_CODES.LOCKED] = ERROR_MESSAGES.LOCKED;
  errMessages[ERROR_CODES.INVALID_OPERATION] = ERROR_MESSAGES.INVALID_OPERATION;
  
  const getErrorModal = (code) => {
    const modal = errModals[code];
    if (!modal) {
      return undefined;
    }
    const message = errMessages[code] || "";
    return { code, modal, message };
  };
  
  module.exports = {
    PATHS,
    SCREENS,
    ERROR_CODES,
    ERROR_MODALS,
    ERROR_MESSAGES,
    CAMPAIGN_STATUS,
    REF_CODES,
    getErrorModal,
    errModals,
  };