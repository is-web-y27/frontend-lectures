import { square } from "./esm.js";

const info = {
    a: 5,
    b: 9,
    c: square(15),
};

export default info;

btn.addEventListener('click', () => {
    info.c += 1;
});
