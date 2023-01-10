const companyRepository = require('../repositories/company-repository');

const findCompanies = async () => {
  try {
    return await companyRepository.findCompanies();
  } catch (error) {
    throw error;
  }
};

const findOneCompany = async (companyId) => {
  try {
    return await companyRepository.findOneCompany(companyId);
  } catch (error) {
    throw error;
  }
};

const createNewCompany = async (newCompany) => {
  try {
    return await companyRepository.createNewCompany(newCompany);
  } catch (error) {
    throw error;
  }
};

const updateCompany = async (objectCompany, companyId) => {
  try {
    return await companyRepository.updateCompany(objectCompany, companyId);
  } catch (error) {
    throw error;
  }
};

const deleteCompany = async (companyId) => {
  try {
    await companyRepository.deleteCompany(companyId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findCompanies,
  findOneCompany,
  createNewCompany,
  updateCompany,
  deleteCompany,
};
