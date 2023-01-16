export interface TaskObject {
  id: number;
  title?: string;
  information?: string;
  task_date?: string;
  complexity?: string;
  done: boolean;
  archived: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface TaskCreate {
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
