class HibaView {
  constructor(error, szuloElem) {
    this.szuloElem = szuloElem;
    szuloElem.html(error.message);
    console.log(error)
  }
}
export default HibaView;
