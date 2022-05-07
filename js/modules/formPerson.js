import createElement from "./createElement.js";


const createFormPerson = (n) => {
    const form = createElement('form', {
        className: 'person'
    });

    const title = createElement('h2', {
        className: 'person__title',
        textContent: `Пассажир #${n + 1}`
    });

    const fieldName = createElement('div', {
        className: 'field',
    });

    const labelName = createElement('label', {
        className: 'field__label',
        textContent: 'ФИО',
        for: `name${n}`
    });

    const inputName = createElement('input', {
        className: 'field__input',
        name: 'name',
        id: `name${n}`,
        placeholder: 'Введите ваше ФИО',
        required: true,
        type: 'text'
    });

    fieldName.append(labelName, inputName);
    const button = createElement('button', {
        className: 'btn-confirm',
        type: 'submit',
        textContent: 'Подтвердить'
    })
    form.append(title, fieldName, button);

    return form;

}

const getFormPerson = (count) => {
    const forms = [];

    if (count > 6) count = 6;

    for (let i = 0; i < count; i++) {
        forms.push(createFormPerson(i));
    }

    return forms;
}

export default getFormPerson;
