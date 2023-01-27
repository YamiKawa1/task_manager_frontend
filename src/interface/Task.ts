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
  id:number
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
