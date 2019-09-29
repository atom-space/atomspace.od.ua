export const validateUser = (user, inputData) => {
  const stateUser = { ...user };
  let isDisabled = false;
  Object.keys(user).forEach(key => {
    const { value } = user[key];
    const validated = () => {
      const isExist = inputData.find(val => val.id === key);
      return Boolean(isExist.validate && !isExist.validate(value));
    };
    stateUser[key].error = !value.length || validated();
    if (!value.length || validated()) {
      isDisabled = true;
    }
  });
  return { stateUser, isDisabled };
};
