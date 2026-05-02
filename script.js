function showDetails(project) {
  const modal = document.getElementById("modal");
  const text = document.getElementById("modalText");

  if (project === "ecommerce") {
    text.innerText =
      "Microservices system with Product & Order services using REST APIs.";
  } else if (project === "taskflow") {
    text.innerText =
      "CRUD-based task management API using Spring Boot & MySQL.";
  } else {
    text.innerText = "CI/CD pipeline using GitHub Actions and Docker.";
  }

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
