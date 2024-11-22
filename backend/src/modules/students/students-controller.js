const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    const { name, className, section, roll } = req.query;
    // console.log("req.query", req.query);
    const allStudents = await getAllStudents({ name, className, section, roll } );
    // console.log("allStudents", allStudents);
    res.json({ allStudents });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    const payload = req.body;
    const message = await addNewStudent(payload);
    res.json(message);

});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code
    const { id: userId } = req.params;
    const payload = req.body;
    const message = await updateStudent({ ...payload, userId });
    res.json(message);

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
    const { id } = req.params;
    const staff = await getStudentDetail(id);
    res.json(staff);

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code
    const status = req.body;
    const { id: userId } = req.params;
    const { id: reviewerId } = req.user;
    const message = await setStudentStatus({userId, reviewerId, status });
    res.json(message);

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
