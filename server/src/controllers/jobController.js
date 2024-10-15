import { jobdata } from "../model/jobSchema.js";

// TO CREATE A JOB
export const createjob = async (req, res) => {
  try {
    const {
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      remote,
      jobDescription,
      location,
      AboutCompany,
      skills,
      information,
    } = req.body;
    const { user } = req;
    const jobs = skills.split(",").map((skill) => skill.trim());
    const Jobdata = new jobdata({
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      remote,
      jobDescription,
      location,
      AboutCompany,
      skills: jobs,
      information,
      creator: user,
    });
    await Jobdata.save();
    res.status(200).json({ message: "Job created successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Job not created" });
  }
};

//TO UPDATE/create THE JOB
export const updatejob = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      remote,
      jobDescription,
      location,
      AboutCompany,
      skills,
      information,
    } = req.body;
    const jobSkills = skills?.split(",").map((skill) => skill.trim());
    let job = await jobdata.findById(id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    if (job.creator.toString() !== req.user.toString()) {
      return res
        .status(401)
        .json({ message: "You are not authorized to update this job" });
    }
    job = await jobdata.findByIdAndUpdate(
      id,
      {
        companyName,
        logoUrl,
        jobPosition,
        monthlySalary,
        jobType,
        remote,
        jobDescription,
        location,
        AboutCompany,
        skills: jobSkills,
        information,
      },
      { new: true, runValidators: true }
    );
    // await job.save();
    return res.status(200).json({ message: "user upadted successfully", job });
  } catch (error) {
    console.error("Error updating job:", error.message);
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

//TO GET PARICULAR JOB BY JOB ID
export const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const jobid = await jobdata.findById(id);
    if (!jobdata) {
      return res.status(400).json({ message: "no job found" });
    }
    return res.status(200).json({ jobid });
  } catch (error) {}
};

//TO GET ALL THE JOB
export const getAllJob = async (req, res) => {
  try {
    const jobs = await jobdata.find({});
    return res.status(200).json({ jobs });
  } catch (error) {
    console.log("this error in controller")
  }
};
