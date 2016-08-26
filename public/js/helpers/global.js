/*
$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});
*/
var $container = $('.masonry-container');

$container.imagesLoaded( function () {
  $container.masonry({
    columnWidth: '.item',
    itemSelector: '.item'
  });   
});

function selectLanguage(select) {
	if (select.selectedIndex.value !== '') {
		var urlPart = window.location.pathname.split('/')[1];
		var selected = select.options[select.selectedIndex].text;

		if (urlPart.length === 2) {
			window.location.href = window.location.pathname.replace(urlPart, selected);
		} else {
			window.location.href = '/' + selected + '/' + window.location.pathname;
		}
	}
}

function searchPortfolio(searchForm) {
	window.location.href = searchForm.form.category.value + '/search/' + searchForm.form.search.value;
}

function goBack() {
  window.history.back();
}
