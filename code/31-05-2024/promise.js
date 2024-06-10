function fetchData() {
    return new Promise((success, failed)=>{
        setTimeout(()=>{
            success("Data Fetched");
        }, 1000);

    });
}

document.getElementById("fetch_btn").addEventListener('click', ()=>{
    fetchData().then((response)=>{
        document.getElementById('dataDisplay').textContent=response;
    });
});