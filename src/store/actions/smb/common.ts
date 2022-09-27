//common:{
//     setSelectedMonthYear({ selectedMonth, selectedYear })
//   }

import {
  SetSelectedMonthYear,
  SET_SELECTED_MONTH_YEAR,
} from "../../types/smb/common";

export const setSelectedMonthYear = (payload): SetSelectedMonthYear => ({
  type: SET_SELECTED_MONTH_YEAR,
  payload,
});
