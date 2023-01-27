export interface TaskObject {
  id: string;
  title?: string;
  information?: string;
  task_date?: string;
  complexity?: string;
  done?: boolean;
  archived?: boolean;
}

export interface TaskEdit {
  title?: string;
  information?: string;
  task_date?: string;
  complexity?: string;
}

export interface StateInfoObject {
  id:string
  setId:any
  title:string 
  setTitle:any
  info:string
  setInfo:any
  date:string
  setDate:any
  complexity:string
  setComplexity:any
  edit:boolean
  setEdit:any
}

export interface GlobalObject {
  id?:string
  title?:string 
  info?:string
  date?:string
  complexity?:string
  edit?:boolean
  show?:boolean
}

