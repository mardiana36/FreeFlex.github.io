$(document).ready(function () {
  function drop(target, target2) {
    $(target).click(function () {
      if ($(target2).css("display") == "none") {
        $(target2).css("display", "block");
      } else {
        $(target2).css("display", "none");
      }
    });
    $(document).click(function (event) {
      if (!$(event.target).closest(target).length) {
        $(target2).css("display", "none");
      }
    });
  }
  drop("#daftar", "#drop-daftar");
  drop("#daftar-mobile", "#drop-daftar-mobile");

  function sembunyikan(desktop, mobile) {
    cekUkuranLayar();

    $(window).resize(function () {
      cekUkuranLayar();
    });

    function cekUkuranLayar() {
      if ($(window).width() < 1197) {
        $(desktop).hide();
        $(mobile).show();
      } else {
        $(desktop).show();
        $(mobile).hide();
      }
    }
  }
  sembunyikan(".none", ".mobile");

  $("#close-menu").hide();
  $(".drop-mobile").hide();
  $("#menu").click(function () {
    $(".drop-mobile").show(function () {
      $("#menu").hide();
      $("#close-menu").show();
    });
  });
  $("#close-menu").click(function () {
    $(".drop-mobile").hide(function () {
      $("#close-menu").hide();
      $("#menu").show();
    });
  });

  function typing() {
    const sentences = [
      "Graphics & Design",
      "Web & Pemrograman",
      "Digital Marketing",
      "Video, Fotografi & Audio",
      "Penulisan & Penerjemahan",
    ];

    const textElement = $("#type");
    const cursorElement = $("<span>|</span>").addClass("blinking");

    textElement.append(cursorElement);
    let sentenceIndex = 0;
    let sentenceCharIndex = 0;
    let typing = true;
    
    function type() {
      const currentSentence = sentences[sentenceIndex];
      if (sentenceIndex % 2 !== 0) {
        $(".header").css({
          "background": "#11B1E3 url('Sang Putu Mardiana_Bahan/motifacak.png')no-repeat",
          "background-size": "50% 150%",
          "background-position": "center left",
          "background-blend-mode": "soft-light",
          "transition": "1s",
        });
      } else {
        $(".header").css({
          "background": '#0B5268 url("Sang Putu Mardiana_Bahan/motifacak.png")no-repeat',
          "background-size": "50% 150%",
          "background-position": "center left",
          "background-blend-mode": "soft-light",
          "transition": "1s",
        });
      }

      if (sentenceCharIndex <= currentSentence.length && typing) {
        textElement.text(currentSentence.substring(0, sentenceCharIndex));
        textElement.append(cursorElement);
        sentenceCharIndex++;

        setTimeout(type, 100);
      } else if (sentenceCharIndex > currentSentence.length) {
        sentenceCharIndex = 0;
        typing = true;
        sentenceIndex = (sentenceIndex + 1) % sentences.length;
        setTimeout(type, 1000);
      } else {
        textElement.text(currentSentence.substring(0, sentenceCharIndex - 1));
        typing = false;
        setTimeout(type, 500);
      }
    }

    type();
  }
  typing();

  function scroll() {
     let scrollPosition = 0;
     let cardWidth = $(".divCard").outerWidth(true) + 10;
    let cardsInView = Math.floor($(window).width() / cardWidth);
    if ($(window).width() > 1440) {
      cardsInView = Math.floor(1440 / cardWidth);
    }
     let totalCards = $(".divCard").length;
     let max = (totalCards - cardsInView) * cardWidth;
    $(window).resize(function () {
      scrollPosition = 0;
      $(".divCard").css("transform", "translateX(-" + scrollPosition + "px)");
      cardWidth = $(".divCard").outerWidth(true) + 10;
      cardsInView = Math.floor($(window).width() / cardWidth);
      if ($(window).width() > 1440) {
        cardsInView = Math.floor(1440 / cardWidth);
      }
      totalCards = $(".divCard").length;
      max = (totalCards - cardsInView) * cardWidth;
    });
  
    $("#left-button").click(function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        if (scrollPosition < 0) {
          scrollPosition = 0;
        }
        $(".divCard").css(
          "transform",
          "translateX(-" + scrollPosition + "px)"
        );
      }
    });
  
    $("#right-button").click(function () {
      if (scrollPosition < max) {
        scrollPosition += cardWidth;
        if (scrollPosition > max) {
          scrollPosition = max;
        }
        $(".divCard").css(
          "transform",
          "translateX(-" + scrollPosition + "px)"
        );
      }
    });
  }
  
  scroll();
  
  // login && lupa password
  function showPassword(id1, id2) {
    $(id1).click(function () {
      if ($(id2).attr('type') == 'password') {
        $(id2).attr('type', 'text')
        $(id1).attr('class', 'bx bxs-show login-showPassword')
      } else {
        $(id2).attr('type', 'password')
        $(id1).attr('class', 'bx bxs-hide login-showPassword')
      }
    });
  }
  showPassword('#showPassword', '#password-login');
  showPassword('#showPassword2', '#password-login2');
  showPassword('#daftar-showPw', '#daftar-password');

  function newPassword(id1, idf1, idf2) {
    $(idf2).hide();
  
    // Tangkap event submit formulir
    $(idf1).submit(function (event) {
      event.preventDefault(); // Mencegah tindakan bawaan dari submit form
  
      // Tampilkan elemen idf2 dan sembunyikan idf1
      $(idf2).show();
      $(idf1).hide();
    });
  
    // Tangkap event click tombol
    $(id1).click(function () {
      // Trigger event submit formulir
      $('#"email-login').attr('value' != "", function () {
        $(idf1).submit();
      })
    });
  }
  
  newPassword('#next-lupaPw', '#form-lupaPw1', '#form-lupaPw2');
  function setKodeNegara(id1, id2) {
    $(id2).val($(id1).val());
    $(id1).change(function () {
      let option = $(this).find("option:selected").val();
      $(id2).val(option);
    });
  }
  setKodeNegara("#daftar-kodeNegara", "#daftar-telepon");

  function changeColor(id1, id2) {
    $(id1).focus(function () {
      $(id2).css('color', '#FF7A00');
    })
    $(id1).blur(function () {
      $(id2).css('color', '#656464');
    })
  }
  changeColor('#subkatagoriJob', '.p-subkatagori');

  function hargaJob(id1, id2, idr1, idr2, idh1, idh2, idb1) {
    $(idb1).click(function (event) {
      if (!$(idr1).prop('checked') && !$(idr2).prop('checked')) {
        alert('Anda belum memilih "Bagaimana Anda ingin membayar?"!');
        event.preventDefault();
      } 
    })
    $(id1).click(function () {
      $(idr1).prop('checked', true);
      if ( $(idr1).prop('checked')==true) {
        $(id1).css('border', ' 1px solid #FF7A00');
        $(id2).css('border', ' 1px solid #b7b7b7');
        $(idh1).show();
        $(idh2).val('');
        $('#labelHarga').addClass('checklist');
      } else {
        $('#labelHarga').removeClass('checklist');
      }
    });
    $(id2).click(function () {
      $(idr2).prop('checked', true);
      if ( $(idr2).prop('checked')==true) {
        $(id2).css('border', ' 1px solid #FF7A00');
        $(id1).css('border', ' 1px solid #b7b7b7');
        $(idh1).hide();
        $(idh2).val('harga freelancer');
        $('#labelHarga').addClass('checklist');
      } else {
        $('#labelHarga').removeClass('checklist');
      }
    });
  }
  hargaJob('#hargaSendiri', '#hargaFreelancer', '#radioHarga1', '#radioHarga2', '#divHargaJob', '#hargaJob', '#buttonPasangJob');

  function katagoriJob(ids1, ids2) {
    $(ids2 + ' option').hide();
    $(ids1).change(function () { 
      let option = $(this).val();
      $(ids2 + ' option').hide();
      $(ids2 + ' option').each(function () {
        if ($(this).val().charAt(0) == option) {
          $(this).show();
        } else if ($(this).val().charAt(0) != option) {
          $(ids2).val('');
        }
      });
    });
  }
  katagoriJob('#katagoriJob', '#subkatagoriJob');

  function checklist(idi1) {
    $(idi1).on('input', function () {
        let inputValue = $(this).val();
        let label = $('label[for="' + this.id + '"]'); // Mendapatkan label yang terkait dengan input
        if (inputValue !== '') {
            // Jika tidak kosong, tambahkan bintang ke label
            label.addClass('checklist');
        } else {
            // Jika kosong, hapus bintang dari label
            label.removeClass('checklist');
        }
    });
}
  checklist('#formPasangJob input')
  checklist('#formPasangJob textarea')
  checklist('#formPasangJob select')

  function dropKatagori(target1,target2) {
    $(target1).click(function () {
      let ulSubkatagori = $(this).closest('div').find(target2);
      let icon = $(this).closest('div').find('span');
      if (ulSubkatagori.is(':visible')) {
        ulSubkatagori.hide();
        icon.css('transform', 'rotateX(0deg)');
      } else {
        $(target2).hide(function () {
          let icon2 = $(this).closest('div').find('span');
          if ($(this).is(':visible')) {
            icon2.css('transform', 'rotateX(200deg)');
          } else {
            icon2.css('transform', 'rotateX(0deg)');
          }
        });
        ulSubkatagori.show();
        icon.css('transform', 'rotateX(200deg)');
      }
    });
  }
  dropKatagori(".katagori-lj,span", ".ulSubkatagori-lj");

  function dropSortir(target1,target2) {
    $(target1).click(function () {
      let ulSubkatagori = $(this).closest('div').find(target2);
      ulSubkatagori.toggle();
      let icon = $(this).closest('div').find('.iconDrop');
      if (ulSubkatagori.is(':visible')) {
        icon.css('transform', 'rotateX(200deg)');
        $(target2+' li a').click(function (event) {
          event.preventDefault();
          $('.dropSortir-lj').text('');
          let text = $(this).text();
          $('.dropSortir-lj').text(text);
        })
      } else {
        icon.css('transform', 'rotateX(0deg)');
      }
    });
    $(document).click(function (event) {
      if (!$(event.target).closest(target1).length) {
        $(target2).hide();
        if ($(target2).hide()) {
          $('.iconDrop').css('transform', 'rotateX(0deg)');
        }
      } 
    });
  }
  dropSortir('.dropSortir-lj, .iconDrop', '.ulSortir-lj');

  function addClassLj(id1,className) {
    $(id1).click(function (event) {
      event.preventDefault();
      $(id1).removeClass(className);
      $(this).addClass(className);
    });
  }
  addClassLj('.nomor-lj', 'aktifNo-lj');

});
