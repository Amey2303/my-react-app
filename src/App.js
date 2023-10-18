function Hello() {
  function toggleGreet() {
    var greetText = document.querySelector('#heading');
    var greetLabel = document.querySelector('#btnLabel');

    if (greetText.textContent === "Hello World!") {
      greetText.textContent = "Hello Amey! :)";
      greetLabel.textContent = "Greet World";
    } else {
      greetText.textContent = "Hello World!";
      greetLabel.textContent = "Greet User!";
    }
  }

  return (
    <div>
      <h1 id="heading">Hello World!</h1>
      <button id="btnLabel" onClick={toggleGreet}>
        Greet User!
      </button>
    </div>
  );
}

export default Hello;
