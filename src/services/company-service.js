const companyData = require('../database/company-data');

const getCompanys = async () => {
    try {
        const [allCompanys] = await companyData.getCompanys();
        return allCompanys;
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
        const [company] = await companyData.getOneCompany(companyId);
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
        if(data[0].affectedRows === 0){
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

