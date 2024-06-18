async function fetchProv() {
  const response = await fetch(
    "https://alamat.thecloudalert.com/api/provinsi/get/"
  );
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

function filterDropdown() {
  const search_input = document.getElementById("search").value.toLowerCase();
  const options = document.getElementById("provDropdown").options;
  for (let i = 0; i < options.length; i++) {
    const optionText = options[i].text.toLowerCase();
    options[i].style.display = optionText.includes(search_input) ? "" : none;
  }
}

document.getElementById("search").addEventListener("input", filterDropdown);

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const provList = await fetchProv();
    populateDropdown(provList);
  } catch (error) {
    console.log(error);
    document.getElementById("error-code").innerHTML = error;
  }
});
