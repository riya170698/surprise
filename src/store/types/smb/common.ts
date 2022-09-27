// common:{
//     setSelectedMonthYear({ selectedMonth, selectedYear })
//   }

export const SET_SELECTED_MONTH_YEAR = "SET_SELECTED_MONTH_YEAR";

export type MonthYear = {
  selectedMonth: string;
  selectedYear: string;
};

export type SetSelectedMonthYear = {
  type: typeof SET_SELECTED_MONTH_YEAR;
  payload: MonthYear;
};

export type CommonState = {
  calander: {
    selectedMonth: string;
    selectedYear: string;
  };
};
