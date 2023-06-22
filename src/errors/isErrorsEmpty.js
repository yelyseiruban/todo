export function isErrorsEmpty(instance) {
    for (const prop in instance) {
        if (instance.hasOwnProperty(prop) && instance[prop] !== null && instance[prop] !== undefined && instance[prop] !== '') {
            return false;
        }
    }
    return true;
}