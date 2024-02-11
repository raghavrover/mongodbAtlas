import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  // basically we are taking data from the user
  // and adding an entry in the database

  try {
    const { username, password, email } = req.body;

    // Didn't validate the user credentials and sending directly to the DB
    const user = await User.create({
      username,
      password,
      email,
    });

    // Retrieving the data from the DB
    const createdUser = await User.findById(user._id);
    // console.log("fetched from the db", createdUser);

    res.json({ ...createdUser });
  } catch (error) {
    //TODO: Handle the error carefully and make sure you end the req-res cycle
    console.log(
      "Error ocurred while communicating with the database",
      error.message
    );
    res
      .status(400)
      .json(
        "Error ocurred while communicating with the database",
        error.message
      );
  }
};

const getUser = async (req, res) => {
  // fetch a user from the collection with a doc_id
  try {
    const { id } = req.params;
    const user = await User.find({ _id: id });
    // console.log("fetched from the db", user);
    res.status(200).json(user);
  } catch (error) {
    //TODO: Handle the error carefully and make sure you end the req-res cycle
    console.log(
      "Error ocurred while communicating with the database",
      error.message
    );
    res
      .status(400)
      .json(
        "Error ocurred while communicating with the database",
        error.message
      );
  }
};

const getAllUsers = async (req, res) => {
  // fetch all the users from the collection
  try {
    const allUsers = await User.find();
    // console.log("fetched from the db", allUsers);
    res.json(allUsers);
  } catch (error) {
    //TODO: Handle the error carefully and make sure you end the req-res cycle
    console.log(
      "Error ocurred while communicating with the database",
      error.message
    );
    res
      .status(400)
      .json(
        "Error ocurred while communicating with the database",
        error.message
      );
  }
};

export { registerUser, getUser, getAllUsers };
