import * as yup from 'yup'

export default yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Name must be at least two characters"),
    size: yup.string().oneOf(["Personal", "Small", "Medium", "Large"], "Size is required"),
    sauce: yup
      .string()
      .oneOf(
        ["originalRed", "garlicRanch", "bbq", "alfredo"],
        "Sauce is required"
      ),
  });
