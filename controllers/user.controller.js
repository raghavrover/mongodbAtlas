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
    const createdUser = await User.findById(user._id).select("*");
    res.json({ ...createdUser });
  } catch (error) {
    //TODO: Handle the error carefully and make sure you end the req-res cycle
    console.log(
      "Error ocurred while communicating with the database",
      error.message
    );
    res.send("Error ocurred while communicating with the database");
  }
};

const getUser = (req, res) => {
  res.send({
    username: "tester",
    password: "test@123",
    email: "test@gmail.com",
  });
};

export { registerUser, getUser };
