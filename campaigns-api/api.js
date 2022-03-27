const campaignsList = require('./campaigns-list');
const campaignsView = require('./campaigns-view');
const campaignsShowEdit = require('./campaigns-show-edit');
const campaignsCancelEdit = require('./campaigns-cancel-edit');
const campaignsEdit = require('./campaigns-edit');
const campaignsShowCreate = require('./campaigns-show-create');
const campaignsCreateNew = require('./campaigns-create-new');
const campaignsCancelCreate = require('./campaigns-cancel-create');
const campaignsDeactivate = require('./campaigns-deactivate');
const campaignsApprove = require('./campaigns-approve');
const campaignsNeedEdit = require('./campaigns-need-edit');
const campaignsEditApprove = require('./campaigns-edit-approve');
const campaignsGetPdf = require('./get-pdf');

const {PATHS} = require("../share/constants");

const respond = (req, resp) => {
    const {method} = req.body;
    switch (method) {
        case 'campaigns-list':
            campaignsList.respond(req, resp);
            break;
        case 'campaigns-view':
            campaignsView.respond(req, resp);
            break;
        case 'campaigns-show-edit':
            campaignsShowEdit.respond(req, resp);
            break;
        case 'campaigns-cancel-edit':
            campaignsCancelEdit.respond(req, resp);
            break;
        case 'campaigns-edit':
            campaignsEdit.respond(req, resp);
            break;
        case 'campaigns-show-create':
            campaignsShowCreate.respond(req, resp);
            break;
        case 'campaigns-create-new':
            campaignsCreateNew.respond(req, resp);
            break;
        case 'campaigns-cancel-create':
            campaignsCancelCreate.respond(req, resp);
            break;
        case 'campaigns-deactivate':
            campaignsDeactivate.respond(req, resp);
            break;
        case 'campaigns-approve':
            campaignsApprove.respond(req, resp);
            break;
        case 'campaigns-need-edit':
            campaignsNeedEdit.respond(req, resp);
        case 'campaigns-edit-approve':
            campaignsEditApprove.respond(req, resp);
            break;
        case 'get-pdf':
            campaignsGetPdf.respond(req, resp);
            break;
        default:
            break;
    }
};

module.exports = {
    path: PATHS.CAMPAIGNS,
    method: 'POST',
    respond
};