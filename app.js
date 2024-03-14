const div = document.getElementById("comment-list");

document.getElementById("btn").addEventListener("click", (event) => {
  event.preventDefault();

  const inputa = document.getElementById("first-name").value;
  const inputb = document.getElementById("last-name").value;
  const textarea = document.getElementById("message").value;

  if (inputa && inputb && textarea !== "") {
    const titre = document.createElement("h3");
    titre.textContent = `${inputa} ${inputb}`;

    const comment = document.createElement("p");
    comment.textContent = textarea;

    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("message").value = "";

    div.appendChild(titre);
    div.appendChild(comment);
  } else {
    alert("Tous les champs doivent être remplis");
  }
});
