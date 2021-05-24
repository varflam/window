import {numberValidation} from './inputValidation';
import modal from './modal';


const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'), 
          windowHeight = document.querySelectorAll('#height'), 
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox'),
          calcBtn = document.querySelector('.popup_calc_button'),
          profileBtn = document.querySelector('.popup_calc_profile_button'),
          message = document.querySelectorAll('.status');

    numberValidation('#width');
    numberValidation('#height');

    function bindActionToElems (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
            });
        });
    }


    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

    const showMessage = () => {
        message.forEach(item => {
            item.textContent = 'Пожалуйста, введите недостающие данные';
        });
    };

    const removeMessage = () => {
        message.forEach(item => {
            item.textContent = '';
        });
    };

    calcBtn.addEventListener('click', () => {
        if (!state.form || !state.height|| !state.width) {
            showMessage();
        } else {
            modal('.popup_calc_button', '.popup_calc_profile', false);
            removeMessage();
        }
    });

    profileBtn.addEventListener('click', () => {
        if (!state.type || !state.profile) {
            showMessage();
        } else {
            modal('.popup_calc_profile_button', '.popup_calc_end', false);
            removeMessage();
        }
    });
};

export default changeModalState;

// const changeModalState = (state) => {
//     const windowFrom = document.querySelectorAll('.balcon_icons_img'),
//           windowHeight = document.querySelector('#height'),
//           windowWidth = document.querySelector('#width'),
//           windowViewType = document.querySelector('#view_type'),
//           windowProfile = document.querySelectorAll('.checkbox'),
//           calcBtns = document.querySelectorAll('.popup_calc_content button');

//     const changeState = (stateType, newState) => {
//         state[stateType] = newState;
//         if (!newState) {
            
//         }
//     };

//     numberValidation('#height');
//     numberValidation('#width');

//     calcBtns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             changeState('width', windowWidth.value);
//             changeState('height', windowHeight.value);
//             changeState('view type', windowViewType.value);
//             windowProfile.forEach((input, i) => {
//                 if (i === 0) {
//                     changeState('profile', 'Холодное');
//                 } else {
//                     changeState('profile', 'Тёплое');
//                 }
//             });
//         });
//     });

//     windowFrom.forEach((item, i) => {
//         item.addEventListener('click', () => {
//             changeState('form', i);
//         });
//     });

//     windowProfile.forEach((item, i) => {
//         item.addEventListener('change', () => {
//             if (i === 0) {
//                 windowProfile[1].checked = false;
//             } else if (i === 1) {
//                 windowProfile[0].checked = false;
//             }
//         });
//     });
// };

// export default changeModalState;