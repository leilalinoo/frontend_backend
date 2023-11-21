class NumberUrlapElem {
    #key;
    #elemLeiro;
    #valid = false;
    #ertek = ""
    constructor(key, elemLeiro, szulElem) {
      this.#key = key;
      this.#elemLeiro = elemLeiro;
      this.formElem = szulElem;
      this.#numberElem();
      console.log(key)
      this.InputElem = $(`#${this.#key}`);
     // console.log(this.InputElem);
      this.validElem = this.formElem
        .children("div:last-child")
        .children(".valid");
      this.invalidElem = this.formElem
        .children("div:last-child")
        .children(".invalid");
     // console.log(this.ValidElem);
     // console.log(this.InValidElem);
      this.InputElem.on("keyup", () => {
        this.#ertek = this.InputElem.val();
        if (this.#ertek >= this.#elemLeiro.min && this.#ertek  <= this.#elemLeiro.max) {
          this.#valid = true;
          this.validElem.removeClass("lathato");
          this.invalidElem.addClass("lathato");
        } else {
          this.#valid = false;
          this.invalidElem.removeClass("lathato");
          this.validElem.addClass("lathato");
        }
        /* let regmin = this.#elemLeiro.regex.min;
        let regmax = this.#elemLeiro.regex.max;
        if (regmin<= ertek <=regmax) {
          this.#valid = true;
          this.ValidElem.removeClass("lathato");
          this.InValidElem.addClass("lathato");
        } else {
          this.#valid=false
          this.ValidElem.addClass("lathato");
          this.InValidElem.removeClass("lathato"); 
        }*/
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
    #numberElem() {
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
              <div class="invalid lathato">${this.#elemLeiro.valid}</div> </div>`;
      this.formElem.append(txt);
    }
  }/* 
  min="${this.#elemLeiro.regex.min}"
              max="${this.#elemLeiro.regex.max}">   */
  export default NumberUrlapElem;