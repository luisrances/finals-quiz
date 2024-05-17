function showCart() {
    const cartList = document.getElementById("cartList");
    let hmtlText = "";
    cart.forEach((itemIndex) => {
        hmtlText = hmtlText + '<div id="product"><p>' + itemIndex.name + '</p><p>Price: '+ itemIndex.price + '</p></div>';
    });
    // let text = document.createTextNode("gumana");
    // cartList.appendChild(text);
    document.getElementById("cartList").innerHTML = hmtlText;


    // Show the cart popup
    document.getElementById("popup-container").style.display = "block";
}

let item1 = {
    image: "y1.png",
    name: "y1",
    price: "php 95.00"
};
let item2 = {
    image: "y2.png",
    name: "y2",
    price: "php 139.00"
};
let item3 = {
    image: "y3.png",
    name: "y3",
    price: "php 129.00"
};
let item4 = {
    image: "y4.png",
    name: "y4",
    price: "php 129.00"
};
let item5 = {
    image: "y5.png",
    name: "y5",
    price: "php 129.00"
}
;let item6 = {
    image: "y6.png",
    name: "y6",
    price: "php 129.00"
};
let item7 = {
    image: "y7.png",
    name: "y7",
    price: "php 235.00"
};
let item8 = {
    image: "y8.png",
    name: "y8",
    price: "php 229.00"
};
let item9 = {
    image: "y9.png",
    name: "y9",
    price: "php 175.00"
};
let item10 = {
    image: "y10.png",
    name: "y10",
    price: "php 125.00"
};
let item11 = {
    image: "y11.png",
    name: "y11",
    price: "php 135.00"
};
let item12 = {
    image: "y12.png",
    name: "y12",
    price: "php 129.00"
};

function showItem(item) {
    document.getElementById("popup-container").style.display = "block";
    document.getElementById("product_img").src = item.image;
    document.getElementById("product_name").innerHTML = item.name;
    document.getElementById("product_price").innerHTML = item.price;
    // document.getElementById("product_img").src = item;
}

function closeItem() {
    document.getElementById("popup-container").style.display = "none";
}