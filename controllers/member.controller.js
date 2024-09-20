const memberService = require("../services/member.service");

const memberController = {
    getAllMembers: (req, res) => {
        const users = memberService.getAllMembers({ isActive: true});
        res.json(users);
    },
    deleteOneMember: (req, res) => {
        console.log(req.params);
        const {id} = req.params;
        const users = memberService.deleteOneMember(Number(id));
        res.json(users);
    },
    updateManyByIds: (req, res) => {
        const {} = req.body;
        const users = memberService.deleteOneMember(id);
        res.json(users);
    },
};

module.exports = memberController;
