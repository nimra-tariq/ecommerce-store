import axios from "axios";

export const createUser = async (name, email, password) => {
  console.log(name, email, "create");
  try {
    const response = await axios.post(
      "https://fakse-store-api.herokuapp.com/api/v1/users",
      {
        email: email,
        name: name,
        password: password,
        role: "customer",
        avatar:
          "https://fakse-store-api.herokuapp.com/docs/#/users/UsersController_create",
      }
    );
    // console.log(response.data, "user created");
    return response.data;
  } catch (error) {
    console.log(error.response.data.message, "user creation error");
    return false;
  }
};

export const signInUser = async (email, password) => {
  try {
    const resp = await axios.post(
      "https://fakse-store-api.herokuapp.com/api/v1/auth/login",
      {
        email,
        password,
      }
    );
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error, "'error occured");
    return false;
  }
};

export const emailAlreadyExists = async (email) => {
  try {
    const res = await axios.post(
      "https://fakse-store-api.herokuapp.com/api/v1/users/is-available",
      { email: email }
    );
    // console.log(res.data.isAvailable, "api");
    return res.data.isAvailable;
  } catch (error) {
    console.log(error);
  }
};


export const isAuthenticated = async () => {
  try {
    const res = await axios.get(
      "https://fakse-store-api.herokuapp.com/api/v1/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
      }
    );
    console.log(res.data, "is logged in ");
  } catch (error) {
    console.log(error, "error");
    return false;
  }
};

export const fetchProducts = async (offset, limit) => {
  try {
    const res = await axios.get(
      `https://fakse-store-api.herokuapp.com/api/v1/products?limit=${limit}&offset=${offset}`
    );
    // console.log(res.data, "images fetched");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetail = async (id) => {
  try {
    const res = await axios.get(
      `https://fakse-store-api.herokuapp.com/api/v1/products/${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error, "detail");
  }
};
