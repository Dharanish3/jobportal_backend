import mongoose from "./setup.js";

const jobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The field is Requiired"],
  },
  address: {
    type: String,
  },
  fee: {
    type: Number,
  },
  feeCollectdDate: {
    type: Date,
  },
  feeCollectd: {
    type: Number,
  },
  internalReview: {
    type: String,
  },
  subContractor: {
    type: String,
  },
  contractorDate: {
    type: Date,
  },
  deliverydate: {
    type: Date,
  },
  marketing: {
    type: String,
  },
  corporate: {
    type: String,
  },
  production: {
    type: String,
  },
  total: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});


const schema =  mongoose.model('job', jobSchema)

export default schema