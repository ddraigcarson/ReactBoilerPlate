import { degreesToRads } from "../../utils/math";
import { RADIUS } from "../../constants/radial";

export const selectRadialMenu = (state, ownProps) => {
  const displayItems = ownProps.items.map(
    createDisplayItem(ownProps.items.length, ownProps.labelField)
  );

  return {
    items: displayItems,
    open: state.radial.open,
  };
};

const createDisplayItem = (totalNoOfItems, labelField) => {
  return (item, index, array) => {
    const totalNoOfItems = array.length;
    const radPositionOfItem = degreesToRads(360 * index / totalNoOfItems);
    const xPosition = RADIUS * Math.sin(radPositionOfItem);
    const yPosition = RADIUS * Math.cos(radPositionOfItem);

    return {
      item,
      label: item[labelField],
      xPosition,
      yPosition,
      index,
    };
  }
}
