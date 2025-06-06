import { useReducer, useCallback } from "react";
import { initialState, reducer, actionTypes } from "./formReducer"; 
import Input from "./components/Input"; 

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      let type;

      switch (name) {
        case "firstName":
          type = actionTypes.SET_FIRST_NAME;
          break;
        case "lastName":
          type = actionTypes.SET_LAST_NAME;
          break;
        case "email":
          type = actionTypes.SET_EMAIL;
          break;
        case "password":
          type = actionTypes.SET_PASSWORD;
          break;
        default:
          return;
      }
      dispatch({ type, payload: value });
    },
    [] 
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const stateAfterSubmitValidation = reducer(state, {
        type: actionTypes.SUBMIT_FORM,
      });
      dispatch({ type: actionTypes.SUBMIT_FORM });

      const hasErrors = Object.values(stateAfterSubmitValidation.errors).some(
        (error) => error !== ""
      );

      if (!hasErrors) {
        // console.log("Form submitted successfully:", {
        //   firstName: stateAfterSubmitValidation.firstName,
        //   lastName: stateAfterSubmitValidation.lastName,
        //   email: stateAfterSubmitValidation.email,
        //   password: stateAfterSubmitValidation.password,
        // });
        dispatch({ type: actionTypes.RESET_FORM });
      }
    },
    [state] 
  );

  return (
    <section className="max-w-4xl mx-auto text-left grid grid-cols-1 lg:grid-cols-2 max-md:px-5 sm:px-6 lg:px-0 pt-3 sm:pt-5 lg:pt-10">
      <div className="lg:pt-24">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-700 text-white tracking-tight mb-[0.5lh]">
          Learn to code by watching others
        </h2>
        <p className="max-w-sm text-white text-sm/6">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="mt-5 lg:mt-0">
        <div className="w-full bg-Blue rounded-md px-8 py-3 mb-4 flex items-center justify-center shadow-md">
          <a
            href="#"
            className="text-GrayishBlue font-400 text-center text-sm hover:text-white transition-colors duration-200"
          >
            <span className="font-700 text-white">Try it free 7 days </span>
            then $20/mo thereafter.
          </a>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white text-DarkBlue w-full shadow-xl rounded-md p-6 sm:p-8 flex flex-col gap-4 flex-1"
        >
          <Input
            id="first_name"
            name="firstName"
            type="text"
            value={state.firstName}
            onChange={handleChange}
            placeholder="First Name"
            error={state.errors.firstName}
            label="First Name"
          />
          <Input
            id="last_name"
            name="lastName"
            type="text"
            value={state.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            error={state.errors.lastName}
            label="Last Name"
          />
          <Input
            id="email_address"
            name="email"
            type="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Email Address"
            error={state.errors.email}
            label="Email Address"
          />
          <Input
            id="password"
            name="password"
            type="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Password"
            error={state.errors.password}
            label="Password"
          />
          <button
            type="submit"
            className="uppercase text-sm font-600 px-4 py-4 bg-Green rounded-md text-white tracking-wide cursor-pointer hover:opacity-90 active:opacity-80 shadow-md hover:shadow-lg transition-all duration-200"
          >
            claim your free trial
          </button>
          <p className="text-GrayishBlue text-xs text-center font-500">
            By clicking the button you are agreeing to our{" "}
            <a
              href="#"
              className="text-Red font-700 hover:opacity-75 transition-opacity duration-200"
            >
              Terms and Services
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default App;
