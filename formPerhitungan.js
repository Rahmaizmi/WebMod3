function Resume(){
    nama=document.getElementById("Nama").value;
    jk=document.getElementById("jeniskelamin").value;
    nik=document.getElementById("Nomor Identitas").value;
    tipe_kamar=document.getElementById("tipe_kamar").value;
    if(tipe_kamar===Standar){
        harga=500000;
    }
    else if(tipe_kamar===Deluxe){
        harga=700000;
    }
    else if(tipe_kamar===Family){
        harga=1000000;
    }
    tglPesan=document.getElementById("Tanggal Pesan").value;
    durasi=parseInt(document.getElementById("durasi").value);
    if(durasi>3){
        diskon=0.1;
        persenan="10%";
    }
    sarapan=document.getElementById
    ("Breackfast").value;
    if(sarapan==ya){
        tambahan=80000;
    }
    total=(harga*diskon)+tambahan;
    document.getElementById("Harga").value=harga;
    document.getElementById("Total Bayar").value=total;


    resume=`
    <h3>Resume Pemesanan<h3>
    <p>Nama Pemesan : ${nama}</p>
    <p>Nomor Identitas : ${nik}</p>
    <p>Jenis Kelamin : ${jk}</p>
    <p>Tipe Kamar : ${tipe_kamar}</p>
    <p>Durasi Menginap : ${tipe_kamar}</p>
    <p>Diskon : ${persenan}</p>
    <p>Total Bayar : ${total}</p>
    `;
    document.getElementById("resume").value=resume;
}