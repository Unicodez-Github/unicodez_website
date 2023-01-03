export const validate_phone = (str) => {
    let phoneNum = str.replace(/[^\d]/g, '');
    if (phoneNum.length > 9 && phoneNum.length < 11) {
        if (Number(str) == NaN) {
            return false;
        }
        return true;
    } else {
        return false;
    }
}

export const validate_email = (str) => {
    return String(str)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

export const emptyStr = (form, phoneNumber) => {
    const { from_name, from_email, from_message } = form;
    if (from_name == '' || from_email == '' || phoneNumber == undefined || from_message == '') {
        return false;
    }
    return true;
}
