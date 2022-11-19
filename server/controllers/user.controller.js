const { user, sequelize } = require("../models");

module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await user.findAll({
            raw: true,
            order: ['rank']
        });

        res.send(JSON.stringify(users));
    } catch (error) {
        console.log(error.message);
    }

    res.end();
};

module.exports.createUser = async (req, res) => {
    const { rank, username: name } = req.body;

    try {
        await user.create({ rank, name });
    } catch (error) {
        console.log(error.message);
    }

    res.end();
};

module.exports.updateUsername = async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    try {
        const foundUser = await user.findOne({ 
            where: { id } 
        });
        
        foundUser.update({ name });
    } catch (error) {
        console.log(error.message);
    }

    res.end();
};

module.exports.changeRank = async (req, res) => {
    const { rankBy } = req.body;
    const { id } = req.params;

    try {
        const foundUser = await user.findOne({ 
            where: { id } 
        });
        
        rankBy && foundUser.increment('rank', { by: rankBy });
    } catch (error) {
        console.log(error.message);
    }

    res.end();
};

module.exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await user.destroy({ where: { id } });
    } catch (error) {
        console.log(error.message);        
    }

    res.end();
};