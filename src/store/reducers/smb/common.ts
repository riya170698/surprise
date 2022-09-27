import {
  CommonState,
  SetSelectedMonthYear,
  SET_SELECTED_MONTH_YEAR,
} from "../../types/smb/common";

const initialCommonState: CommonState = {
  calander: {
    selectedMonth: "",
    selectedYear: "",
  },
};

export default function commonReducer(
  state = initialCommonState,
  action: SetSelectedMonthYear
) {
  switch (action.type) {
    case SET_SELECTED_MONTH_YEAR: {
      return {
        ...state,
        calender: action.payload,
      };
    }
  }
}
