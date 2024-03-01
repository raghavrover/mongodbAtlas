import { User } from "../models/user.model.js";

const registerUser = async (req, res, next) => {
  // basically we are taking data from the user
  // and adding an entry in the database

  try {
    const {
      tenant_name,
      room_no,
      mobile_number,
      aadhaar,
      joined_date,
      tenant_status = "Active",
      security_deposit_amount = "2000",
      security_deposit_status = "Paid",
      rent_amount = "6000",
    } = req.body;

    // const userDetails = nickname
    //   ? { username, password, email, nickname, age }
    //   : { username, password, email, age };

    const checkStatus =
      tenant_name !== "" &&
      room_no !== "" &&
      mobile_number !== "" &&
      aadhaar !== "" &&
      joined_date !== "" &&
      tenant_status !== "" &&
      security_deposit_amount !== "" &&
      security_deposit_status !== "" &&
      rent_amount !== "";

    if (checkStatus) {
      const tenantDetails = {
        tenant_name,
        room_no,
        mobile_number,
        aadhaar,
        joined_date,
        tenant_status,
        security_deposit_amount,
        security_deposit_status,
        rent_amount,
      };

      // Didn't validate the user credentials and sending directly to the DB
      const createdUser = await User.create(tenantDetails);

      // Retrieving the data from the DB
      const user = await User.findById(createdUser._id);

      res.status(201).json({
        ok: true,
        user,
      });
    } else {
      throw new Error("Invalid User details");
    }
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

const updateUser = async (req, res, next) => {
  const { username } = req.body;
  // updated the user in the collection
  try {
    const operationDetails = await User.updateOne(
      {
        username,
      },
      {
        $unset: { age: 1 },
      }
    );
    // console.log("fetched from the db", updatedUser);
    res.json(operationDetails);
  } catch (error) {
    //TODO: Handle the error carefully and make sure you end the req-res cycle
    console.log(
      "Error ocurred while communicating with the database :",
      error.message
    );
    next(error);
  }
};

export { registerUser, getUser, getAllUsers, updateUser };
