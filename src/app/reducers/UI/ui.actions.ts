import { Action } from '@ngrx/store';

export enum UIActionTypes {
  LoadUIs = '[UI] Load UIs',
  
  
}

export class LoadUIs implements Action {
  readonly type = UIActionTypes.LoadUIs;
}


export type UIActions = LoadUIs;
