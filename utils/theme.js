function handleSwitchValue(value) {
  if (value) {
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
    document.querySelector(".data-policy-button").classList.add("dark");
    document.querySelector(".data-policy-button").classList.remove("light");
  } else {
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.remove("dark");
    document.querySelector(".data-policy-button").classList.add("light");
    document.querySelector(".data-policy-button").classList.remove("dark");
  }
}

export default handleSwitchValue;
