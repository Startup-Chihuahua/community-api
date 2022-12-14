const companyData = require('../database/company-repository');

const getCompanys = async () => {
    try {
        return allCompanys = await companyData.getCompanys();
    } catch (error) {
        throw error;
    }
};

const getOneCompany = async (companyId) => {
    try {
        const [company] = await companyData.getOneCompany(companyId);
        if(company.length === 0){
            throw {
                status: 400,
                message: `ID not found: ${companyId}`
            };
        }
        return company;
    } catch (error) {
        throw error;
    }
};

const createNewCompany = async (newCompany) => {
    try {
        const createdCompany = await companyData.createNewCompany(newCompany);
        return createdCompany;
    } catch (error) {
        throw error;
    }
};

const updateCompany = async (objectCompany, companyId) => {
    try {
        const company = await companyData.getOneCompany(companyId);
        if(company.length === 0){
            throw {
                status: 400,
                message: `ID not found: ${companyId}`
            };
        }else{
            return await companyData.updateCompany(objectCompany, companyId);
        }
    } catch (error) {
        throw error;
    }
};

const deleteCompany = async (companyId) => {
    try {
        const data = await companyData.deleteCompany(companyId);
        if(data.affectedRows === 0){
            throw {
                status: 400,
                message: `ID not found: ${companyId}`
            };
        }
        return data;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getCompanys,
    getOneCompany,
    createNewCompany,
    updateCompany,
    deleteCompany
};

