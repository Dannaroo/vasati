
// //when header jumbotron down button is cliked. smooth scroll past the jumbotron to the navbar.
$("#downButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#navbarNav").offset().top
    }, 2000);
});

$("#homeButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home").offset().top - '85'
    }, 2000);
});

$("#introButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#intro").offset().top - '85'
    }, 2000);
});

$("#candlesButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#candles").offset().top - '85'
    }, 2000);
});

$("#soapsButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#soaps").offset().top - '85'
    }, 2000);
});

$("#bathBombsButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#bathBombs").offset().top - '85'
    }, 2000);
});

$("#contactUsButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contactUs").offset().top - '85'
    }, 2000);
});

$("#featuredProductsButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#featured").offset().top - '85'
    }, 2000);
});

//End smooth scrolling jQuery

const productPageLinks = document.querySelectorAll('.product-page-link');
const productPageDiv = document.querySelector('#productPageDiv');
const productPageH2 = document.querySelector('#productPageH2');
const productPagePrice = document.querySelector('#productPagePrice');
const productPageP = document.querySelector('#productPageP');
const productPageImg = document.querySelector('#productPageImg');
const nav = document.querySelector('nav');
// let product = {
//   name : 'product name',
//   price : 'product price',
//   description : 'product description',
//   imageSource : 'product image source',
//   imageAlt : 'product image alt'
//
// }

//adds clicked product preview info to product page object.
function buildProductObject(productPageLink) {
  //for values that are fetched the same between productPageLinks, fetch those.
  const productName = productPageLink.lastElementChild.firstElementChild;
  //check if we are dealing with a feature card or a product-preview element by comparing the last element childs children length and acting accordingly.

  //non-feature
  if(productPageLink.lastElementChild.children.length === 3) {
    const productPrice = productName.nextElementSibling;
    const productDescription = productPrice.nextElementSibling;
    const productImage = productPageLink.firstElementChild.firstElementChild;
    let product = {
      name : productName.textContent,
      price : productPrice.innerHTML,
      description : productDescription.textContent,
      imageSource : productImage.getAttribute('src'),
      imageAlt : productImage.getAttribute('alt')
    }
      return product
    //feature
  } else if(productPageLink.lastElementChild.children.length === 2) {
    // compare the title heading of the card and input the price of that headings section.
    const productPrice = document.createElement('span');
    if(productPageLink.previousElementSibling.textContent === "Candles") {
      productPrice.innerHTML = "Price: $3.50 each";
    } else if(productPageLink.previousElementSibling.textContent === "Soaps") {
      productPrice.innerHTML = "Price:<small> $1/mini soap | $3.50/bag of 4 mini’s | $5/bar</small>"
    } else if(productPageLink.previousElementSibling.textContent === "Bath Bombs") {
      productPrice.innerHTML = "Price: $4.00/bomb";
    }
    console.log(productName);
    console.log(productName.nextElementSibling);
    const productDescription = productName.nextElementSibling;
    const productImage = productPageLink.firstElementChild;
    let product = {
      name : productName.textContent,
      price : productPrice.innerHTML,
      description : productDescription.textContent,
      imageSource : productImage.getAttribute('src'),
      imageAlt : productImage.getAttribute('alt')
    }
      return product

  }




}




// highlight product previews to indicate they can be cliked. go to product page on click.
for(let i = 0; i < productPageLinks.length; i +=1) {
  productPageLinks[i].addEventListener('mouseover', () => {
    productPageLinks[i].style.backgroundColor = "gold";
  });

  productPageLinks[i].addEventListener('mouseout', () => {
    productPageLinks[i].style.backgroundColor = "white";
  });

// pass the clicked product preview as a string in URL to productpage.html
  productPageLinks[i].addEventListener('click', () => {
    console.log(buildProductObject(productPageLinks[i]));
    window.location.href = 'product-page.html' + '#' + JSON.stringify(buildProductObject(productPageLinks[i]));
  });
}

//

window.onload = function removeNavSticky() {
  nav.className = "navbar-light navbar-expand-lg"
}

// navigating to home from sub pages puts the sticky navbar in the way. Fix the problem by only shoiwng the navbar after the window is scrolled.
window.addEventListener('scroll', () => {
  console.log('scroll');
  if (window.matchMedia("(min-width: 992px)").matches) {
    nav.className = "sticky-top navbar-light navbar-expand-lg"
  }
});
