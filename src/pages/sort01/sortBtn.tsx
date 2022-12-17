import { MouseEventHandler } from "react";
import { FaCaretDown } from "react-icons/fa";
import { OrederIcons } from "./style";

type SortOrder = "ascn" | "desc";
type SortKeys = keyof any;

export function SortButton({
  sortOrder,
  columnKey,
  sortKey,
  onClick,
}: {
  sortOrder: SortOrder;
  columnKey: SortKeys;
  sortKey: SortKeys;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <OrederIcons
      onClick={onClick}
      className={`${
        sortKey === columnKey && sortOrder === "desc"
          ? "sort-button sort-reverse"
          : "sort-button"
      }`}
    >
      <FaCaretDown />
    </OrederIcons>
  );
}
