const createJob = async (req, res) => {
  res.send("create job");
};

const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};

const showStats = async (req, res) => {
  res.send("show stats");
};

const updateJob = async (req, res) => {
  res.send("update job");
};

const deleteJob = async (req, res) => {
  res.send("delete job");
};

export { createJob, getAllJobs, showStats, updateJob, deleteJob };
