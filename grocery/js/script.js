let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =() =>
{
	    searchForm.classlist.toggle('active');
		shoppingCart.classlist.remove('active');
		loginForm.classlist.remove('active');
	    navbar.classlist.remove('active');



}


let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick =() =>
{
	shoppingCart.classlist.toggle('active');
	searchForm.classlist.remove('active');
	loginForm.classlist.remove('active');
	    navbar.classlist.remove('active');
}


let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick =() =>
{
	loginForm.classlist.toggle('active');
	shoppingCart.classlist.remove('active');
	searchForm.classlist.remove('active');
	navbar.classlist.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =() =>
{
	navbar.classlist.toggle('active');
	loginForm.classlist.remove('active');
	shoppingCart.classlist.remove('active');
	searchForm.classlist.remove('active');
}


window.onscroll =() =>
{
		searchForm.classlist.remove('active');
		shoppingCart.classlist.remove('active');
		loginForm.classlist.remove('active');
	    navbar.classlist.remove('active');
}





var swipper = new swiper(".product-slider",{
	loop:true,
	spacebetween:20,

	autoplay:{
		delay:7500,
		disableOnInteraction: false,
	},
	
	breakpoints: {
		0:{
			slidesPreView:1,
					},
		768:{
			slidePreView:2,
			
		},
		1020:{
			slidePreView:3,
					},
	},
});



var swiper = new swiper(".review-slider",{
	loop:true,
	spacebetween:20,

	autoplay:{
		delay:7500,
		disableOnInteraction: false,
	},
	
	breakpoints: {
		0:{
			slidesPreView:1,
					},
		768:{
			slidePreView:2,
			
		},
		1020:{
			slidePreView:3,
					},
	},
});