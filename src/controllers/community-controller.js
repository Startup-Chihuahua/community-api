const communityService = require('../services/community-service');

const getComunnitys = async (req, res) => {
    try {
        const allCommunitys = await communityService.getComunnitys();
        res.send({
            status: "OK",
            data: allCommunitys
        });
    } catch (error) {
        res.send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

const getCommunity = async (req, res) => {
    const { params: { communityId } } = req;
    if(!communityId){
        res.send({
            status: "FAILED",
            data: { error: "Parametrer 'communityId' can not be empty" }
        });
    }
    try {
        const communiity = await communityService.getOneCommunity(communityId);
        res.send({
            status: "OK",
            data: communiity
        });
    } catch (error) {
        res.send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

const createCommunity =async (req, res) => {
    const { body } = req;
    if(
        !body.name ||
        !body.description
    ){
        res.send({
            status: "FAILED",
            data: {
                error: "Missing keys"
            }
        });
    }
    const newCommunity = {
        name: body.name,
        description: body.description
    };
    try {
        await communityService.createNewCommunity(newCommunity);
        res.send({
            status: "OK",
            data: newCommunity
        });
    } catch (error) {
        res.send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

const updateCommunity = async (req, res) => {
    const { body, params: { communityId } } = req;
    if(
        !body.name ||
        !body.description
    ){
        res.send({
            status: "FAILED",
            data: {
                error: "Missing keys"
            }
        });
    } else {
        const objectCompany = {
            name: body.name,
            description: body.description
        };
        try {
            await communityService.updateCommunity(objectCompany, communityId);
            res.send({
                status: "OK",
                data: objectCompany
            });
        } catch (error) {
            res.send({
                status: "FAILED",
                data: { error: error?.message || error }
            });
        }
    }
};

const deleteCommunity = async (req, res) => {
    const { params: { communityId } } = req;
    if(!communityId){
        res.send({
            status: "FAILED",
            data: { error: "Parameter ':communityId' can not be empty" }
        });
    }
    try {
        await communityService.deleteCommunity(communityId);
        res.send({ status: "OK", message: 'Delete community success' });
    } catch (error) {
        res.send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

module.exports = {
    getComunnitys,
    getCommunity,
    createCommunity,
    updateCommunity,
    deleteCommunity
};
