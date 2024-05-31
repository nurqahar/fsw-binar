function fetchData(callback) {
    setTimeout(()=>{
        callback("Data Fetched");
    }, 1000);
}

document.getElementById("fetch_btn").addEventListener('click', ()=>{
    fetchData((response)=>{
        console.log(`di dalam fetchData: ${response}`);
        document.getElementById('dataDisplay').textContent=response;
    });
});