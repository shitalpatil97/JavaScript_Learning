function do_assignment(callback) {
    console.log("Assignment done");
    callback();
}

    function copy_assignment(){
        console.log("Let me copy");
    }
    

do_assignment(copy_assignment);