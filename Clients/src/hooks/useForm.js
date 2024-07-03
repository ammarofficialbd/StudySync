import { useState } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      callback();
    //  console.log(callback);
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleDateChange,
    values,
    errors,
    selectedDate,
  };
};

export default useForm;
