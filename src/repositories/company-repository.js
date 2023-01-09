const connect = require('../connection/dbconnection');

const findCompanies = async () => {
  try {
    const connection = await connect();
    const [data] = await connection.query('SELECT * FROM company');
    return data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const findOneCompany = async (companyId) => {
  try {
    const connection = await connect();
    const [data] = await connection.query(
      'SELECT * FROM company WHERE company = ?',
      [companyId]
    );
    if (data.length === 0) {
      throw {
        status: 400,
        message: `ID not found: ${companyId}`,
      };
    }
    return data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const createNewCompany = async (newCompany) => {
  try {
    const connection = await connect();
    return connection.query(
      'INSERT INTO company (name, location, description, web, contact) VALUES (?,?,?,?,?)',
      [
        newCompany.name,
        newCompany.location,
        newCompany.description,
        newCompany.web,
        newCompany.contact,
      ]
    );
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const updateCompany = async (objectCompany, companyId) => {
  try {
    await findOneCompany(companyId);
    const connection = await connect();
    const [result] = await connection.query(
      'UPDATE company SET ? WHERE company = ?',
      [objectCompany, companyId]
    );
    return result;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const deleteCompany = async (companyId) => {
  try {
    const connection = await connect();
    const data = await connection.query(
      'DELETE FROM company WHERE company = ?',
      [companyId]
    );
    if (data[0].affectedRows === 0) {
      throw {
        status: 400,
        message: `ID not found: ${companyId}`,
      };
    }
  } catch (error) {
    throw { status: 500, message: error };
  }
};

module.exports = {
  findCompanies,
  findOneCompany,
  createNewCompany,
  updateCompany,
  deleteCompany,
};
