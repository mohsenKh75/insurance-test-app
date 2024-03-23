export function farsiValidator(value: string) {
  const regex = /^[\u0600-\u06FF\s]*$/;
  return regex.test(value) ? undefined : "فقط حروف فارسی مجاز است!";
}

export function passwordValidator(value: string) {
  const hasNumber = value.search(/[0-9]/) !== -1;
  const hasUpperCase = value.search(/[A-Z]/) !== -1;
  const hasLowerCase = value.search(/[a-z]/) !== -1;
  const validLength = value.length >= 4 && value.length <= 10;

  if (!hasNumber) {
    return "رمز عبور باید شامل حداقل یک عدد باشد!";
  } else if (!hasUpperCase) {
    return "رمز عبور باید شامل حداقل یک حرف بزرگ لاتین باشد!";
  } else if (!hasLowerCase) {
    return "رمز عبور باید شامل حداقل یک حرف کوچک لاتین باشد!";
  } else if (!validLength) {
    return "رمز عبور باید بین 4 تا 10 کاراکتر باشد!";
  } else {
    return undefined;
  }
}
