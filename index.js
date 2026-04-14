const handleSubmit = (event) => {
  event.preventDefault();
  const expenseamount = event.target.expenseamount.value;
  const Choose_a_category = event.target.Choose_a_category.value;
  const description = event.target.description.value;
  const obj = {
    id: Date.now(),
    expenseamount,
    description,
    Choose_a_category,
  };
  console.log(obj);
  const data = JSON.parse(localStorage.getItem("expenses")) || [];
  data.push(obj);
  localStorage.setItem("expenses", JSON.stringify(data));
  displayData(obj);
  event.target.reset();
};

const display = () => {
  let datas = JSON.parse(localStorage.getItem("expenses")) || [];
  datas.forEach((data) => displayData(data));
};

const displayData = (obj) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.gap = "5px";
  li.style.alignItems = "center";
  li.style.paddingBottom = "5px";
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Expense";
  li.id = obj.id;
  deleteButton.addEventListener("click", () => {
    deleteData(obj.id, li);
  });
  const editButton = document.createElement("button");

  editButton.textContent = "Edit Expense";
  editButton.addEventListener("click", () => {
    editData(obj);
  });
  li.textContent =
    obj.expenseamount +
    " - " +
    obj.Choose_a_category +
    " - " +
    obj.description +
    " ";
  li.appendChild(deleteButton);

  li.appendChild(editButton);
  ul.appendChild(li);
};

const deleteData = (id, li) => {
  const expenseList = JSON.parse(localStorage.getItem("expenses")) || [];
  let updatedList = [];
  for (let data of expenseList) {
    if (data.id !== id) {
      updatedList.push(data);
    }
  }
  localStorage.setItem("expenses", JSON.stringify(updatedList));
  li.remove();
};

const editData = (obj) => {
  document.querySelector('[name="expenseamount"]').value = obj.expenseamount;
  document.querySelector('[name="Choose_a_category"]').value =
    obj.Choose_a_category;
  document.querySelector('[name="description"]').value = obj.description;
  let data = JSON.parse(localStorage.getItem("expenses")) || [];

  data = data.filter((item) => item.id !== obj.id);

  localStorage.setItem("expenses", JSON.stringify(data));

  document.querySelector("ul").innerHTML = "";
  display();
};
window.onload = display;
