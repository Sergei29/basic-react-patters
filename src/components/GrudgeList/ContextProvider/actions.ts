import { GrudgeType, ActionName, ActionType } from "../types/types";

export const actionAddNewGrudge = (objGrudge: GrudgeType): ActionType => ({
  type: ActionName.ADD_GRUDGE,
  payload: objGrudge,
});

export const actionDeleteGrudge = (strId: string): ActionType => ({
  type: ActionName.DELETE_GRUDGE,
  payload: strId,
});

export const actionUpdateGrudge = (
  objUpdatedGrudge: GrudgeType,
  strId: string
): ActionType => ({
  type: ActionName.UPDATE_GRUDGE,
  payload: { objUpdatedGrudge, strId },
});

export const actionToggleForgive = (strId: string): ActionType => ({
  type: ActionName.TOGGLE_FORGIVE_GRUDGE,
  payload: strId,
});

export const actionUndoTheLast = (): ActionType => ({
  type: ActionName.UNDO_THE_LAST,
});

export const actionRedoTheLast = (): ActionType => ({
  type: ActionName.REDO_THE_LAST,
});

export const actionResetState = (): ActionType => ({
  type: ActionName.RESET_STATE,
});
