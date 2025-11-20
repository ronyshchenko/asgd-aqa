interface ICredentials {
  username: string;
  password: string;
}

interface IUserData {
  title: string;
  credentials: ICredentials;
  expectedMessage: string;
  expectedAddMessage: string;
}

const invalidTestData: IUserData[] = [
  {
    credentials: { username: "ronyshchenko", password: "" },
    expectedMessage: "Пароль обов'язковий",
    expectedAddMessage: "",
    title: "Register without a password",
  },

  {
    credentials: { username: "", password: "270872" },
    expectedMessage: "Логін обов'язковий",
    expectedAddMessage: "",
    title: "Register without name",
  },
];

export default invalidTestData;
