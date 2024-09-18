import Jobschema from "../Models/job.js";
import dotenv from "dotenv";
dotenv.config();

const getJob = async (req, res) => {
  try {
    const getData = await Jobschema.find({});
    res.status(200).send({
      message: "Get all Data",
      getData,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

const createJob = async (req, res) => {
  try {
    const job = await Jobschema.create(req.body);
    res.status(201).send({
      message: "Job Created Successfully",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

export default {
  getJob,
  createJob,
};
