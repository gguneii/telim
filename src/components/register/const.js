export const useRegisterConst = () => {
    const inputs = [
        {
            id: 0,
            name: "username",
            type: "text",
            label: "Adivizi daxil edin",
            placeholder: "Adinizi yazin",
        },
        {
            id: 1,
            name: "email",
            type: "email",
            label: "Email daxil edin",
            placeholder: "Email yazin",
        },
        {
            id: 2,
            name: "phone",
            type: "number",
            label: "Nomrenizi daxil edin",
            placeholder: "Nomrenizi yazin",
        },
        {
            id: 3,
            name: "date",
            type: "date",
            label: "Dogum tarixinizi daxil edin",
            placeholder: "Dogum tarixinizi yazin",
        },
        {
            id: 4,
            name: "password",
            type: "password",
            label: "Parolu daxil edin",
            placeholder: "Parolu yazin",
        },
        {
            id: 5,
            name: "comPass",
            type: "password",
            label: "Tekrar parol daxil edin",
            placeholder: "Tekrar parol yazin",
        }
    ]

    const initialValues = {
        username: "",
        email: "",
        phone: "+994709233313",
        date: "",
        password: "",
        comPass: ""
    }

    return {
        inputs, initialValues
    }

}


export const dynamicFields = {
    developer: {
      name: "language",
      label: "Programming Language",
      placeholder: "Enter language",
    },
    manager: {
      name: "teamSize",
      label: "Team Size",
      placeholder: "Enter team size",
    },
    designer: {
      name: "designTool",
      label: "Design Tool",
      placeholder: "Enter design tool",
    },
  };
  