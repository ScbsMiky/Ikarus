class Listener {
  private events: { [key: string]: ((...args: any[ ]) => any)[ ] } = { };

  constructor( ) {

  };

  emit(name: string, ...args: any[ ]) {
    if(!this.events[name]) return;

    this.events[name].forEach((event) => event(...args));
  };

  on(name: string, callback: (...args: any[]) => any) {
    if(!this.events[name]) this.events[name] = [ ];
    
    this.events[name].push(callback);
    
    return { name, callback };
  };

  once(name: string, callback: (...args: any[]) => any) {
    let listener = (...args: any[ ]) => {
      callback(...args);

      this.removeListener(name, listener);

      // @ts-ignore
      listener = undefined;
    };

    return this.on(name, listener);
  };

  removeListener(name: string, callback: ( ) => any) {
    if(!this.events[name]) return -1;

    const index = this.events[name].indexOf(callback);

    if(index >= 0) {
      this.events[name].splice(index, 1);
    };

    return index;
  };
};

export default Listener;