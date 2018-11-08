import { WEEK } from "../../constants/calendar";

export const selectCalendar = (state, ownProps) => {
  return {
    headings: WEEK,
  };
}

const createMonthDisplay = () => {
  const firstOfSept = new Date();
  firstOfSept.setMonth(8);
  firstOfSept.setDate(1);

  const lastOfSept = new Date();
  lastOfSept.setMonth(9);
  lastOfSept.setDate(1);
  lastOfSept.setDate(lastOfSept.getDate()-1);

  const firstMonOfSet = new Date();
  firstMonOfSet.setMonth(8);
  firstMonOfSet.setDate(firstOfSept.getDate() - (firstOfSept.getDay()-1));
}
