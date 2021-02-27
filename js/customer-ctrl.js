/*
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *                     Version 2, December 2004
 *
 *  Copyright (C) 2020 IJSE
 *
 *  Everyone is permitted to copy and distribute verbatim or modified
 *  copies of this license document, and changing it is allowed as long
 *  as the name is changed.
 *
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *   0. You just DO WHAT THE FUCK YOU WANT TO.
 */

/**
 * @author : Ranjith Suranga <suranga@ijse.lk>
 * @since : 11/15/20
 **/

/*===============================================================================
 * Global Variables
 *===============================================================================*/

// Todo: add all global variable declaration here
var txtId;
var txtName;
var txtAddress;
var helperIdElement;
var helperNameElement;
var helperAddressElement;
var selectedCustomer = null;
var customers = [];
var selectedRow=null;

var tblCustomers;
var paginationElement = document.getElementById("pagination-item");


document.getElementById("")

var noRecordElement = document.getElementById("no-record-text");
var save = document.getElementById("btn-save");
var clear = document.getElementById("btn-clear");


/*===============================================================================
 * Init
 *===============================================================================*/

init();

function init() {
    // Todo: add the initialization code if any
    txtId = document.getElementById("txt-id");
    txtName = document.getElementById("txt-name");
    txtAddress = document.getElementById("txt-address");
    helperIdElement = document.getElementById("txt-helper-id");
    helperNameElement = document.getElementById("txt-helper-name");
    helperAddressElement = document.getElementById("txt-helper-address");
    tblCustomers = document.getElementById("tbl-customers");

    focusedToCustomerId();
    saveCustomer();
    // clearCustomer();

}

/*===============================================================================
 * Event Handlers and Timers
 *===============================================================================*/

save.addEventListener("click", saveCustomer);
txtId.addEventListener("input", handleInput);
txtName.addEventListener("input", handleInput);
txtAddress.addEventListener("input", handleInput);

/*===============================================================================
 * Functions
 *===============================================================================*/

// Todo: add all functions

function focusedToCustomerId() {
    txtId.focus();
}

function showCustomerDetailsInConsole() {
    txtAddress.addEventListener("mouseout", function () {
        console.log(txtId.value);
        console.log(txtName.value);
        console.log(txtAddress.value);
    });
}

function saveCustomer() {

    if (!validateAllFields()) {
        return;
    }

    for (let i = 0; i < customers.length; i++) {
        if (customers[i].id === txtId) {
            customers[i].name=txtName.value;
            customers[i].address=txtAddress.value;
            selectedCustomer=customers[i];
        }
    }

    if (!selectedCustomer) {
        customers.push({
            id: txtId.value,
            name: txtName.value,
            address: txtAddress.value
        });

        var newRowElement = tblCustomers.tBodies.item(0).insertRow(-1);
        newRowElement.onclick = handleSelection;
        var customerIdCell = newRowElement.insertCell(0);
        customerIdCell.innerText = txtId.value;

        var customerNameCell = newRowElement.insertCell(1);
        customerNameCell.innerText = txtName.value;

        var customerAddressCell = newRowElement.insertCell(2);
        customerAddressCell.innerText = txtAddress.value;

        var customerTrashCell = newRowElement.insertCell(3);
        customerTrashCell.innerHTML = "<div class='trash-icon' onclick='handleDelete(event)'></div>"

        showOrHideTFoot();

        txtId.value = "";
        txtName.value = "";
        txtAddress.value = "";
        txtId.focus();

    } else {

        selectedCustomer.name=txtName.value;
        selectedCustomer.address=txtAddress.value;

        selectedRow.cells[1].innerText=txtName.value;
        selectedRow.cells[2].innerText=txtAddress.value;

        txtId.value = "";
        txtName.value = "";
        txtAddress.value = "";
        txtId.focus();
    }



}

function handleDelete(event) {

    if(confirm("Are you sure whether you want to delete this customer?")){
        // console.log(id, event);
        tblCustomers.deleteRow(event.target.parentElement.parentElement.rowIndex);
        showOrHideTFoot();

        customers.splice(customers.findIndex(function(c){
            return c.id === event.target.parentElement.parentElement.cells[0].innerText;
        })q ,1);
        console.log(customers);
        event.stopPropagation();
    }
}

function validateAllFields() {

    var validateCustomerId = false;
    var validateCustomerName = false;
    var validateCustomerAddress = false;

    var validateCustomerIdRegExp = /^C\d{3}$/g;
    var validateCustomerNameRegExp = /^[A-Za-z .]{3,}$/g && /^[A-Za-z]{3,}$/g;
    var validateCustomerAddressRegExp = /[A-Za-z]{3,}/g;

    //Here we use g (global flag in RegEx to if giving RegExp isn't RegExp then, it
    // implicitly converterd to a RegExp by using new RegExp(regexp))
    if (txtAddress.value.match(validateCustomerAddressRegExp)) {
        validateCustomerAddress = true;
        txtAddress.style.borderColor = "";
        helperAddressElement.style.display = "none";
    } else {
        helperAddressElement.style.display = "block";
        // txtAddress.style.borderColor="red";
        txtAddress.classList.add('is-invalid');
        txtAddress.select();
    }

    if (txtName.value.match(validateCustomerNameRegExp)) {
        validateCustomerName = true;
        txtName.style.borderColor = "";
        helperNameElement.style.display = "none";
    } else {
        helperNameElement.style.display = "block";
        txtName.classList.add('is-invalid');
        txtName.select();
    }

    if (txtId.value.match(validateCustomerIdRegExp)) {
        validateCustomerId = true;
        helperIdElement.style.display = "none";
        txtId.style.borderColor = "";
    } else {
        helperIdElement.style.display = "block";
        txtId.classList.add('is-invalid');
        txtId.select();
    }

    // console.log(validateCustomerId);
    // console.log(validateCustomerName);
    // console.log(validateCustomerAddress);

    if (validateCustomerId && validateCustomerName && validateCustomerAddress) {
        return true;
    } else {
        return false;
    }


}

function showOrHideTFoot() {
    if (tblCustomers.tBodies.item(0).rows.length > 0) {
        document.querySelector("#tbl-customers tfoot").classList.add("d-none");
    } else {
        document.querySelector("#tbl-customers tfoot").classList.remove('d-none');
    }
}

function handleInput() {
    this.classList.remove("is-invalid");
}

function handleSelection(event) {
    // console.log(event);
    clearSelection();
    selectedRow = event.target.parentElement;
    selectedRow.classList.add("selected");
    txtId.value = selectedRow.cells[0].innerText;
    txtId.disabled = true;
    txtName.value = selectedRow.cells[1].innerText;
    txtAddress.value = selectedRow.cells[2].innerText;
    selectedCustomer=customers.find(function (c) {
        return c.id == selectedRow.cells[0].innerText;
    })
}

function clearSelection(event) {
    var rows = document.querySelectorAll("#tbl-customers tbody tr");
    for (let i = 0; i < rows.length; i++) {
        rows[i].classList.remove("selected");
    }
    txtId.disabled = false;
    selectedRow=null;
    selectedCustomer=null;
}
