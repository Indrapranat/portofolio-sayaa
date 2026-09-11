import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "spk-tvri",
    title: "SPK TVRI (AHP & TOPSIS)",
    description:
      "Sistem Pendukung Keputusan (SPK) naskah berita siaran untuk TVRI Sulawesi Selatan guna memprioritaskan tayang naskah secara objektif, konsisten, dan transparan menggunakan kombinasi metode AHP dan TOPSIS.",
    problem:
      "Penetapan prioritas tayang naskah berita penyiaran sebelumnya rentan terhadap subjektivitas redaksional, perbedaan standar penilaian antar-editor, serta proses kalkulasi pembobotan kriteria jurnalistik yang belum terstandarisasi.",
    solution:
      "Membangun sistem SPK naskah berita berbasis web dengan metode AHP Mean Multi-Responden untuk menentukan bobot konsistensi kriteria (Akurasi, Relevansi, Keberimbangan, Kepatuhan P3SPS, Kecepatan Publikasi), kemudian meranking alternatif naskah menggunakan algoritma TOPSIS secara otomatis.",
    features: [
      "Penentuan bobot kriteria ilmiah berbasis AHP Mean Multi-Responden (pakar & dewan editor)",
      "Perankingan prioritas tayang naskah berita otomatis menggunakan metode TOPSIS",
      "Manajemen master kriteria penyiaran (Akurasi, Relevansi, Keberimbangan, P3SPS, Kecepatan)",
      "Pencatatan rekapitulasi penilaian matriks pairwise dan kalkulasi konsistensi bobot",
      "Panel Editor terproteksi password hashing bcrypt dan Cloudflare Turnstile bot protection"
    ],
    techStack: [
      "PHP (OOP)",
      "MySQL",
      "AHP Method",
      "TOPSIS Method",
      "Cloudflare Turnstile",
      "JavaScript",
      "Bootstrap"
    ],
    imageUrl:
      "/images/projects/spk-tvri-1.png",
    screenshots: [
      "/images/projects/spk-tvri-1.png",
      "/images/projects/spk-tvri-2.png",
      "/images/projects/spk-tvri-3.png"
    ],
    repoUrl: "https://github.com/Indrapranat/SPK-TVRI",
    status: "completed",
    role: "Full-Stack Developer & Algorithm Engineer",
    featured: true,
    order: 1,
  },
  {
    slug: "saukang-tracking-system",
    title: "Saukang Tracking System",
    description:
      "Sistem pendukung keselamatan pendaki hibrida berbasis web & GPS untuk Gunung Bulu Saukang, menggabungkan validasi checkpoint pos manual, pelacakan waktu nyata, dan peringatan darurat SOS.",
    problem:
      "Tingginya risiko insiden pada jalur pendakian gunung, keterbatasan pengawasan di pos ekstrem, serta lambatnya deteksi sinyal bahaya dan respon koordinasi evakuasi saat terjadi kondisi darurat.",
    solution:
      "Membangun sistem pemantauan hibrida v4.0 daring yang memadukan peta satelit (Leaflet & Esri Tiles), pemantauan pos checkpoint (Basecamp hingga Pos 5), monitoring sinyal darurat SOS real-time dengan alarm suara, dan manajemen tim pendaki.",
    features: [
      "Pemantauan jalur dan validasi checkpoint manual pos pendakian (BC, Pos 1 s/d Pos 5)",
      "Pusat kendali darurat SOS real-time dengan notifikasi audio & pelacakan status SAR",
      "Peta navigasi topografi interaktif berbasis Leaflet dengan citra satelit Esri",
      "Sistem registrasi daring tim pendaki baru dan pencatatan manifes rombongan",
      "Dashboard monitor tanggap darurat (Status: Pending, Rescue On Going, Resolved)"
    ],
    techStack: [
      "PHP / Laravel",
      "MySQL",
      "Leaflet.js / Esri Tiles",
      "Real-time Monitoring",
      "JavaScript",
      "Tailwind CSS"
    ],
    imageUrl:
      "/images/projects/saukang-1.png",
    screenshots: [
      "/images/projects/saukang-1.png",
      "/images/projects/saukang-2.png",
      "/images/projects/saukang-3.png"
    ],
    status: "completed",
    role: "Full-Stack Developer",
    featured: true,
    order: 2,
  },
  {
    slug: "academic-management-system",
    title: "Academic Management System",
    description:
      "Sistem Informasi Akademik (SIAKAD) komprehensif berbasis web untuk digitalisasi tata kelola sekolah, distribusi kelas (class arms), data guru, dan rekapitulasi presensi siswa.",
    problem:
      "Tata kelola akademik sekolah yang dilakukan terpisah dan manual menyulitkan mutasi kelas siswa, memperlambat rekap kehadiran bulanan, dan rentan terhadap inkonsistensi data siswa.",
    solution:
      "Mengembangkan portal akademik terpusat multi-peran (Admin, Guru, Siswa) dengan fitur AJAX untuk pembaruan data penempatan kelas tanpa refresh halaman, modul absensi harian terpadu, dan cetak laporan otomatis.",
    features: [
      "Multi-Role Authentication terproteksi (Hak akses Admin, Guru, dan Siswa)",
      "Manajemen periode akademik, semester, dan penjurusan mata pelajaran",
      "Distribusi penempatan siswa (Class Arms) dinamis berbasis AJAX",
      "Pencatatan presensi harian siswa dan kalkulasi persentase kehadiran",
      "Dashboard analitik statistik siswa, kelas aktif, dan performa akademik"
    ],
    techStack: [
      "PHP",
      "MySQL",
      "JavaScript / AJAX",
      "Bootstrap UI",
      "HTML5 / CSS3",
      "Session Security"
    ],
    imageUrl:
      "/images/projects/ams-1.png",
    screenshots: [
      "/images/projects/ams-1.png",
      "/images/projects/ams-2.png",
      "/images/projects/ams-3.png"
    ],
    repoUrl: "https://github.com/Indrapranat/Academic-Management-System",
    status: "completed",
    role: "Full-Stack Developer",
    featured: true,
    order: 3,
  },
];
