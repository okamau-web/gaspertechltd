const express = require('express')
const router = express.Router()

const Customer = require('../models/customers.model')
 

//get all
// router.get("/list", async (req, res) => {
   
//     try {
        
//         const customers = await Customer.find();
       
//         res.json(customers);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

 router.get('/list', (req, res, next) => {

    Customer.find((err, customerListResponse) => {
         if (err) {
            res.status(500).json({ message: err.message });


         } else {
             const recordCount = customerListResponse.length;
             res.send({
                 status: 200, recordCount: recordCount, results: customerListResponse
             })
         }

     })
 })



//get one
router.get("one/:id", getCustomer, (req, res) => {
    res.json(res.customer);
});

//create one
router.post("/add", async (req, res) => {

    const customer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        phoneNumber: req.body.phoneNumber,
        dob: req.body.dob
    });
    try {
        const newCustomer = await customer.save();
        res.status(201).json(newCustomer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//update one
router.patch("update/:id", getCustomer, async (req, res) => {
    if (req.body.firstName != null) {
        res.customer.firstName = req.body.firstName;
    }
    if (req.body.lastName != null) {
        res.customer.lastName = req.body.lastName;
    }
    if (req.body.phoneNumber != null) {
        res.customer.phoneNumber = req.body.phoneNumber;
    }
    if (req.body.emailAddress != null) {
        res.customer.emailAddress = req.body.emailAddress;
    }
    if (req.body.dob != null) {
        res.customer.dob = req.body.dob;
    }
    try {
        const updatedCustomer = await res.customer.save();
        res.json(updatedCustomer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


//delete one
router.delete("delete/:id", getCustomer, async (req, res) => {
    try {
        await res.customer.remove();
        res.json({ message: "Deleted Customer successfuly" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getCustomer(req, res, next) {
    let customer;
     
    try {
        customer = await Customer.findById(req.params.id);
        if (customer == null) {
            return res.status(404).json({ message: "cannot find customer" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.customer = customer;
    next();
}

    module.exports = router