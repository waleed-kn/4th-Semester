function fun1(calllback) {
    setTimeout(() => {
        console.log("ALWaYS LAte");
        calllback()
    }, 4000);
}
function fun2() {
    console.log("step 1 Complete");
    console.log("Step 2 Complete")
    console.log("Step 3 Complete")
}
fun1(fun2);