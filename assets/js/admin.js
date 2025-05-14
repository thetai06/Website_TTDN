function Greeting(props) {
    return <h1>Chào, {props.name}!</h1>;
}

export default Greeting;

document.addEventListener('DOMContentLoaded', function () {
    const elem = document.querySelector('.carousel');
    const flkty = new Flickity(elem, {
        cellAlign: 'center', // Căn giữa các slide
        contain: true, // Giữ các slide trong container
        wrapAround: true, // Cho phép lặp lại slide
        autoPlay: 5000, // Tự động chuyển slide mỗi 5 giây
        pauseAutoPlayOnHover: true, // Dừng autoplay khi hover
        prevNextButtons: true, // Hiển thị nút điều hướng
        pageDots: true // Hiển thị các chấm điều hướng
    });
});