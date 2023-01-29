export default function getDate() {
    let dt = new Date();

    return `${("Tarih", dt.getDate()).toString().padStart(2, '0')}.${(dt.getMonth() + 1).toString().padStart(2, '0')}.${dt.getFullYear().toString().padStart(4, '0')}`
}