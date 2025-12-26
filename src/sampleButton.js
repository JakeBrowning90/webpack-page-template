//

const sampleButton = () => {
  const sampleButton = document.createElement("button");
  sampleButton.textContent = "Swap colors!";
  sampleButton.setAttribute("id", "sampleButton");

  sampleButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Clicked button");
    sampleButton.classList.toggle("red");
  });

  document.body.appendChild(sampleButton);
};

export { sampleButton };
