import { ADD_LIST, DELETE_LIST, COMPLETE_LIST,EDIT_LIST} from "./constant";

export function addList(payload) {
  return { type: ADD_LIST, payload };
}
export function completeList(payload) {
  return { type: COMPLETE_LIST, payload };
}
export function deleteList(payload) {
  return { type: DELETE_LIST, payload };
}
export function editList(payload, index) {
  return { type: EDIT_LIST, payload, index };
}


