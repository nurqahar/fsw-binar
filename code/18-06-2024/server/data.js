async function fetchProv() {
  const response = await fetch("http://127.0.0.1:3000/");
  const data = await response.json();
  return data.result;
}

function populateDropdown(provinsiList) {
  const dropdown = document.getElementById("provDropdown");
  dropdown.innerHTML - '<option value="">Pilih Provinsi</option>';
  provinsiList.forEach((prov) => {
    const option = document.createElement("option");
    option.value = prov.id;
    option.text = prov.text;
    dropdown.add(option);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const provList = await fetchProv();
    populateDropdown(provList);
  } catch (error) {
    console.log(error);
    document.getElementById("error-code").innerHTML = error;
  }
});
