// Hàm để hiển thị hoặc ẩn phần nội dung được chọn
function showSection(sectionId) {
    var currentSection = document.querySelector('.section.active');
    var contentBox = document.querySelector('.content'); // Lấy khối content
    var buttons = document.querySelectorAll('.menu button'); // Lấy tất cả các button

    // Kiểm tra nút hiện tại đang được nhấn
    var currentButton = document.querySelector('.menu button.selected');

    // Nếu phần đã mở là phần người dùng nhấn vào, thì ẩn nó đi
    if (currentSection && currentSection.id === sectionId) {
        currentSection.classList.remove('active');
        contentBox.style.display = 'none'; // Ẩn khối content nếu không còn phần nào hiển thị

        if (currentButton) {
            currentButton.classList.remove('selected'); // Bỏ màu của nút
        }
    } else {
        // Nếu phần đang hiển thị khác, ẩn phần đó đi
        if (currentSection) {
            currentSection.classList.remove('active');
        }

        // Hiển thị phần được chọn
        var sectionToShow = document.getElementById(sectionId);
        sectionToShow.classList.add('active');
        contentBox.style.display = 'block'; // Hiển thị khối content khi có phần được chọn

        // Xóa lớp 'selected' từ nút hiện tại
        buttons.forEach(function(button) {
            button.classList.remove('selected');
        });

        // Thêm lớp 'selected' vào nút vừa nhấn
        var buttonToSelect = document.querySelector(`.menu button[onclick="showSection('${sectionId}')"]`);
        buttonToSelect.classList.add('selected');
    }
}