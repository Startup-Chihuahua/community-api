const connect = require('../connection/dbconnection');

const getCompanys = async () =>{
    try {
        const connection = await connect();
        return connection.query("SELECT * FROM company");
    } catch (error) {
        throw { status: 500, message: error };
    }
    
};

const getOneCompany = async (companyId) => {
    try {
        const connection = await connect();
        return connection.query("SELECT * FROM company WHERE company = ?", [companyId]);
    } catch (error) {
        throw { status: 500, message: error};
    }
};

const createNewCompany = async (newCompany) => {
    try {
        const connection = await connect();
        return connection.query('INSERT INTO company (name, location, description, web, contact) VALUES (?,?,?,?,?)', [
            newCompany.name,
            newCompany.location,
            newCompany.description,
            newCompany.web,
            newCompany.contact
        ]);
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const updateCompany = async (objectCompany, companyId) => {
    try {
        const connection = await connect();
        return connection.query("UPDATE company SET ? WHERE company = ?", [
            objectCompany,
            companyId
        ]);
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const deleteCompany = async (companyId) => {
    try {
        const connection = await connect();
        return connection.query("DELETE FROM company WHERE company = ?", [companyId]);
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = {
    getCompanys,
    getOneCompany,
    createNewCompany,
    updateCompany,
    deleteCompany
}
