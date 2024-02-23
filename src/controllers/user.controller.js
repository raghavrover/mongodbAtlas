import { User } from "../models/user.model.js";

const registerUser = async (req, res, next) => {
  // basically we are taking data from the user
  // and adding an entry in the database

  try {
    const { username, password, email, nickname = "" } = req.body;

    const userDetails = nickname
      ? { username, password, email, nickname }
      : { username, password, email };
    // Didn't validate the user credentials and sending directly to the DB
    const createdUser = await User.create(userDetails);

    // Retrieving the data from the DB
    const user = await User.findById(createdUser._id).select(
      "-password -createdAt -updatedAt -__v"
    );

    res.status(201).json(user);
  } catch (error) {
    //TODO: Handle the error carefully and make sure you end the req-res cycle
    console.log(
      "Error ocurred while communicating with the database :",
      error.message
    );
    next(error);
  }
};

const getUser = async (req, res, next) => {
  // fetch a user from the collection with a doc_id
  try {
    const { id } = req.params;
    const user = await User.find({ _id: id });

    // console.log("fetched from the db", user?._doc, user);
    res.status(200).json(user);
  } catch (error) {
    //TODO: Handle the error carefully and make sure you end the req-res cycle
    console.log(
      "Error ocurred while communicating with the database :",
      error.message
    );
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  // fetch all the users from the collection
  try {
    const allUsers = await User.find();
    // console.log("fetched from the db", allUsers);
    res.json(allUsers);
  } catch (error) {
    //TODO: Handle the error carefully and make sure you end the req-res cycle
    console.log(
      "Error ocurred while communicating with the database :",
      error.message
    );
    next(error);
  }
};

export { registerUser, getUser, getAllUsers };
