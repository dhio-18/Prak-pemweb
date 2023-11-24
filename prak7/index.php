<?php
class Manusia
{
    protected $nama;

    public function setNama($nama)
    {
        $regex = '/^[a-zA-Z\s]+$/';
        if (!preg_match($regex, $nama)) {
            throw new InvalidArgumentException('Nama Harus terdiri dari huruf dan spasi.');
        }
        $this->nama = $nama;
    }

    public function getNama()
    {
        return $this->nama;
    }
}

class Mahasiswa extends Manusia
{
    private $nim;
    private $prodi;
    private $alamat;

    public function __construct($nama, $nim, $prodi, $alamat)
    {
        parent::setNama($nama);
        $this->setNim($nim);
        $this->setProdi($prodi);
        $this->setAlamat($alamat);
    }

    public function setNama($nama)
    {
        $regex = '/^[a-zA-Z\s]+$/';
        if (!preg_match($regex, $nama)) {
            throw new InvalidArgumentException('Nama Harus terdiri dari huruf');
        }
        $this->nama = $nama;
    }

    public function setNim($nim)
    {
        $regex = '/^[0-9]{9}$/';
        if (!preg_match($regex, $nim)) {
            throw new InvalidArgumentException('NIM Harus terdiri dari 9 digit angka');
        }
        $this->nim = $nim;
    }

    public function setProdi($prodi)
    {
        $regex = '/^[a-zA-Z\s]+$/';
        if (!preg_match($regex, $prodi)) {
            throw new InvalidArgumentException('Prodi Harus terdiri dari huruf dan spasi');
        }
        $this->prodi = $prodi;
    }

    public function setAlamat($alamat)
    {
        $regex = '/^[a-zA-Z0-9\s\.,#-]+$/';
        if (!preg_match($regex, $alamat)) {
            throw new InvalidArgumentException('Alamat Harus terdiri dari huruf dan angka');
        }
        $this->alamat = $alamat;
    }

    public function getNama()
    {
        return $this->nama;
    }

    public function getNim()
    {
        return $this->nim;
    }

    public function getProdi()
    {
        return $this->prodi;
    }

    public function getAlamat()
    {
        return $this->alamat;
    }
}

try {
    $mahasiswa = new Mahasiswa("Fadhil Firoos", "121140142", "Teknik Informatika", "Metro");
    echo "Nama: " . $mahasiswa->getNama();
} catch (InvalidArgumentException $error) {
    echo "Error: " . $error->getMessage(). "\n";
}
try {
    $mahasiswa = new Mahasiswa("Fadhil_Firoos", "121140142", "Teknik Informatika", "Metro");
    echo "\nNIM: " . $mahasiswa->getNama();
} catch (InvalidArgumentException $error) {
    echo "Error: " . $error->getMessage();
}

?>

