function formatPDF() {
    window.print();
}

function changeNotifications(el) {
    let img = el;
    console.log(el.src)
    let source = el.src.split('images/')[1];
    if (source === 'notice.svg') {
        img.src = '../images/noticeOn.svg'
    } else if (source === 'noticeOn.svg') {
        img.src = '../images/noticeOff.svg'
    } else {
        img.src = '../images/notice.svg'
    }
}