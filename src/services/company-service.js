const companyRepository = require('../repositories/company-repository');

const findCompanies = async () => companyRepository.findCompanies();

const findOneCompany = async (companyId) =>
  companyRepository.findOneCompany(companyId);

const createNewCompany = async (newCompany) =>
  companyRepository.createNewCompany(newCompany);

const updateCompany = async (objectCompany, companyId) =>
  companyRepository.updateCompany(objectCompany, companyId);

const deleteCompany = async (companyId) =>
  companyRepository.deleteCompany(companyId);

module.exports = {
  findCompanies,
  findOneCompany,
  createNewCompany,
  updateCompany,
  deleteCompany,
};
