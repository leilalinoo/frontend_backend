class TextUrlapElem {
    #key;
    #elemLeiro = {};
    #valid = false;
    #ertek={};
    constructor(key, elemLeiro, szulElem) {
      this.#key = key;
      this.#elemLeiro = elemLeiro;
      this.formElem = szulElem;
      this.#textElem();
      this.InputElem = $(`#${this.#key}`);
     // console.log(this.InputElem);
      this.ValidElem = this.formElem
        .children("div:last-child")
        .children(".valid");
      this.InValidElem = this.formElem
        .children("div:last-child")
        .children(".invalid");
    // console.log(this.ValidElem);
     // console.log(this.InValidElem);
      this.InputElem.on("keyup", () => {
        this.#ertek = this.InputElem.val();
        let reg = this.#elemLeiro.regex;
        let regReg = new RegExp(reg);
       // console.log(regReg.test(this.#ertek));
        if (regReg.test(this.#ertek)) {
          this.#valid=true
          this.ValidElem.removeClass("lathato");
          this.InValidElem.addClass("lathato");
        }else{
          this.#valid=false
        this.ValidElem.addClass("lathato");
        this.InValidElem.removeClass("lathato");}
      });
    }
    get valid(){
  
      return this.#valid
    }
    get ertek(){
      return this.#ertek;
    }
    get key(){
      return this.#key
    }
    #textElem() {
      let txt = "";
      txt += `<div class="mb-3 mt-3">
          <label for="${this.#key}" class="form-label">${
        this.#elemLeiro.megj
      }</label>
          <input type="${this.#elemLeiro.type}" 
          class="form-control" id="${this.#key}" 
          placeholder="${this.#elemLeiro.placeholder}" 
          name="${this.#key}"
          value="${this.#elemLeiro.value}">  
          <div class="valid lathato">OK</div>
          <div class="invalid lathato">${this.#elemLeiro.valid}</div>
          </div>`;
      this.formElem.append(txt);
    }
  }
  export default TextUrlapElem;