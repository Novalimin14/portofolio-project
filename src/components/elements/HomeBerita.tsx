import React from 'react';
import Image from 'next/image';
import styles from '../styles/style.module.css';

const newsData = [
    {
        date: "November 12, 2024",
        title: "Pengalaman Internasional Santri Assalaam: Program Japan Overseas Study (JOS 6) di Jepang",
        imageUrl: "/sekolah.jpg",
    },
    {
        date: "November 5, 2024",
        title: "Santriwati Assalaam Raih 5 Medali dalam Kejuaraan Tapak Suci",
        imageUrl: "/sekolah.jpg",
    },
    {
        date: "November 5, 2024",
        title: "Santri Assalaam Belajar Diplomasi dan Hubungan Internasional di Konsulat RI Songkhla, Thailand",
        imageUrl: "/sekolah.jpg",
    },
    {
        date: "November 5, 2024",
        title: "Ponpes Assalaam Perkuat Pemahaman Mental Health Santri dengan Seminar “Menjaga Kesehatan Mental untuk Meraih Prestasi”",
        imageUrl: "/sekolah.jpg",
    },
    {
        date: "November 4, 2024",
        title: "Berdedikasi, Pimpinan PPMI Assalaam Berikan Apresiasi pada Pengabdian Assalaam",
        imageUrl: "/sekolah.jpg",
    },
];

// Fungsi untuk mengonversi string tanggal menjadi objek Date
const parseDate = (dateString: string) => {
    const [month, day, year] = dateString.split(" ");
    const months = {
        January: 0, February: 1, March: 2, April: 3,
        May: 4, June: 5, July: 6, August: 7,
        September: 8, October: 9, November: 10, December: 11
    };
    return new Date(parseInt(year), months[month], parseInt(day));
};

// Mengurutkan data berita berdasarkan tanggal
const sortedNewsData = newsData.slice().sort((a, b) => parseDate(b.date) - parseDate(a.date));
const mainNews = sortedNewsData[0];
const sideNews = sortedNewsData.slice(1, 3);

const HomeBerita = () => {
    return (
        <div className={styles.newsContainer}>
            <h2>Berita Terkini</h2>
            <a href="/berita" className={styles.seeAll}>Seluruh Berita</a>

            <div className={styles.mainNews}>
                <Image src={mainNews.imageUrl} alt="Main News" width={600} height={400} />
                <div className={styles.mainNewsContent}>
                    <p className={styles.date}>{mainNews.date}</p>
                    <a href="#" style={{ color: "#333", textDecoration: "none" }}>{mainNews.title}</a>
                </div>
            </div>

            <div className={styles.sideNews}>
                {sideNews.map((news, index) => (
                    <div key={index} className={styles.sideNewsItem}>
                        <Image src={news.imageUrl} alt="Side News" width={300} height={200} />
                        <div className={styles.sideNewsContent}>
                            <p className={styles.date}>{news.date}</p>
                            <a href="#">{news.title}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeBerita;
