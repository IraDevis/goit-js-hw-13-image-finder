import './sass/main.scss';
import cardTmpl from './templates/cardTmpl.hbs';
import PicApiService from './js/apiService';
import getRefs from './js/get-refs';

const refs = getRefs();
const picApiService = new PicApiService();

refs.searchForm.addEventListener('submit', onSearch)
refs.loadBtn.addEventListener('click', onLoadMore)

function onSearch(e) {
    e.preventDefault();
    
    picApiService.query = e.currentTarget.elements.query.value;
    picApiService.resetPage();
    picApiService.fetchPic().then(hits => {
        clearGallery();
        renderPicMarkup(hits);
    }).catch(error => console.log(error));
}

function onLoadMore() {
    picApiService.fetchPic().then(renderPicMarkup);
}

function renderPicMarkup(hits) {
    refs.gallery.insertAdjacentHTML('beforeend', cardTmpl(hits));
        refs.gallery.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
}

function clearGallery() {
    refs.gallery.innerHTML = '';
}