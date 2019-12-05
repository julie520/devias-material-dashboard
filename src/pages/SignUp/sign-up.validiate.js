export const schema = {
  firstName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 32
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 32
    }
  },
  email: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 64
    },
    email: true
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 128
    }
  }
};
