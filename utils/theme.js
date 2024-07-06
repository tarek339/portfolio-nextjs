function handleSwitchValue(value) {
  if (value) {
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
  } else {
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.remove("dark");
  }
}

export default handleSwitchValue;
