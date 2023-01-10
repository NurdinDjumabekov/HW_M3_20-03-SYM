const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");
const regExp = /^\+7\(6\d{2}\)\d{3}-\d{2}-\d{2}$/;
button.addEventListener("click", () => {
  if (regExp.test(input.value)) {
    result.innerHTML = "Вы ввели верный номер";
    result.style.color = "green";
  } else {
    result.innerHTML = "Вы ввели неверный номер";
    result.style.color = "red";
  }
});

///////////////////////////////////////////////////////

const input_2 = document.querySelector("#input_2");
const button_2 = document.querySelector("#btn_2");
const result_2 = document.querySelector("#result_2");
const regExp_2 = /^\d{14}$/;
const regExpMan = /^1\d{13}$/;
const regExpWoman = /^2\d{13}$/;
button_2.addEventListener("click", () => {
  if (regExp_2.test(input_2.value)) {
    if (regExpMan.test(input_2.value)) {
      result_2.innerHTML = "Вы ввели верный ИНН , и он женский";
      result_2.style.color = "green";
    } else if (regExpWoman.test(input_2.value)) {
      result_2.innerHTML = "Вы ввели верный ИНН , и он мужской";
      result_2.style.color = "green";
    } else {
      result_2.innerHTML = "Вы ввели неверный ИНН";
      result_2.style.color = "red";
    }
  } else {
    result_2.innerHTML = "Вы ввели неверный ИНН";
    result_2.style.color = "red";
  }
});

//////////////////////////////////////////////////////////////

const input_3 = document.querySelector("#input_3");
const button_3 = document.querySelector("#btn_3");
const result_3 = document.querySelector("#result_3");
const regExp_3 = /^\d{2}\.\d{2}\.\d{4}$/;
button_3.addEventListener("click", () => {
  if (regExp_3.test(input_3.value)) {
    result_3.innerHTML = "Спасибо, что заполнили дату своего рождения";
    result_3.style.color = "green";
  } else {
    result_3.innerHTML = "Вы ввели неверную дату";
    result_3.style.color = "red";
  }
});

///////////////////////////////////////////////////////////////////

const people = {
  Nurdin: {
    age: 20,
    parent: {
      Zulay: {
        age: 55,
        parent: {
          Amir: {
            age: 80,
            parent: {
              Aisha: {
                age: 100,
              },
            },
          },
        },
      },
      Duishen: {
        age: 68,
        parent: {
          Asan: {
            age: 80,
          },
        },
      },
    },
  },
  Ruslan: {
    age: 20,
    parent: {
      Mahhabat: {
        age: 45,
        parent: {
          Gulbara: {
            age: 70,
          },
        },
      },
      Nurlan: {
        age: 50,
      },
    },
  },
};
const personSearch = (param) => {
  for (const key in param.parent) {
    personSearch(param.parent[key]);
    console.log(key, "--- parents");
  }
};

for (const i in people) {
  personSearch(people[i]);
}
