class TablazatSor{
    #adat = {};
    constructor(adat, szuloElem,index) {
      this.#adat = adat;
      this.tablaElem = szuloElem;
      
      this.#sor();
      this.index=index
      this.sorElem = this.tablaElem.children("tbody").children("tr:last-child");
      this.pipa = this.sorElem.children("td").children(".kesz");
      this.megse = this.sorElem.children("td").children(".megse");
      this.torol = this.sorElem.children("td").children(".torol");
      this.megse.hide()
      //console.log(this.pipa)
      this.pipa.on("click",()=>{
          //console.log(this)
          this.sorElem.css("background-color","lightgreen")
          this.megse.show()
          this.pipa.hide()
          this.#esemenyTrigger("kesz")
      })
      
      this.torol.on("click",()=>{
         // console.log(this)
          this.sorElem.remove();
          this.#esemenyTrigger("torles")
          
      })
      
      this.megse.on("click",()=>{
          this.sorElem.css("background-color","rgb(245, 246, 246)")
          //console.log(this)
          this.megse.hide()
          this.pipa.show()
          this.#esemenyTrigger("megse")
      })
    }
    #sor() {
      let txt = "";
      txt+="<tbody>"
      txt += "<tr>";
      for (const key in this.#adat) {
        const element = this.#adat[key];
        txt += `<td>${element}</td>`;
      }
      txt += `<td><span  class="torol" >🗑️</span>
      <span   class="kesz">✅</span> 
      <span   class="megse" >❌</span> </td>`;
      txt += `</tr>`;
      txt+="</tbody>"
  
      this.tablaElem.append(txt);
    }
    #esemenyTrigger(esemenynev){
      const esemenyem = new CustomEvent(esemenynev,{detail:this.index})
      window.dispatchEvent(esemenyem)
    }
}
export default TablazatSor