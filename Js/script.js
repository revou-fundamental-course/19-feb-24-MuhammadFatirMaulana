function validateForm() {
    var nama = document.forms["messageForm"]["nama"].value;
    var tgl_lahir = document.forms["messageForm"]["tgl_lahir"].value;
    var jenis_kelamin = document.forms["messageForm"]["jenis_kelamin"].value;
    var pesan = document.forms["messageForm"]["pesan"].value;

    if (nama == "") {
        alert("Nama harus diisi");
        return false;
    }

    if (tgl_lahir == "") {
        alert("Tanggal Lahir harus diisi");
        return false;
    }

    if (jenis_kelamin == "") {
        alert("Jenis Kelamin harus dipilih");
        return false;
    }

    if (pesan == "") {
        alert("Pesan harus diisi");
        return false;
    }

    return true;
}
displayResult(nama, tgl_lahir, jenis_kelamin, pesan);

// Prevent form submission (karena kita tidak punya action URL)
return false;
}

function displayResult(nama, tgl_lahir, jenis_kelamin, pesan) {
var hasilDiv = document.getElementById("hasilForm");
hasilDiv.innerHTML = "<h3>Hasil Pengisian Form:</h3>" +
                     "<p><strong>Nama:</strong> " + nama + "</p>" +
                     "<p><strong>Tanggal Lahir:</strong> " + tgl_lahir + "</p>" +
                     "<p><strong>Jenis Kelamin:</strong> " + jenis_kelamin + "</p>" +
                     "<p><strong>Pesan:</strong> " + pesan + "</p>";
}