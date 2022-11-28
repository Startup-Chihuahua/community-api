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

module.exports = {
    getCompanys,
    getOneCompany
};

