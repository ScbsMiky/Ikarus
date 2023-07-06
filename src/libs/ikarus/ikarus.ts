import Listener from "../listener";
import { Guild, RelationShip, User } from "./types";

interface Ikarus {
  token: string;
  connected: boolean;

  user: User;
  guilds: Guild[ ];
  relations: RelationShip[ ];
};

class Ikarus extends Listener {
  private socket: WebSocket = { } as WebSocket;

  private actions: (( ) => any)[ ] = [ ];

  constructor(token?: string) {
    super( );
    
    this.user = { } as User;
    this.guilds = [ ];
    this.relations = [ ];
    
    if(token) {
      this.connect(token);
    };

    this.on("READY", (data) => {
      this.user = data.user;
      this.guilds = data.guilds;
      this.relations = data.private_channels;

      this.connected = true;

      this.actions.forEach((action) => action( ));
    });
  };

  private tryRawToJson(raw: string) {
    try { return JSON.parse(raw); } catch (error) { return raw; };
  };
  
  private sendHeartbeat(beats: number) {
    return beats;
  };

  private awaitAction(callback: ( ) => any) {
    if(this.connected) return callback( );
    this.actions.push(callback);
  };

  connect(token?: string) {
    if(this.connected) return;

    if(token) {
      this.token = token;
    };

    this.socket = new WebSocket(`wss://gateway.discord.gg/?encoding=json&v=9`);

    this.socket.onmessage = ({ data }) => {
      const json = this.tryRawToJson(data);

      if(json.d.heartbeat) {
        this.sendHeartbeat(json.d.heartbeat);
      };

      this.emit("event", { name: json.t });
      this.emit(json.t, json.d, json.op);
    };

    this.socket.onopen = ( ) => {
      this.connected = true;

      this.send({
        op: 2,
        d: {
          token: this.token,
          properties: { os: "Windows", device: "", browser: "Chrome" },
        }
      });

      this.emit("connected");
    };
  };

  send(content: any): any {
    if(!this.connected) {
      return this.awaitAction(( ) => this.send(content));
    };
    
    this.socket.send(typeof content == "object" ? JSON.stringify(content) : content);
  };
};

export default Ikarus;