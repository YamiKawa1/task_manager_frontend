export interface TaskObject {
  id: number;
  title?: string;
  information?: string;
  task_date?: Date;
  complexity?: string;
  done: boolean;
  archived: boolean;
  created_at?: Date;
  updated_at?: Date;
}
