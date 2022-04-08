const values = {};
const fileElement = document.getElementById("inputId");
const nameElement = document.getElementById("inputName");
const phoneElement = document.getElementById("inputPhone");
const positionElement = document.getElementById("position");
const expElement = document.getElementById("work");
const emailElement = document.getElementById("emailId");
const submitElement = document.getElementById("submit");
const formData = new FormData();
const handleChangeFiles = () => {
  formData.append("files", fileElement.files[0]);
  values.picture = formData;
};
const getName = () => {
  values.name = nameElement.value;
};
const getPhone = () => {
  values.phone = phoneElement.value;
};

const getPosition = () => {
  values.position = positionElement.value;
};
const getExperience = () => {
  values.exp = expElement.value;
};
const getEmail = () => {
  values.email = emailElement.value;
};

const handleSubmit = () => {
  const API = "https://freemind-test.netlify.app/.netlify/functions/test";
  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
};
