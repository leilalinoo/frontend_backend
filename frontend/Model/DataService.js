class DataService {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/";
  }
  getAxiosData(url, callback, hibaCallback) {
    console.log(url);
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log("Valasz objektum", response);
        console.log("adatok", response.data);
        console.log("statusz", response.status);
        console.log("Statusz szoveg", response.statusText);
        console.log("Valasz fejlec", response.headers);
        console.log("Valasz config", response.config);
        callback(response.data.nevek);
      })
      .catch(function (error) {
        // handle error

        hibaCallback(error);
      })
      .finally(function () {
        // always executed
        console.log("finally");
      });

    /*         let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/path/cors.php", true); // Az URL-t módosítsd a cors.php fájl helyére
    xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Kezeld a választ itt
    console.log(xhr.responseText);
  }
};
xhr.send(); */
  }
  postAxiosData(url, data) {
    axios
      .post(url, data)
      /* headers:{
                    "X-CSRF-TOKEN":response.headers["x-csrf-token"]
                } */

      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("post hiba", error);
      });
  }

  putAxiosData(url, data) {
    console.log("PUUUUUUUUUUUT::::::", data);
    console.log(`${url}/${data.id}`);
    axios
      .put(`${url}/${data.id}`, data)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("put hiba", error);
      });
  }

  deleteAxiosData(url, id) {
    console.log(`DELEEEEEEEEEEEEEETE :::::::::::::::::${url}/${id}`);
    axios
      .delete(`${url}/${id}`)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("delete hiba", error);
      });
  }
}

export default DataService;
