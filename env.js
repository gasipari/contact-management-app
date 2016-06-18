//process.env["MONGOOSE_URI"] = "localhost:27017/contact-management-api";
process.env["MONGOOSE_URI"] = "mongodb://dwc:beHappy!@ds013212.mlab.com:13212/contact-management-api"
process.env["TOKEN_EXPIRATION_SEC"] = 3600;
process.env["PORT"] = 3000;
process.env["ACCESS_TOKEN_SECRET"] = "***superSecret***";

// mongodb://<dbuser>:<dbpassword>@ds013212.mlab.com:13212/contact-management-api
