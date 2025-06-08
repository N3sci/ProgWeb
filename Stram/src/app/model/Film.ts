export enum genere {
    FPS="FPS",Sandbox="SandBox",MMORPG="MMORPG",MOBA="MOBA",ACTIONRPG="ActionRPG",Racing="Racing",Sport="Sport",PlatForm="Platform",Survival="Survival",Strategy="Strategy"
}

export interface film {
  id: number;
  titolo: string;
  descrizione: string;
  genere: genere;
  durata: number;
  anno: number;
  valutazione: number;
  trailer: string;
  casaP: string;
}
