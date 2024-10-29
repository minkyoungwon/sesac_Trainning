<script>
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-btn');

// 모달 열기
openModalBtn.onclick = () => {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
};

// 모달 닫기
closeModalBtn.onclick = () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
};

// 모달 외부 클릭 시 닫기
modalOverlay.onclick = () = function {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
};
</script>