const objOut1=document.getElementById("objOut1");
const objOut2=document.getElementById("objOut2");
const objOut3=document.getElementById("objOut3");
const objOut4=document.getElementById("objOut4");
const h1_1=document.getElementById("h1_1");

// method 1 - object assign
const object_complex={
    nama:'adha',
    usia:29,
    jk:'L',
    pengalamanKerja:[
        {perusahaan: 'PT. A', bidang:'IT', tahun: 2020},
        {perusahaan: 'PT. B', bidang:{bidangUtama: 'IT', kategori:'jasa'}, tahun:2022}
    ]
};

// method 1 - object assign
const obj1={
    nama: 'Adha'
};


// method 2 - object construct
const obj2=new Object();
obj2.nama='Qahar';

// method 3 - object constructor function
function ProfilKaryawan(nama, usia, jumlahTahunPengalaman){
    (this.nama = nama), (this.usia=usia), (this.jumlahTahunPengalaman=jumlahTahunPengalaman);
}
const karyawan=new ProfilKaryawan('Adha', 29, 4);


// method 4 - using ES6 class
class Employee{
    constructor(namaParam, usiaParam, jumlahTahunPengalamanParam){
        this.nama=namaParam;
        this.usia=usiaParam;
        this.jumlahTahunPengalaman=jumlahTahunPengalamanParam;
    }
}
const employee=new Employee("Adha Qahar", 29, 4);


// object assign        & for in


// object constructor   & for of


// object constructor   & for each


// UPDATE CONTENT
h1_1.innerHTML="OBJECT";
objOut1.innerHTML=`Nama: ${obj1.nama}`;
objOut2.innerHTML=`<br>Nama: ${obj2.nama}`;
objOut3.innerHTML=`<br>Nama: ${karyawan.nama}<br> Usia: ${karyawan.usia}<br> Tahun Pengalaman: ${karyawan.jumlahTahunPengalaman}`;
objOut4.innerHTML=`<br>Nama: ${employee.nama}<br> Usia: ${employee.usia}<br> Tahun Pengalaman: ${employee.jumlahTahunPengalaman}`;