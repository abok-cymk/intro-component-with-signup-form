export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  errors: {},
};

export const actionTypes = {
  SET_FIRST_NAME: "FIRST_NAME",
  SET_LAST_NAME: "LAST_NAME",
  SET_EMAIL: "EMAIL_ADDRESS",
  SET_PASSWORD: "PASSWORD",
  SUBMIT_FORM: "SUBMIT",
  RESET_FORM: "RESET",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
        errors: { ...state.errors, firstName: "" },
      };
    case actionTypes.SET_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
        errors: { ...state.errors, lastName: "" },
      };
    case actionTypes.SET_EMAIL: {
      let emailError = "";
      if (action.payload && !emailRegex.test(action.payload)) {
        emailError = "Looks like this is not an email";
      }
      return {
        ...state,
        email: action.payload,
        errors: { ...state.errors, email: emailError },
      };
    }
    case actionTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
        errors: { ...state.errors, password: "" },
      };
    case actionTypes.SUBMIT_FORM: {
      const errors = {};
      if (!state.firstName) errors.firstName = "First Name cannot be empty";
      if (!state.lastName) errors.lastName = "Last Name cannot be empty";
      if (!state.email) {
        errors.email = "Email Address cannot be empty";
      } else if (!emailRegex.test(state.email)) {
        errors.email = "Looks like this is not an email";
      }
      if (!state.password) errors.password = "Password cannot be empty";
      return {
        ...state,
        errors,
      };
    }
    case actionTypes.RESET_FORM:
      return initialState;
    default:
      return state;
  }
};
