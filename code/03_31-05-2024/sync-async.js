function show_alert() {
    alert('hello');
}

function sync_ops() {
    document.getElementById('sync_out').innerHTML="Sync Operation Started...";
    // sync delay
    const start = Date.now();
    while(Date.now()-start<3000){
        // blocing code for 3 seconds
    }
    document.getElementById('sync_out').innerHTML="Sync Operation Completed";
}

function async_ops() {
    document.getElementById('async_out').innerHTML="Async Operation Started...";
    // async delay using setTimeout
    setTimeout(()=>{
        document.getElementById('async_out').innerHTML="Async Operation Completed";
    }, 3000)
}