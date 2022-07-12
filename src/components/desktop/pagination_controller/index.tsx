import React from "react";
import { ChevronSmallDownIcon } from "../../../resources/icons/CommonIcons";
import PaginationControllerStyle from "./style";

interface Iprops {
  currentPage: number;
  pagesLength: number;
  onClick: (state: number) => void;
}

const PaginationController = (props: Iprops) => {
  const { currentPage, pagesLength, onClick } = props;

  return (
    <PaginationControllerStyle>
      <button
        className={`control control_left ${
          currentPage === 1 ? "disabled" : ""
        }`}
        onClick={() => currentPage !== 1 && onClick(currentPage - 1)}
      >
        <ChevronSmallDownIcon color="static_red" />
      </button>
      <div className="numbers_cont">
        {currentPage < 5 ? (
          [1, 2, 3, 4, 5].map((item) => (
            <NumberButton
              key={item}
              numb={item}
              currentPage={currentPage}
              onClick={onClick}
            />
          ))
        ) : (
          <>
            <NumberButton
              numb={1}
              currentPage={currentPage}
              onClick={onClick}
            />
            <span className="dots">...</span>
          </>
        )}
        {currentPage >= 5
          ? currentPage <= pagesLength - 4
            ? [currentPage - 1, currentPage, currentPage + 1].map((item) => (
                <NumberButton
                  key={item}
                  numb={item}
                  currentPage={currentPage}
                  onClick={onClick}
                />
              ))
            : null
          : null}
        {currentPage > pagesLength - 4 ? (
          [
            pagesLength - 4,
            pagesLength - 3,
            pagesLength - 2,
            pagesLength - 1,
            pagesLength,
          ].map((item) => (
            <NumberButton
              key={item}
              numb={item}
              currentPage={currentPage}
              onClick={onClick}
            />
          ))
        ) : (
          <>
            <span className="dots">...</span>
            <NumberButton
              numb={pagesLength}
              currentPage={currentPage}
              onClick={onClick}
            />
          </>
        )}
      </div>
      <button
        className={`control control_right ${
          currentPage === pagesLength ? "disabled" : ""
        }`}
        onClick={() => currentPage !== pagesLength && onClick(currentPage + 1)}
      >
        <ChevronSmallDownIcon color="static_red" />
      </button>
    </PaginationControllerStyle>
  );
};

interface NumberButtonProps {
  numb: number;
  currentPage: number;
  onClick: (numb: number) => void;
}

const NumberButton = (props: NumberButtonProps) => {
  const { numb, currentPage, onClick } = props;
  return (
    <button
      className="number_button"
      onClick={() => currentPage !== numb && onClick(numb)}
    >
      {numb}
      {numb === currentPage && <span />}
    </button>
  );
};

export default PaginationController;
