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
var customerIdElement;
var customerNameElement;
var customerAddressElement;
var helperIdElement;
var helperNameElement;
var helperAddressElement;
var selectedCustomer=null;
var customers=[];

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
    customerIdElement = document.getElementById("txt-id");
    customerNameElement = document.getElementById("txt-name");
    customerAddressElement = document.getElementById("txt-address");
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

customerIdElement.addEventListener("input",handleInput);
customerNameElement.addEventListener("input",handleInput);
customerAddressElement.addEventListener("input",handleInput);

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

    if(!selectedCustomer){
        customers.push({
           id:customerIdElement.value,
           name: customerNameElement.value,
           address: customerAddressElement.value
        });
    }else {
        //TODO: update the seleted customer
    }

    save.addEventListener("click",function () {
        if(!validateAllFields()){return;}
        noRecordElement.style.display="none";

        // if(existingCustomer){return;}

        var newRowElement = tblCustomers.tBodies.item(0).insertRow(-1);
        var customerIdCell = newRowElement.insertCell(0);
        customerIdCell.innerText=customerIdElement.value;

        var customerNameCell = newRowElement.insertCell(1);
        customerNameCell.innerText=customerNameElement.value;

        var customerAddressCell = newRowElement.insertCell(2);
        customerAddressCell.innerText=customerAddressElement.value;

        var customerTrashCell = newRowElement.insertCell(3);
        customerTrashCell.innerHTML="<div class='trash-icon'></div>"

        showOrHideTFoot();
        // var trashElement = document.createElement("img");
        // trashElement.className="trash-icon";
        // trashElement.src="trash.png"


        customerIdCell.style.textAlign="center";
        customerAddressCell.style.textAlign="center";
        // customerTrashCell.appendChild(trashElement);




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
        // customerAddressElement.style.borderColor="red";
        customerAddressElement.classList.add('is-invalid');
        customerAddressElement.select();
    }

    if(customerNameElement.value.match(validateCustomerNameRegExp)){
        validateCustomerName=true;
        customerNameElement.style.borderColor="";
        helperNameElement.style.display="none";
    }else{
        helperNameElement.style.display="block";
        customerNameElement.classList.add('is-invalid');
        customerNameElement.select();
    }

    if(customerIdElement.value.match(validateCustomerIdRegExp)){
        validateCustomerId=true;
        helperIdElement.style.display="none";
        customerIdElement.style.borderColor="";
    }else {
        helperIdElement.style.display="block";
        customerIdElement.classList.add('is-invalid');
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

function showOrHideTFoot() {
    if(tblCustomers.tBodies.item(0).rows.length>0){
          document.querySelector("#tbl-customers tfoot").classList.add("d-none");
    }else{
        document.querySelector("#tbl-customers tfoot").classList.remove( "d-none");
    }
}

function handleInput() {
    this.classList.remove("is-invalid");
}
