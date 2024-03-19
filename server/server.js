const express = require("express");
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const cors = require("cors");
const app = express();
const PORT = 8585;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//mobile validation:
const validateMobileNumber = body("mobileNumber")
  .matches(/^09\d{9}$/)
  .withMessage("فرمت شماره موبایل اشتباه است.");

// user info validation
const validatePersianName = (fieldName) =>
  body(fieldName)
    .matches(/^[\u0600-\u06FF\s]+$/)
    .withMessage(`فیلد ${fieldName} باید فقط شامل حروف فارسی باشد.`);

//post login data endpoint
app.post("/login", validateMobileNumber, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { mobileNumber } = req.body;

  res.send({
    status: 200,
    mobileNumber,
    message: "لطفاً نام و نام خانوادگی را وارد کنید.",
  });
});

// get login data
app.post(
  "/login/details",
  [
    validatePersianName("name"),
    validatePersianName("familyName"),
    body("password")
      .isLength({ min: 4 })
      .withMessage("طول پسورد باید حداقل ۴ کاراکتر باشد."),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, familyName, password } = req.body;

    res.send({
      status: 200,
      message: "عملیات با موفقیت انجام شد.",
      data: name,
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
