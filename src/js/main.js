import modal from './modules/modal';
import tabs from './modules/tabs';
import './slider';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import bigImg from './modules/bigImg';

window.addEventListener('DOMContentLoaded', () => {

    const modalState = {};
    changeModalState(modalState);

    modal('.popup_engineer_btn', '.popup_engineer');
    modal('.phone_link', '.popup');
    modal('.popup_calc_btn', '.popup_calc');
    tabs('.glazing_block', '.glazing_content', '.glazing_slider', 'active', true);
    tabs('.no_click', '.decoration_content > div > div', '.decoration_slider', 'after_click', false);
    tabs('.balcon_icons_img', '.big_img img', '.balcon_icons', 'do_image_more', false, 'inline');
    forms('form', modalState);
    timer('#timer', '2021-06-11');
    bigImg();
});