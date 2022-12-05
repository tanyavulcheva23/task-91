import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
      alert("💣");
    });

    this.emit(Application.events.READY);
    this._beat = new Beat()
  }

_create(){
    

}

}


export default class Beat extens EventEmitter{
    constructor(){
        super();

    }
     Beat.events.BIT
}
