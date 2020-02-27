import { Actions } from "../actions";
import * as actions from "./actions";

export interface Subject {
  name: string;
  children: {
    name: string;
    id: string;
    place: string;
  }[];
}

interface State {
  subjects: Subject[];
}

export const initialState = (injects?: State): State => ({
  subjects: [
    {
      name: "国語",
      children: [
        { name: "国語1", id: "00", place: "南館_国語_1" },
        { name: "国語2", id: "01", place: "南館_国語_23" },
        { name: "国語3", id: "02", place: "南館_国語_456" },
        { name: "国語4", id: "03", place: "" }
      ]
    },
    {
      name: "数学",
      children: [
        { name: "", id: "", place: "" },
        { name: "", id: "", place: "" },
        { name: "", id: "", place: "" }
      ]
    },
    {
      name: "英語",
      children: [{ name: "", id: "", place: "" }]
    },
    {
      name: "生物",
      children: [{ name: "", id: "", place: "" }]
    },
    {
      name: "一般教養",
      children: []
    }
  ],
  ...injects
});

export const reducer = (state = initialState(), action: Actions): State => {
  switch (action.type) {
    case "SUBJECT_ADD_CHILD":
      return {
        ...state
      };
    default:
      return state;
  }
};

export const actionCreator = {
  ...actions
};
