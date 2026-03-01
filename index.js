let table = document.querySelector("#phoneData tbody");

let phoneNameInput = document.querySelector("#phoneNameInput");
let phonePriceInput = document.querySelector("#phonePriceInput");
let phoneQtyInput = document.querySelector("#phoneQtyInput");
let addBtn = document.querySelector(".addBtn");

let phoneNameInputEdit = document.querySelector("#phoneNameInputEdit");
let phonePriceInputEdit = document.querySelector("#phonePriceInputEdit");
let phoneQtyInputEdit = document.querySelector("#phoneQtyInputEdit");

let index = "";

let phones = [
  { name: "samsung s25 ultra", price: 400, qty: 5 },
  { name: "samsung s24 ultra", price: 300, qty: 5 },
  { name: "samsung s23 ultra", price: 200, qty: 5 },
  { name: "samsung s22 ultra", price: 100, qty: 5 },
  { name: "samsung s21 ultra", price: 90, qty: 5 },
  { name: "samsung s20 ultra", price: 80, qty: 5 },
  { name: "samsung s19 ultra", price: 70, qty: 5 },
];

let showPhones = () => {
  table.innerHTML = ``;
  phones.forEach((el, index) => {
    table.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${el.name}</td>
        <td>${el.price}$</td>
        <td>${el.qty}</td>
        <td>
        <button class="btn btn-warning" onclick='sendPhoneDataToEdit(${index})' data-bs-toggle="modal" data-bs-target="#editPhone"> <i class="fas fa-pen-to-square"></i></button>
        <button class="btn btn-danger" onclick='deletePhone(${index})'> <i class="fas fa-trash-can"></i></button>
        </td>
        </tr> 
        `;
  });
};

showPhones();

let addPhone = () => {
  if (
    phoneNameInput.value == "" ||
    phonePriceInput.value == "" ||
    phoneQtyInput.value == ""
  ) {
    alert("Please Fill The empty Fields");
    return;
  }

  let newPhone = {
    name: phoneNameInput.value,
    price: +phonePriceInput.value,
    qty: +phoneQtyInput.value,
  };

  phones.push(newPhone);
  showPhones();

  phoneNameInput.value = "";
  phonePriceInput.value = "";
  phoneQtyInput.value = "";
};

let deletePhone = (index) => {
  Swal.fire({
    title: `Are You Sure You Want To Delete ${phones[index].name}`,
    showDenyButton: true,
    confirmButtonText: "Delete",
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      phones.splice(index, 1);
      showPhones();
      Swal.fire("Deleted Successfully!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Nothing Deleted", "", "info");
    }
  });
};

let sendPhoneDataToEdit = (editIndex) => {
  phoneNameInputEdit.value = phones[editIndex].name;
  phonePriceInputEdit.value = phones[editIndex].price;
  phoneQtyInputEdit.value = phones[editIndex].qty;
  index = editIndex;
};

let editPhone = () => {
  phones[index].name = phoneNameInputEdit.value;
  phones[index].price = phonePriceInputEdit.value;
  phones[index].value = phoneQtyInputEdit.value;
  showPhones();
  Swal.fire({
    title: `${phoneNameInputEdit.value} Updated Successfully !!!`,
    icon: "success",
  });
};
