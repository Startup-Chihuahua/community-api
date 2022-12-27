const communityService = require('../services/community-service');
const joi = require('joi');

const community = joi.object({
    name: joi.string()
        .min(3)
        .max(50)
        .required(),
    description: joi.string()
        .min(3)
        .max(200)
        .required(),
});

const findCommunities = async (req, res) => {
    try {
        const allCommunitys = await communityService.findCommunities();
        res.status(200).send({
            status: "OK",
            data: allCommunitys
        });
    } catch (error) {
        res.status(404).send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

const findOneCommunity = async (req, res) => {
    const { params: { communityId } } = req;
    if(!communityId){
        res.status(404).send({
            status: "FAILED",
            data: { error: "Parametrer 'communityId' can not be empty" }
        });
    }
    try {
        const communiity = await communityService.findOneCommunity(communityId);
        res.status(200).send({
            status: "OK",
            data: communiity
        });
    } catch (error) {
        res.status(400).send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

const createCommunity =async (req, res) => {
    const result = community.validate(req.body);
    if(result.error){
        res.status(400).send({
            status: "FAILED",
            data: { error: result.error.details }
        });
    }else{
        try {
            await communityService.createNewCommunity(result.value);
            res.status(201).send({
                status: "OK",
                data: result.value
            });
        } catch (error) {
            res.status(404).send({
                status: "FAILED",
                data: { error: error?.message || error }
            });
        }
    }
};

const updateCommunity = async (req, res) => {
    const { body, params: { communityId } } = req;
    const result = community.validate(body);
    if(result.error){
        res.status(400).send({
            status: "FAILED",
            data: { error: result.error.details }
        });
    } else {
        try {
            await communityService.updateCommunity(result.value, communityId);
            res.status(202).send({
                status: "OK",
                data: result.value
            });
        } catch (error) {
            res.status(404).send({
                status: "FAILED",
                data: { error: error?.message || error }
            });
        }
    }
};

const deleteCommunity = async (req, res) => {
    const { params: { communityId } } = req;
    if(!communityId){
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':communityId' can not be empty" }
        });
    }
    try {
        await communityService.deleteCommunity(communityId);
        res.status(202).send({ status: "OK", message: 'Delete community success' });
    } catch (error) {
        res.status(404).send({
            status: "FAILED",
            data: { error: error?.message || error }
        });
    }
};

module.exports = {
    findCommunities,
    findOneCommunity,
    createCommunity,
    updateCommunity,
    deleteCommunity
};
