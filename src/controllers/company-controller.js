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
            .status(error?.status || 500)
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
            .status(400)
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
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                data: { error: error?.message || error }
            });
    }

};

const createCompany = async (req, res) => {
    // res.json('createCompany');
    const { body } = req;
    if(
        !body.name ||
        !body.location ||
        !body.description ||
        !body.web ||
        !body.contact
    ){
        res
            .status(400)
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
        const createdCompany = companyService.createNewCompany(newCompany);
        res.status(201).send({ status: "OK", data: createCompany });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const updateCompany = (req, res) => {

};

const deleteCompany = (req, res) => {
    res.json('deleteCompany');
};

module.exports = {
    getCompanys,
    getCompany,
    createCompany,
    updateCompany,
    deleteCompany
};
