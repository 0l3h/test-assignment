const { user, sequelize } = require("../models");

module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await user.findAll({
            raw: true,
            order: ['order']
        });

        res.send(JSON.stringify(users));
    } catch (error) {
        console.log(error.message);
        res.end();
    }
};

module.exports.createUser = async (req, res) => {
    const { order, username: name } = req.body;
    console.log(req.body);
    try {
        await user.create({ order, name });

        res.end();
    } catch (error) {
        console.log(error.message);
        res.end();
    }
};

module.exports.updateUser = async (req, res) => {

};

module.exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await user.destroy({ where: { id } });

        res.end();
    } catch (error) {
        console.log(error.message);
        
        res.end();
    }

    console.log(id);
};