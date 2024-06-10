async function fetchData() {
    return new Promise((success, failed)=>{
        setTimeout(()=>{
            success("Data Fetched");
        }, 1000);

    });
}

// document.getElementById('input_txt');

document.getElementById("fetch_btn").addEventListener('click', async ()=>{
    const response = await fetchData();
    document.getElementById('dataDisplay').textContent=response;
});