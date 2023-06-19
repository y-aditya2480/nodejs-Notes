export function simple() {
    console.log("Simple is complex")
}

export function simple2() {
    console.log("Simple2 is complex")
}


export default function simple3() {         //BY WRITING DEFAULT HERE ONLY THIS FUNCTION WILL BE EXPORTED AS DEFAULT AS EVEN IF ANY NAME IS WRITTEN IN IMPORT THIS FUNCTION WILL ONLY RUN
    console.log("Simple3 is complex")
}
// module.exports = simple;

