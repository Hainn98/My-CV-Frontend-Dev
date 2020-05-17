$(document).ready(function() {
	for (let i = 0; i < 60; i++) {
		$("#course__tabs ul").append(`
      <li><a class='course__tabs__label course__tabs__label--dashboard' href='#course_${i + 1}'></a></li>
    `);
		$("#course__tabs").append(`
      <div class='course__tabs__lession' id='course_${i + 1}'>
        <h3 class='lession__title'>Unit ${i + 1}/Lession 3 <span> What's your name ?</span></h3>
        <div class="lession_level">Câp độ <span> Nâng Cao</span></div>
        <div class='flex__start__start flex__column lession__scores'>          
          <div class="lession__item--full lession__item lession__text">Điểm số</div>
          <div class="lession__item--full lession__item lession__primary">Điểm trung bình <span>85</span></div>
          <div class="lession__item lession__primary">Nghe  <span>98</span></div>
          <div class="lession__item lession__danger">Nói <span>96</span></div>
          <div class="lession__item lession__warning">Đọc <span>88</span></div>
          <div class="lession__item lession__primary">Viết <span>97</span></div>
        </div>
        <div class="lession__date"><span class="m-r-10"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
<path d="M16.486 2.66675C9.12602 2.66675 3.16602 8.64008 3.16602 16.0001C3.16602 23.3601 9.12602 29.3334 16.486 29.3334C23.8594 29.3334 29.8327 23.3601 29.8327 16.0001C29.8327 8.64008 23.8594 2.66675 16.486 2.66675ZM16.4993 26.6667C10.606 26.6667 5.83268 21.8934 5.83268 16.0001C5.83268 10.1067 10.606 5.33341 16.4993 5.33341C22.3927 5.33341 27.166 10.1067 27.166 16.0001C27.166 21.8934 22.3927 26.6667 16.4993 26.6667Z" fill="black" fill-opacity="0.5"/>
<path d="M17.166 9.3335H15.166V17.3335L22.166 21.5335L23.166 19.8935L17.166 16.3335V9.3335Z" fill="black" fill-opacity="0.5"/>
</svg></span>Ngày làm <br> 1/2/2020 <br>02:31:29 </div>
      </div>
    `);
  }
  $('#course__tabs').tabs();
});
