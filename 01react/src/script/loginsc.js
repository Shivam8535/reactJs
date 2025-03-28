import { useEffect } from 'react';

const LoginSR = () => {
    useEffect(() => {
        const inputs = document.querySelectorAll('input');

        inputs.forEach((input, index) => {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    if (input.value.trim() === '') {
                        input.required = true;
                        input.focus();
                    }
                    else {
                        e.preventDefault();
                        const nextInput = inputs[index + 1];
                        if (nextInput) {
                            nextInput.focus();
                        }
                    }
                }
            });
        });
        const user = document.getElementById('user');
        const pass = document.getElementById('pass');
        const label = document.querySelectorAll('label');

        // Events for user
        user.addEventListener('focus', userFn);
        user.addEventListener('mouseover', userFn);
        user.addEventListener('focusout', userFn1);
        user.addEventListener('mouseout', userfn2);
        // Events for password
        pass.addEventListener('focus', passfn);
        pass.addEventListener('mouseover', passfn);
        pass.addEventListener('focusout', passfn1);
        pass.addEventListener('mouseout', passfn2);

        // Functions
        function userFn() {
            label[0].classList.add('label2');
        }
        function userFn1() {
            if (user.value === '') {
                label[0].classList.add('label');
                label[0].classList.remove('label2');
            }
        }
        function passfn() {
            label[1].classList.add('label2');
        }
        function passfn1() {
            if (pass.value === '') {
                label[1].classList.add('label');
                label[1].classList.remove('label2');
            }
        }
        function userfn2() {
            if (document.activeElement === user) {
                userFn();
            } else {
                userFn1();
            }
        }
        function passfn2() {
            if (document.activeElement === pass) {
                passfn();
            } else {
                passfn1();
            }
        }

        return () => {
            user.addEventListener('focus', userFn);
            user.addEventListener('mouseover', userFn);
            user.addEventListener('focusout', userFn1);
            user.addEventListener('mouseout', userfn2);
            //                                      //
            pass.addEventListener('focus', passfn);
            pass.addEventListener('mouseover', passfn);
            pass.addEventListener('focusout', passfn1);
            pass.addEventListener('mouseout', passfn2);
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