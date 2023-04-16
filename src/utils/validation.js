const validation = data => {
  let err = {
    name: null,
    email: null,
    phone: null,
    pass: null,
  };

  return new Promise((resolve, reject) => {
    let isValid = true;
    const nameval = /^([a-zA-Z]{3,15})/;
    if (!data.name) {
      err.name = 'Ener Name';
      isValid = false;
    } else if (!nameval.test(data.name)) {
      err.name = 'Ener Correct Name';
      isValid = false;
    } else {
      err.name = null;
    }
    const email_val =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (data.email == '' || data.email == null) {
      err.email = 'Ener Email';
      isValid = false;
    } else if (!email_val.test(data.email)) {
      err.email = 'Enter Correct E-mail';
      isValid = false;
    } else {
      err.email = null;
    }

    const number_val = /^(\+\d{1,3}[- ]?)?\d{10}$/; // /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (data.phone == '' || data.phone == null) {
      err.phone = 'Ener Phone';
      isValid = false;
    } else if (!number_val.test(data.phone)) {
      err.phone = 'Enter Correct Phone';
      isValid = false;
    } else {
      err.phone = null;
    }

    const pass_val = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (data.pass == '' || data.pass == null) {
      err.pass = 'Ener Password';
      isValid = false;
    } else if (!pass_val.test(data.pass)) {
      err.pass = 'Enter Correct Password';
      isValid = false;
    } else {
      err.pass = null;
    }

    if (!isValid) {
      resolve({status: 0, error: err});
    } else {
      resolve({status: 1, error: err});
    }
    if (!data) {
      reject('Enter Correct Data');
    }
  });
};
// const number_val = /^(\+\d{1,3}[- ]?)?\d{10}$/;
// if (!number_val.test(data.phone)) {
//   return false;
// } else {
//   return true;
// }

//export default {validate_string, validate_mail, validate_number};
export default validation;
