const companyService = require('../services/company-service');
const joi = require('joi');

const company = joi.object({
    name: joi.string()
        .min(3)
        .max(50)
        .required(),
    location: joi.string()
        .min(3)
        .max(50)
        .required(),
    description: joi.string()
        .min(3)
        .max(50)
        .required(),
    web: joi.string()
        .min(3)
        .max(50)
        .required(),
    contact: joi.string()
        .min(3)
        .max(50)
        .required(),
});

const getCompanys = async (req, res) => {
    try {
        const allCompanys = await companyService.getCompanys();
        res.status(200).send({
            status: 'OK',
            data: allCompanys
        });
    } catch (error) {
        res.status(404).send({
                status: 'FAILED',
                data: {error: error?.message || error}
            });
    }
};

const getCompany = async (req, res) => {
    const { params: { companyId } } = req;
    if(!companyId){
        res.status(400).send({
                status: "FAILED",
                data: { error: "Parameter ':companyId' can not be empty" }
            });
    }
    try {
        const company = await companyService.getOneCompany(companyId);
        res.status(200).send({ status: "OK", data: company });
    } catch (error) {
        res.status(404).send({
                status: "FAILED",
                data: { error: error?.message || error }
            });
    }
};

const createCompany = async (req, res) => {
    const result = company.validate(req.body);
    if(result.error){
        res.status(400).send({
            status: "FAILED",
            data: { error: result.error.details }
        });
    }else{
        try {
            await companyService.createNewCompany(result.value);
            res.status(201).send({ status: "OK", data: result.value });
        } catch (error) {
            res.status(404).send({ 
                status: "FAILED", 
                data: { error: error?.message || error } 
            });
        }
    }
};

const updateCompany = async (req, res) => {
    const { body, params: {companyId} } = req;
    const result = company.validate(body);
    if(result.error){
        res.status(400).send({
            status: "FAILED",
            data: { error: result.error.details }
        });
    }else{
        try {
            await companyService.updateCompany(result.value, companyId);
            res.status(202).send({ status: "OK", data: result.value });
        } catch (error) {
            res.status(404).send({ 
                status: "FAILED", 
                data: { error: error?.message || error } 
            });
        }
    }
};

const deleteCompany = async (req, res) => {
    const { params: { companyId } } = req;
    if(!companyId){
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':companyId' can not be empty" }
        });
    }
    try {
        await companyService.deleteCompany(companyId);
        res.status(202).send({ status: "OK", message: 'Delete company success' });
    } catch (error) {
        res.status(404).send({
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
