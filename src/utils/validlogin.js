const validlogin = data => {
  let isValidname = true;
  let isValidpass = true;
  let err = {
    name: null,
    pass: null,
  };
  const nameval = /^([a-zA-Z]{3,15}$)/;
  if (!data.name) {
    err.name = 'Enter UserName ';
    isValidname = false;
  } else if (!nameval.test(data.name)) {
    err.name = 'Enter Correct Name';
    isValidname = false;
  } else {
    err.name = null;
  }

  const pass_val = /^[a-zA-Z0-9!@#$%^&*]{1,16}$/;
  if (!data.pass) {
    err.pass = 'Ener Password';
    isValidpass = false;
  } else if (!pass_val.test(data.pass)) {
    err.pass = 'Enter Correct Password';
    isValidpass = false;
  } else {
    err.pass = null;
  }

  return {err: err, valid: isValidname && isValidpass};
};

export default validlogin;
