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
        const result =  await connection.query("SELECT * FROM company WHERE company = ?", [companyId]);
        if(![result]){
            throw {
                status: 400,
                message: `Can't find company with the id: ${companyId}`
            };
        }
        return result;
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
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    getCompanys,
    getOneCompany,
    createNewCompany
}
