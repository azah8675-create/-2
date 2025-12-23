
let total = 0;

function login() {
  const user = document.getElementById("username").value;
  if (user === "") {
    alert("من فضلك أدخل اسم المستخدم");
  } else {
    document.getElementById("welcome").textContent = `أهلاً ${user} 👋`;
  }
}

function addToCart(name, price) {
  const cart = document.getElementById("cartItems");
  const item = document.createElement("li");
  item.textContent = `${name} - ${price} جنيه`;
  cart.appendChild(item);

  total += price;
  document.getElementById("total").textContent = `الإجمالي: ${total} جنيه`;
}

function applyCoupon() {
  const code = document.getElementById("coupon").value;
  if (code === "ISLAM10") {
    total = total * 0.9;
    document.getElementById("total").textContent = `الإجمالي بعد الخصم: ${total} جنيه`;
    alert("تم تطبيق الخصم بنجاح");
  } else {
    alert("كود خصم غير صحيح");
  }
}

const productsData = {
  prayer: [
    { name: "سجادة صلاة تركي", price: 180, img: "images/Turkish prayer rug.jpg" },
    { name: "سجادة مبطنة فاخرة", price: 250, img: "images/Padded prayer rug.jpg" },
    { name: "سجادة أطفال", price: 120, img: "images/Children's prayer rug.jpg" }
  ],
  quran: [
    { name: "مصحف مجمع الملك فهد", price: 150, img: "images/Compiled Quran.jpg" },
    { name: "مصحف حجم الجيب", price: 90, img: "images/Pocket Quran.jpg" },
    { name: "مصحف تفسير", price: 220, img: "images/Quran with interpretation.jpg" }
  ],
  clothes: [
    { name: "جلابية رجالي", price: 350, img: "images/Mens' abaya.jpg" },
    { name: "عباية حريمي", price: 420, img: "images/Women's abaya.jpg" },
    { name: "إسدال صلاة", price: 280, img: "images/Prayer.jpg" }
  ],
  accessories: [
    { name: "سبحة إلكترونية", price: 70, img: "images/Electronic prayer beads.jpg" },
    { name: "سبحة خشب", price: 60, img: "images/Wooden rosary.jpg" },
    { name: "بوكس هدية إسلامي", price: 200, img: "images/Islamic gift box.jpg" },
    { name: "بخور ومسك", price: 110, img: "images/Islamic musk.jpg" }
  ]
};

function showProducts(category) {
  const container = document.getElementById("products");
  const title = document.getElementById("sectionTitle");
  container.innerHTML = "";
  title.textContent = "المنتجات";

  productsData[category].forEach(item => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <div class="rating">⭐⭐⭐⭐⭐</div>
      <p>${item.price} جنيه</p>
      <button onclick="addToCart('${item.name}', ${item.price})">
        <i class="fa-solid fa-cart-plus"></i> أضف للسلة
      </button>
    `;
    container.appendChild(div);
  });
}

function showPaymentInfo() {
  const method = document.getElementById("paymentMethod").value;
  const info = document.getElementById("paymentInfo");

  if (method === "cod") {
    info.textContent = `يرجى تحويل 25% ديبوزت قبل الاستلام`;
  } else if (method === "bank") {
    info.textContent = `رقم التحويل البنكي: 01224604223 (insta bay)`;
  } else if (method === "wallet") {
    info.textContent = `رقم فودافون كاش: 01070213072`;
  } else {
    info.textContent = "";
  }
}

function checkout(event) {
  event.preventDefault();

  if (total === 0) {
    alert("السلة فارغة");
    return;
  }

  const method = document.getElementById("paymentMethod").value;
  const screenshot = document.getElementById("paymentScreenshot").files[0];

  if (!method) {
    alert("من فضلك اختر طريقة الدفع");
    return;
  }

  if (!screenshot) {
    alert("يجب إرفاق صورة الدفع لإتمام الطلب");
    return;
  }

  alert(`✅ تم تأكيد الطلب بنجاح\nسيتم التواصل معك قريبًا`);
  document.getElementById("cartItems").innerHTML = "";
  total = 0;
  document.getElementById("total").textContent = "الإجمالي: 0 جنيه";
  document.getElementById("paymentScreenshot").value = "";
  document.getElementById("paymentInfo").textContent = "";
}