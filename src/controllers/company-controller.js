const companyService = require('../services/company-service');

const getCompanys = async (req, res) => {
    try {
        const allCompanys = await companyService.getCompanys();
        res.send({
            status: 'OK',
            data: allCompanys
        });
    } catch (error) {
        res
            .send({
                status: 'FAILED',
                data: {error: error?.message || error}
            });
    }
};

const getCompany = async (req, res) => {
    const { params: { companyId } } = req;
    if(!companyId){
        res
            .send({
                status: "FAILED",
                data: { error: "Parameter ':companyId' can not be empty" }
            });
    }
    try {
        const company = await companyService.getOneCompany(companyId);
        res.send({ status: "OK", data: company });
    } catch (error) {
        res
            .send({
                status: "FAILED",
                data: { error: error?.message || error }
            });
    }
};

const createCompany = async (req, res) => {
    const { body } = req;
    if(
        !body.name ||
        !body.location ||
        !body.description ||
        !body.web ||
        !body.contact
    ){
        res
            .send({
                status: "FAILED",
                data: {
                    error: "Missing keys"
                }
            });
        return;
    }
    const newCompany = {
        name: body.name,
        location: body.location,
        description: body.description,
        web: body.web,
        contact: body.contact
    };
    try {
        await companyService.createNewCompany(newCompany);
        res.send({ status: "OK", data: newCompany });
    } catch (error) {
        res
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const updateCompany = async (req, res) => {
    const { body, params: {companyId} } = req;
    if(
        !body.name ||
        !body.location ||
        !body.description ||
        !body.web ||
        !body.contact
    ){
        res
            .send({
                status: "FAILED",
                data: {
                    error: "Missing keys"
                }
            });
        return;
    }
    const objectCompany = {
        name: body.name,
        location: body.location,
        description: body.description,
        web: body.web,
        contact: body.contact
    };
    try {
        await companyService.updateCompany(objectCompany, companyId);
        res.send({ status: "OK", data: objectCompany });
    } catch (error) {
        res
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const deleteCompany = async (req, res) => {
    const { params: { companyId } } = req;
    if(!companyId){
        res
            .send({
                status: "FAILED",
                data: { error: "Parameter ':companyId' can not be empty" }
            });
    }
    try {
        await companyService.deleteCompany(companyId);
        res.send({ status: "OK", message: 'Delete company success' });
    } catch (error) {
        res
            .send({
                status: "FAILED",
                data: { error: error?.message || error }
            });
    }
};

module.exports = {
    getCompanys,
    getCompany,
    createCompany,
    updateCompany,
    deleteCompany
};
