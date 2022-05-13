export default interface FishingEvent {
  id: string,
  nom: string,
  type: string,
  peche?: string,
  startdate: Date,
  enddate?: Date,
  idorganisateur: string,
  natureorganisateur: string,
  description?: string,
  contact?: string,
  idlieux?: string,
  nombremanche: number,
  nombreplace?: number,
  urlpic?: string,
  typecompetition?: string,
  estouvert: boolean,
  idmedia?: string
}