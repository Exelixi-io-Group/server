// Importing necessary modules
import mongoose from 'mongoose';

// Define the education schema
const educationSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true
  },
  schoolLocation: {
    type: String,
    required: true
  },
  schoolYearOfPassing: {
    type: String,
    required: true
  },
  collegeName: {
    type: String,
    required: true
  },
  collegeLocation: {
    type: String,
    required: true
  },
  collegeStream: {
    type: String,
    required: true
  },
  collegeFieldOfStudy: {
    type: String,
    required: true
  },
  institutionName: {
    type: String,
    required: true
  },
  institutionLocation: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  discipline: {
    type: String,
    required: true
  },
  institutionYearOfPassing: {
    type: String,
    required: true
  }
});

// Define the user schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  /* dob: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    required: true
  },
  motherName: {
    type: String,
    required: true
  },
  adharNumber: {
    type: String,
    required: true
  },
  panNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  altEmail: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  education: educationSchema,
  workExperience:{
    type: Array,
    required:true
  } */
});

// Create a model using the schema
const User = mongoose.model('user', userSchema);

// Export the model
export default User;
