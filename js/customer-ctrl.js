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
var helperIdElement = document.getElementById("txt-helper-id");
var helperNameElement = document.getElementById("txt-helper-name");
var helperAddressElement = document.getElementById("txt-helper-address");

let customerTable = document.getElementById("tbl-customers");
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
    // showCustomerDetailsInConsole();
    focusedToCustomerId();
    saveCustomer();
    // clearCustomer();

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
    customerIdElement.focus();
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
        if(!validateAllFields()){return;}
        noRecordElement.style.display="none";

        // if(existingCustomer){return;}

        let newRowElement = customerTable.insertRow(-1);
        let customerIdCell = newRowElement.insertCell(0);
        let customerNameCell = newRowElement.insertCell(1);
        let customerAddressCell = newRowElement.insertCell(2);
        let customerTrashCell = newRowElement.insertCell(3);
        let customerIdTextNode = document.createTextNode(customerIdElement.value);
        let customerNameTextNode = document.createTextNode(customerNameElement.value);
        let customerAddressTextNode = document.createTextNode(customerAddressElement.value);
        let trashElement = document.createElement("img");
        trashElement.className="trash-icon";
        trashElement.src="trash.png"

        customerIdCell.appendChild(customerIdTextNode);
        customerIdCell.style.textAlign="center";
        customerNameCell.appendChild(customerNameTextNode);
        customerAddressCell.appendChild(customerAddressTextNode);
        customerAddressCell.style.textAlign="center";
        customerTrashCell.appendChild(trashElement);



        // if(customerTable.)
    });
}

function validateAllFields() {
    var validateCustomerId=false;
    var validateCustomerName=false;
    var validateCustomerAddress=false;

    var validateCustomerIdRegExp=/^C\d{3}$/g;
    var validateCustomerNameRegExp=/^[A-Za-z .]{3,}$/g && /^[A-Za-z]{3,}$/g;
    var validateCustomerAddressRegExp=/[A-Za-z]{3,}/g;

    //Here we use g (global flag in RegEx to if giving RegExp isn't RegExp then, it
    // implicitly converterd to a RegExp by using new RegExp(regexp))
    if(customerAddressElement.value.match(validateCustomerAddressRegExp)){
        validateCustomerAddress=true;
        customerAddressElement.style.borderColor="";
        helperAddressElement.style.display="none";
    }else{
        helperAddressElement.style.display="block";
        customerAddressElement.style.borderColor="red";
        customerAddressElement.select();
    }

    if(customerNameElement.value.match(validateCustomerNameRegExp)){
        validateCustomerName=true;
        customerNameElement.style.borderColor="";
        helperNameElement.style.display="none";
    }else{
        helperNameElement.style.display="block";
        customerNameElement.style.borderColor="red";
        customerNameElement.select();
    }

    if(customerIdElement.value.match(validateCustomerIdRegExp)){
        validateCustomerId=true;
        helperIdElement.style.display="none";
        customerIdElement.style.borderColor="";
    }else {
        helperIdElement.style.display="block";
        customerIdElement.style.borderColor="red";
        customerIdElement.select();
    }

    // console.log(validateCustomerId);
    // console.log(validateCustomerName);
    // console.log(validateCustomerAddress);

    if(validateCustomerId && validateCustomerName && validateCustomerAddress){
        return true;
    }else{
        return false;
    }


}

function deleteRow() {
    if(customerTable.rows.length>0){

    }
}
