import AdatModel from "../Model/AdatModel.js";
import AdatView from "../View/AdatView.js";
import HibaView from "../View/HibaView.js";
import UrlapView from "../View/Urlap/UrlapView.js";
import DataService from "../Model/DataService.js";
const ALAPVEGPONT = "http://localhost:8000/api/writers";
class Controller {
  constructor() {
    this.dataservice = new DataService();

    this.dataservice.getAxiosData(ALAPVEGPONT, this.adatokMegj, this.hibaMegj);
     this.dataservice.postAxiosData(ALAPVEGPONT, {
      nev: "azt hiszem feladom",
      szul: 2022,
    });
   /*this.dataservice.putAxiosData(ALAPVEGPONT, {
      id: 5,
      nev: "joey",
      szul: 1111,
    });*/

    

    this.adatleiro = new AdatModel();
    console.log("wwwwwwwwwwwwwwwwwww",this.adatleiro.leiro);

    this.UrlapView = new UrlapView($(".urlap"), this.adatleiro.leiro);
    $(window).on("katt", (event) => {
      console.log(event.detail);
    });
    $(window).on("torles", (event) => {
      console.log(event.detail.index);
    //  this.dataservice.deleteAxiosData(ALAPVEGPONT, event.detail.index)
    });
    $(window).on("megse", (event) => {
      console.log(event.detail);
    });
    $(window).on("kesz", (event) => {
      console.log(event.detail);
    });
  }
  adatokMegj(lista) {
    // console.log(lista)
    //console.log(leiro);
    new AdatView(lista, $(".lista"), /*this.adatleiro.leiro*/);
  }
  hibaMegj(error) {
    console.log(error);
    new HibaView(error, $(".lista"));
  }
}
export default Controller;
