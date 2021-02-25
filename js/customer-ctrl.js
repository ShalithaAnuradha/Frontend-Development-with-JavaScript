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
var customerIdElement = document.getElementById("txt-id");
var customerNameElement = document.getElementById("txt-name");
var customerAddressElement = document.getElementById("txt-address");
var save = document.getElementById("btn-save");
var clear = document.getElementById("btn-clear");


/*===============================================================================
 * Init
 *===============================================================================*/

init();

function init() {
    // Todo: add the initialization code if any
    // showCustomerDetailsInConsole();
    focusedToCustomerId();
    saveCustomer();

}

/*===============================================================================
 * Event Handlers and Timers
 *===============================================================================*/

// Todo: add all event listeners and handlers here

/*===============================================================================
 * Functions
 *===============================================================================*/

// Todo: add all functions

function focusedToCustomerId() {
    document.getElementById("txt-id").focus();
}
function showCustomerDetailsInConsole() {
    customerAddressElement.addEventListener("mouseout", function () {
        console.log(customerIdElement.value);
        console.log(customerNameElement.value);
        console.log(customerAddressElement.value);
    });
}

function saveCustomer() {
    save.addEventListener("click",function () {
        let customerTable = document.getElementById("tbl-customers");
        let newRowElement = customerTable.insertRow(-1);
        let customerIdCell = newRowElement.insertCell(0);
        let customerNameCell = newRowElement.insertCell(1);
        let customerAddressCell = newRowElement.insertCell(2);
        let customerIdTextNode = document.createTextNode(customerIdElement.value);
        let customerNameTextNode = document.createTextNode(customerNameElement.value);
        let customerAddressTextNode = document.createTextNode(customerAddressElement.value);
        customerIdCell.appendChild(customerIdTextNode);
        customerNameCell.appendChild(customerNameTextNode);
        customerAddressCell.appendChild(customerAddressTextNode);
    });
}
