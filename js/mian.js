document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-btn');
    const navbar = document.getElementById('navbar');

    menuButton.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");

  
    const scrollThreshold = 200; 

  
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > scrollThreshold) {
            
            header.classList.add("fixed-header");
        } else {
           
            header.classList.remove("fixed-header");
        }
    });
});


$(document).ready(function() {
    var images = [
        "url(images/brands.png)",
        "url(images/عطر-سوفاج.jpg)",
        "url(images/Slider.png)" ,
       
       
    ];
    
    var currentImageIndex = 0;
    var imageElement = $(".slider-img");

    function changeImage() {
       
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.css("background-image", images[currentImageIndex]);

       
         imageElement.transition({ opacity: 0 }, 500, function() {
            imageElement.css("background-image", "url(" + newImageSrc + ")");
            imageElement.transition({ opacity: 1 }, 500);
        });
    }

    
     var interval = setInterval(changeImage, 3000);

     imageElement.on("click", function() {
         clearInterval(interval);
     });
});

document.addEventListener("DOMContentLoaded", function() {
    var addCommentButton = document.getElementById("addCommentButton");
    var commentTextarea = document.getElementById("commentTextarea");

    addCommentButton.addEventListener("click", function() {
        var commentText = commentTextarea.value;

        if (commentText.trim() !== "") {
            alert("تمت إضافة التعليق: " + commentText);
            
        } else {
            alert("يرجى إدخال تعليق قبل النقر على 'اضف تعليق'");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
   
    var addAddressButton = document.querySelector(".box-title");
  
    
    var currentAddress = document.querySelector(".box-location");
  
   
    var editButton = currentAddress.querySelector(".btn-editing");
  
   
    addAddressButton.addEventListener("click", function() {
     
      var newAddressInput = document.createElement("div");
      newAddressInput.innerHTML = '<input type="text" id="new-address" placeholder="العنوان الجديد">' +
        '<button type="button" class="btn btn-success btn-save">حفظ</button>' +
        '<button type="button" class="btn btn-danger btn-cancel">إلغاء</button>';
  
     
      currentAddress.parentNode.replaceChild(newAddressInput, currentAddress);
  
     
      var saveButton = newAddressInput.querySelector(".btn-save");
  
     
      var cancelButton = newAddressInput.querySelector(".btn-cancel");
  
     
      saveButton.addEventListener("click", function() {
        var newAddress = document.getElementById("new-address").value;
     
        currentAddress.querySelector("h3").textContent = newAddress;
    
        newAddressInput.parentNode.replaceChild(currentAddress, newAddressInput);
      });
  
   
      cancelButton.addEventListener("click", function() {
       
        newAddressInput.parentNode.replaceChild(currentAddress, newAddressInput);
      });
    });
  });

  var catAndActs = {};
catAndActs['السعودية'] = ['جدة', 'الرياض', 'مكة المدينة', 'الدمام', 'Other'];
catAndActs['فلسطين'] = ['قطاع-غزة', 'الضفة الغربية', 'الخليل', 'Other'];
catAndActs['مصر'] = ['القاهرة', 'الجيزة', 'الاسكندرية ', 'اسوان', 'شرم الشيخ', 'Other'];
catAndActs['لبنان'] = ['بيروت', 'طرابلس', 'صيدا', 'زحلة', 'جونية', 'بعلبك', 'صور', 'نبطية', 'Other'];
catAndActs['الامارات العربية'] = ['Other'];
catAndActs['الاردن'] = ['ابو ظبي'];


function ChangecatList() {
    var catList = document.getElementById("validationCustom03");
    var actList = document.getElementById("validationCustom04");
    var selCat = catList.options[catList.selectedIndex].value;
    console.log("Selected Category: " + selCat); // تحقق من قيمة selCat في وحدة التحكم بالمستعرض
    while (actList.options.length) {
        actList.remove(0);
    }
    var cats = catAndActs[selCat];
    if (cats) {
        var i;
        for (i = 0; i < cats.length; i++) {
            var cat = new Option(cats[i], i);
            actList.options.add(cat);
        };
    };
};