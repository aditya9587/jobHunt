import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
    required: true,
  },
  jobPosition: {
    type: String,
    required: true,
  },
  monthlySalary: {
    type: Number,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
    enum: ["full-time", "part-time", "contract", "internship"]
  },
  remote: {
    type: Boolean,
    required: true,
    default: false
  },
  location: {
    type: String,
    required: true,
  },
  jobDescription:{
    type:String,
    required:true,
  },
  AboutCompany: {
    type: String,
    required: true,
  },
  skills: {
    type:[Array],
    required:true,
  },
  information: {
    type: String,
    required: true,
  },
  creator: {
    type:  mongoose.Schema.ObjectId,
    ref: "userdata",
    required: true
}
});
export const jobdata = mongoose.model("jobdata", jobSchema);
