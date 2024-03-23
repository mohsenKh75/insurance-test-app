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
const validateMobileNumber = body("mobile_number")
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

  const { mobile_number } = req.body;

  res.send({
    status: 200,
    mobile_number,
    message: "لطفاً نام و نام خانوادگی را وارد کنید.",
  });
});

// post register data
app.post(
  "/register",
  [
    validatePersianName("first_name"),
    validatePersianName("family_name"),
    body("password")
      .isLength({ min: 4 })
      .withMessage("طول پسورد باید حداقل ۴ کاراکتر باشد."),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { first_name, family_name, password } = req.body;

    res.send({
      status: 200,
      message: "عملیات با موفقیت انجام شد.",
      data: { first_name, family_name },
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
