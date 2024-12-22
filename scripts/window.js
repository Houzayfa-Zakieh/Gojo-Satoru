window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('scroll', window.scrollY > 50);
});
var sider = document.getElementById('sider');
var btnSider = document.getElementById('btn-sider');
btnSider.onclick = () => {
        btnSider.classList.toggle('clicked');
        sider.classList.toggle('show');
    }
    

    document.onclick = (event) => {
        if (event.target.id !== "btn-sider" && event.target.id !== "sider") {
            if(btnSider.classList.contains('clicked') && sider.classList.contains('show')){
            btnSider.classList.remove('clicked');
            sider.classList.remove('show');
        }
    
        }
    }

    // function hide() {
//     document.getElementById('loading').classList.add('hide');
// }
// setTimeout(hide , 1000);

setTimeout(function () {
    document.getElementById('loading').classList.add('hide');
}
    , 3000)