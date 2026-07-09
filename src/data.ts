export type Wahana = {
  id: string;
  name: string;
  tagline: string;
  price: string; // "Gratis" or "Rp ..."
  duration: string;
  description: string;
  includes: string[];
};

export const wahanas: Wahana[] = [
  {
    id: "jogging",
    name: "Jalan Kaki Susur Jogging Track",
    tagline: "Menyusuri boardwalk kayu di antara akar bakau.",
    price: "Gratis",
    duration: "±45–60 menit",
    description:
      "Berjalan santai di sepanjang jogging track kayu ±1–2 km yang membelah rimbun hutan bakau. Rute ideal untuk keluarga, pengamat burung, dan pengunjung yang ingin menikmati suasana Pantai Timur Surabaya tanpa terburu-buru.",
    includes: [
      "Akses jalur kayu utama",
      "Spot foto jembatan mangrove",
      "Papan informasi edukasi ekosistem",
    ],
  },
  {
    id: "perahu",
    name: "Wisata Perahu Susur Muara",
    tagline: "Menyusuri sungai dan muara sejauh ±5 km.",
    price: "Berbayar (tarif menyesuaikan pengelola)",
    duration: "±15 menit per trip",
    description:
      "Naiki perahu tradisional menyusuri sungai Wonorejo sampai ke muara. Rute sekitar 5 kilometer ini adalah cara terbaik melihat kanopi bakau, burung air, dan sesekali kera ekor panjang dari dekat.",
    includes: [
      "Perahu dengan pemandu warga lokal",
      "Pelampung keselamatan",
      "Narasi singkat ekosistem mangrove",
    ],
  },
  {
    id: "edukasi",
    name: "Kunjungan Edukasi Kelompok / Sekolah",
    tagline: "Program terpandu untuk rombongan pelajar & komunitas.",
    price: "Reservasi (paket menyesuaikan pengelola)",
    duration: "±2–3 jam",
    description:
      "Program edukasi terpandu bagi sekolah dan komunitas: mengenal fungsi green belt PAMURBAYA, jenis-jenis mangrove seperti Avicennia alba, Nypa fruticans, dan Excoecaria agallocha, hingga simulasi penanaman bibit bersama warga.",
    includes: [
      "Pemandu edukasi lokal",
      "Kunjungan Mangrove Information Center",
      "Opsi simulasi penanaman bibit",
    ],
  },
];

export type Spot = {
  id: string;
  name: string;
  short: string;
  fact: string;
};

export const spots: Spot[] = [
  {
    id: "mic",
    name: "Mangrove Information Center",
    short:
      "Pusat informasi utama kawasan. Memuat panel edukasi tentang jenis mangrove, biodiversitas, dan sejarah konservasi Wonorejo.",
    fact: "Kawasan ini merupakan bagian dari sabuk hijau PAMURBAYA seluas ±200 hektar.",
  },
  {
    id: "jogging-track",
    name: "Jogging Track Kayu",
    short:
      "Jalur kayu sepanjang ±1–2 km yang melintasi rimbun hutan bakau, ramah untuk keluarga dan pengamat burung.",
    fact: "Tercatat sekitar 143 spesies burung, 12 di antaranya berstatus dilindungi.",
  },
  {
    id: "dermaga",
    name: "Dermaga & Wisata Perahu",
    short:
      "Titik awal wisata perahu bambu menyusuri sungai Wonorejo hingga muara, rute sekitar 5 km.",
    fact: "Perjalanan perahu memakan waktu ±15 menit dan sering melewati kanopi Nypa fruticans.",
  },
  {
    id: "gazebo",
    name: "Gazebo Tepi Laut",
    short:
      "Rangkaian gazebo di ujung timur kawasan dengan pemandangan lepas ke Selat Madura. Populer untuk sunrise & birdwatching.",
    fact: "Kawasan ini juga habitat kera ekor panjang yang hidup di bawah kanopi bakau.",
  },
];

export const whyMangroveMatters = [
  {
    title: "Mencegah Abrasi & Intrusi Laut",
    body: "Akar mangrove menahan gelombang dan menahan air laut agar tidak merangsek ke daratan Surabaya Timur.",
    detail:
      "Sistem perakaran mangrove yang kompleks, terutama akar tunjang dan akar napas meredam energi gelombang hingga 70% sebelum mencapai daratan. Di Wonorejo, sabuk mangrove selebar ratusan meter berfungsi sebagai benteng alami yang melindungi permukiman pesisir dari abrasi, intrusi air laut ke akuifer tawar, dan dampak gelombang badai. Tanpa tutupan ini, garis pantai Surabaya Timur diprediksi akan mundur signifikan dalam satu dekade.",
  },
  {
    title: "Rumah Ratusan Spesies Burung",
    body: "Sekitar 143 spesies burung tercatat di kawasan ini, 12 di antaranya dilindungi, 30 tergolong langka.",
    detail:
      "Kawasan PAMURBAYA adalah jalur migrasi burung Asia-Australasia. Setiap musim migrasi, puluhan spesies transit di sini untuk beristirahat dan mencari makan di lumpur muara yang kaya invertebrata. Spesies dilindungi yang sering terlihat antara lain Bangau Bluwok (Mycteria cinerea), Trinil Pantai, dan Cekakak Sungai. Birdwatching terbaik dilakukan pagi hari antara pukul 06.00–08.00 dari gazebo tepi laut.",
  },
  {
    title: "Habitat Kera Ekor Panjang",
    body: "Populasi kera ekor panjang (long-tailed macaque) hidup bebas di bawah kanopi hutan bakau.",
    detail:
      "Macaca fascicularis atau kera ekor panjang adalah salah satu penghuni tetap kawasan Wonorejo. Mereka beradaptasi baik dengan lingkungan mangrove, mahir berenang dan sering terlihat mencari kepiting serta moluska di tepi sungai. Penting: jangan memberi makan kera. Pemberian makan buatan mengubah perilaku alami mereka, memicu agresivitas, dan membuat mereka ketergantungan pada manusia.",
  },
  {
    title: "Ekonomi Baru Warga Pesisir",
    body: "Nelayan dan petani tambak setempat kini menjadi pemandu, pengelola perahu, dan penjaga kawasan.",
    detail:
      "Model ekowisata Wonorejo menempatkan warga pesisir sebagai pelaku utama, bukan hanya penonton. Mantan nelayan kini menjalankan armada perahu wisata, kelompok ibu rumah tangga mengolah produk berbasis mangrove (sirup, keripik, batik motif mangrove), dan pemuda lokal terlatih sebagai pemandu edukasi. Pendekatan ini memastikan manfaat ekonomi tetap di komunitas sekaligus membangun insentif nyata untuk menjaga kelestarian kawasan.",
  },
];

export const communityProfiles = [
  {
    name: "Pak Slamet (ilustratif)",
    role: "Mantan petani tambak, kini pengemudi perahu wisata",
    quote:
      "Dulu saya hanya mengurus tambak. Sekarang saya mengantar tamu menyusuri sungai tambaknya tetap ada, tapi mangrovenya juga kami jaga.",
  },
  {
    name: "Bu Yuli (ilustratif)",
    role: "Anggota kelompok pengelola kuliner mangrove",
    quote:
      "Kami mencoba olahan dari buah mangrove dan hasil laut sekitar. Wisatawan datang, warga dapat pemasukan tambahan tanpa merusak hutannya.",
  },
];

/** Angka dampak ekonomi komunitas — ditampilkan di section Cerita */
export const communityStats = [
  { value: "40+", label: "Keluarga nelayan terlibat" },
  { value: "25", label: "Pemandu lokal terlatih" },
  { value: "3×", label: "Peningkatan pendapatan warga sejak 2018" },
];

/** Tips bertanggung jawab per wahana — ditampilkan di halaman Konfirmasi */
export const wahanaTips: Record<string, string[]> = {
  jogging: [
    "Tetap di jalur boardwalk kayu — jangan menginjak lumpur atau akar mangrove.",
    "Bawa teropong jika ingin birdwatching; pagi hari (06.00–08.00) adalah waktu terbaik.",
    "Hindari membuang sampah di celah papan — sampah mudah jatuh ke ekosistem air.",
  ],
  perahu: [
    "Kenakan pelampung keselamatan yang disediakan selama perjalanan.",
    "Jangan menyentuh atau memetik kanopi mangrove dari atas perahu.",
    "Perhatikan instruksi pemandu saat melewati area sarang burung.",
  ],
  edukasi: [
    "Koordinasi jumlah peserta dengan pengelola minimal H-3 kunjungan.",
    "Saat simulasi penanaman, ikuti metode yang diajarkan agar bibit tumbuh optimal.",
    "Ajak peserta mencatat pengamatan — ini bagian dari proses edukasi lingkungan.",
  ],
};

export const testimonials = [
  {
    name: "Rania (contoh)",
    from: "Sidoarjo",
    text: "Jalan kaki di jogging track-nya menenangkan sekali. Anak-anak juga senang lihat burung dan kepiting kecil di lumpur.",
  },
  {
    name: "Bagas (contoh)",
    from: "Surabaya",
    text: "Naik perahu ke muara jadi pengalaman baru. Pemandu ceritanya asyik dan sangat sabar menjawab pertanyaan.",
  },
  {
    name: "Nadia (contoh)",
    from: "Malang",
    text: "Tidak menyangka Surabaya punya paru-paru hijau seluas ini. Wajib mampir kalau ke kota.",
  },
];

export const doList = [
  "Buang sampah pada tempatnya, bawa pulang jika perlu.",
  "Tetap di jalur kayu / boardwalk yang sudah disediakan.",
  "Gunakan sepatu nyaman & pakaian tertutup ringan.",
  "Ikuti arahan pemandu dan rambu kawasan konservasi.",
];

export const dontList = [
  "Jangan memberi makan kera ekor panjang.",
  "Jangan mengambil tanaman, hewan, atau bagian mangrove.",
  "Jangan bersuara terlalu keras karena dapat mengganggu satwa liar.",
  "Jangan menggunakan drone tanpa izin pengelola.",
];

/** Angka karbon & ekologi — SDG 15 callout di Home */
export const carbonStats = [
  {
    value: "±3.000",
    unit: "ton CO₂/tahun",
    label: "Karbon tersimpan",
    detail:
      "Hutan mangrove menyimpan karbon 3–5× lebih banyak per hektar dibanding hutan tropis darat. Estimasi ±3.000 ton CO₂/tahun untuk kawasan Wonorejo mengacu pada rata-rata simpanan karbon mangrove Asia Tenggara (~15 ton C/ha/tahun). Karbon ini tersimpan di biomassa pohon dan sedimen lumpur yang terendam disebut 'blue carbon', salah satu mekanisme mitigasi iklim paling efisien di planet ini.",
  },
  {
    value: "200",
    unit: "hektar",
    label: "Hutan bakau terlindungi",
    detail:
      "±200 hektar kawasan PAMURBAYA (Pantai Timur Surabaya) merupakan salah satu tutupan mangrove urban terbesar di Indonesia. Kawasan ini terdiri dari beberapa zona: hutan konservasi inti, tambak silvofishery, dan jalur ekowisata. Setiap hektar yang terjaga berarti habitat yang utuh bagi ratusan spesies dan perlindungan nyata bagi permukiman pesisir Surabaya Timur.",
  },
  {
    value: "70%",
    unit: "energi gelombang",
    label: "Diredam akar mangrove",
    detail:
      "Riset menunjukkan sabuk mangrove lebar 100 meter mampu meredam 50–70% energi gelombang. Sistem akar tunjang dan akar napas menciptakan hambatan fisik yang memperlambat arus, mengurangi erosi sedimen, dan mencegah intrusi air laut ke akuifer tawar. Di Wonorejo, sabuk ini adalah infrastruktur alami yang melindungi ribuan warga pesisir tanpa biaya konstruksi.",
  },
];

/** Timeline konservasi kawasan */
export const conservationTimeline = [
  { year: "2010", event: "Vegetasi mangrove mulai menipis akibat alih fungsi lahan pesisir." },
  { year: "2015", event: "Program restorasi dimulai yaitu kolaborasi Pemkot Surabaya, warga, dan LSM." },
  { year: "2018", event: "Jogging track kayu dan dermaga perahu diresmikan. Kunjungan wisata meningkat." },
  { year: "2021", event: "Mangrove Information Center (MIC) dibuka sebagai pusat edukasi resmi kawasan." },
  { year: "2024", event: "±200 hektar terjaga, 40+ keluarga nelayan terlibat aktif sebagai pengelola wisata." },
];
