import { useEffect } from 'react';

const LoginSR = () => {
    useEffect(() => {
        const user = document.getElementById('user');
        const pass = document.getElementById('pass');
        const label = document.querySelectorAll('label');

        // Events for user
        user.addEventListener('focus', a);
        user.addEventListener('mouseover', a);
        user.addEventListener('focusout', b);
        user.addEventListener('mouseout', e);
        // Events for password
        pass.addEventListener('focus', c);
        pass.addEventListener('mouseover', c);
        pass.addEventListener('focusout', d);
        pass.addEventListener('mouseout', f);

        // Functions
        function a() {
            label[0].classList.add('label2');
        }
        function b() {
            if (user.value === '') {
                label[0].classList.add('label');
                label[0].classList.remove('label2');
            }
        }
        function c() {
            label[1].classList.add('label2');
        }
        function d() {
            if (pass.value === '') {
                label[1].classList.add('label');
                label[1].classList.remove('label2');
            }
        }
        function e() {
            if (user.focus() === true) {
                a();
            }
        }
        function f() {
            if (pass.focus() === true) {
                c();
            }
        }

        return () => {
            user.addEventListener('focus', a);
            user.addEventListener('mouseover', a);
            user.addEventListener('focusout', b);
            user.addEventListener('mouseout', e);
            pass.addEventListener('focus', c);
            pass.addEventListener('mouseover', c);
            pass.addEventListener('focusout', d);
            pass.addEventListener('mouseout', f);
        };
    }, []);
}

export default LoginSR;  

// let user = document.getElementById('user');
// let pass = document.getElementById('pass');
// let label = document.querySelectorAll('label');

// // Events for user
// user.addEventListener('focus', a);
// user.addEventListener('mouseover', a);
// user.addEventListener('focusout', b);
// user.addEventListener('mouseout', e);
// // Events for password
// pass.addEventListener('focus', c);
// pass.addEventListener('mouseover', c);
// pass.addEventListener('focusout', d);
// pass.addEventListener('mouseout', f);

// // Functions
// function a() {
//     label[0].classList.add('label2');
// }
// function b() {
//     if (user.value === '') {
//         label[0].classList.add('label');
//         label[0].classList.remove('label2');
//     }
// }
// function c() {
//     label[1].classList.add('label2');
// }
// function d() {
//     if (pass.value === '') {
//         label[1].classList.add('label');
//         label[1].classList.remove('label2');
//     }
// }

// function e() {
//     if(user.focus() === true) {
//         a();
//     }
// }

// function f() {
//     if(pass.focus() === true) {
//         c();
//     }
// }