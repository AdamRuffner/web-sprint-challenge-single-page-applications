import * as yup from 'yup'



export default yup.object().shape({
    size: yup
        .string(),
    sauce: yup
        .string()
        .oneOf(['bbq', 'alfredo', 'originalRed', 'garlicRanch'], 'sauce is required'),
    pepperoni: yup
        .boolean(),
    sausage: yup
        .boolean(),
    onions: yup
        .boolean(),
    bacon: yup
        .boolean(),
    grilledChicken: yup
        .boolean(),
    spicyItalianSausage: yup
        .boolean(),
    greenPepper: yup
        .boolean(),
    tomatos: yup
        .boolean(),
    threeCheese: yup
        .boolean(),
    name: yup
        .string()
        .min(2, "Name must include 2 letters")
        .required("Name is required"),
    instructions: yup
        .string()


});
