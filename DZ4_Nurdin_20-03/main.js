const jsonInfo = () => {
  const info = new XMLHttpRequest(); // СОЗДАНИЕ ЗАПРОСА
  info.open("GET", "data.json"); // обьявление метода и пути запроса
  info.setRequestHeader("Content-type", "application/json"); // указание типа данных в запросах
  info.send(); //отправка запроса
  info.addEventListener("load", () => {
    const objJsonDate = JSON.parse(info.response);
    console.log(objJsonDate);
  });
};
jsonInfo();
