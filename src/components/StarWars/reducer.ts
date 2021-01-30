import {
  StateType,
  Actions,
  ActionType,
  CharacterType,
  CharacterDetailsType,
} from "./types";

export const INIT_STATE: StateType = {
  bLoading: false,
  arrResults: [],
  objSelectedHero: {},
  strError: "",
};

/**
 * @description reducer function
 * @param {Object} objlState state
 * @param {Object} objAction action
 * @returns {Object} new state
 */
export const reducer = (
  objlState: StateType,
  objAction: ActionType
): StateType => {
  switch (objAction.type) {
    case Actions.FETCH_START:
      return {
        ...objlState,
        bLoading: true,
      };

    case Actions.FETCH_CHARACTERS_SUCCESS:
      return {
        ...objlState,
        bLoading: false,
        strError: "",
        arrResults: objAction.payload as CharacterType[],
      };

    case Actions.FETCH_BY_ID_SUCCESS:
      return {
        ...objlState,
        bLoading: false,
        strError: "",
        objSelectedHero: objAction.payload as CharacterDetailsType,
      };

    case Actions.FETCH_ERROR:
      return {
        ...objlState,
        bLoading: false,
        strError: objAction.payload as string,
      };

    default:
      return objlState;
  }
};
