const express = require("express");
const companyController = require("../controllers/company.controller");
const { companyValidation } = require("../validations/companyValidation");

const companyRoute = express.Router();

companyRoute.route("/").post(companyValidation, companyController.addCompany);
companyRoute.route("/:id").put(companyController.updateCompany);

module.exports = companyRoute;