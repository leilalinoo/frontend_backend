
import NumberUrlapElem from "./NumberUrlapElem.js";
import TextUrlapElem from "./TextUrlapElem.js";

class UrlapView {
  #leiro;
  #urlapElemList = [];
  #valid = true
  #urlapAdatok = {}
  constructor(szulElem, leiro) {
    this.szuElem = szulElem;
    this.#leiro = leiro;
    this.szuElem.append("<form>");
    this.formElem = this.szuElem.children("form");
    console.log(this.formElem);
    this.#urlapLetrehoz();
    this.SubmitElem = $("#submit");
    this.SubmitElem.on("click", (event) => {
      event.preventDefault();
      this.#valid=true
        this.#urlapElemList.forEach((elem)=>{
         
          this.#valid= this.#valid && elem.valid 
          console.log(this.#valid)
          
        })
        if (this.#valid) {
          this.#urlapElemList.forEach((elem)=>{
            let ertek = elem.ertek
            let kulcs = elem.key
            this.#urlapAdatok[kulcs]=ertek
            console.log(this.#urlapAdatok) 
          })
          console.log("valid az urlap")

        }else{
          console.log("nem valid az urlap")
        }
        this.#esemenyTrigger("katt")
      
    });
  }
  
  #urlapLetrehoz() {
    let txt = "";

    for (const key in this.#leiro) {
      switch (this.#leiro[key].type) {
        case "text":
          this.#urlapElemList.push(
            new TextUrlapElem(key, this.#leiro[key], this.formElem)
          );
          break;
        case "number":
          this.#urlapElemList.push(
            new NumberUrlapElem(key, this.#leiro[key], this.formElem));
          break;
       
        default:
        // code block
      }
    }
    txt = `<input type="submit" id = "submit" value="ok" >`;
    this.formElem.append(txt);
  }
  #esemenyTrigger(esemenynev){
    const esemenyem = new CustomEvent(esemenynev,{detail:this})
    window.dispatchEvent(esemenyem)
  }
}
export default UrlapView;