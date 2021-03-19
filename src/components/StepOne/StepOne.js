import React from "react";
import {
  StepOneStyle,
  FilterPanel,
  FilterBox,
  WorkshopCount,
  StepFooter,
  StepContent,
  InputSearch,
  CategoryButton,
  PopOverStyle,
  CheckBoxWrap,
  CardListing,
  BrandCardStyle,
  StepContentWrap,
} from "./StepOne.styles";
import Button from "../Button/Button";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import "../../i18n";
import { useTranslation } from "react-i18next";

const StepOne = (props) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchText, setSeachText] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState([]);

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const filteredList = t("home.stepper_data.step_one.card_list", {
    returnObjects: true,
  })
    .filter(
      (cl) =>
        !selectedCategories.length ||
        selectedCategories.includes("all") ||
        selectedCategories.includes(cl.category)
    )
    .filter(
      (cl) => cl.name.toLowerCase().search(searchText.toLowerCase()) !== -1
    );

  return (
    <StepOneStyle>
      <FilterPanel>
        <FilterBox className={`${anchorEl ? "active" : ""}`}>
          <InputSearch
            placeholder={t("home.stepper_data.step_one.search_placeholder")}
            value={searchText}
            onChange={(e) => setSeachText(e.target.value)}
          />
          <CategoryButton aria-describedby="category" onClick={handleClick}>
            {t("home.stepper_data.step_one.category_btn")}
          </CategoryButton>
          <PopOverStyle
            id="category"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <CheckBoxWrap>
              {t("home.stepper_data.step_one.category_data", {
                returnObjects: true,
              }).map((category, i) => {
                return (
                  <FormControlLabel
                    key={i}
                    control={
                      <Checkbox
                        name={category.name}
                        checked={selectedCategories.includes(category.name)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            if (
                              category.name ===
                              t("home.stepper_data.step_one.category_data", {
                                returnObjects: true,
                              })[0].name
                            ) {
                              setSelectedCategories([
                                t("home.stepper_data.step_one.category_data", {
                                  returnObjects: true,
                                })[0].name,
                              ]);
                            } else {
                              const filtered =
                                selectedCategories.length === 1 &&
                                selectedCategories.includes(
                                  t(
                                    "home.stepper_data.step_one.category_data",
                                    {
                                      returnObjects: true,
                                    }
                                  )[0].name
                                )
                                  ? selectedCategories.filter(
                                      (category) =>
                                        category !==
                                        t(
                                          "home.stepper_data.step_one.category_data",
                                          {
                                            returnObjects: true,
                                          }
                                        )[0].name
                                    )
                                  : selectedCategories;
                              setSelectedCategories([
                                ...filtered,
                                category.name,
                              ]);
                            }
                          } else {
                            const filtered = selectedCategories.filter(
                              (c) => c !== category.name
                            );
                            setSelectedCategories([...filtered]);
                          }
                        }}
                      />
                    }
                    label={category.title}
                  />
                );
              })}
            </CheckBoxWrap>
          </PopOverStyle>
        </FilterBox>
        <WorkshopCount>
          {props.CardListData.length}{" "}
          {t("home.stepper_data.step_one.webshop_title")}
        </WorkshopCount>
      </FilterPanel>
      <StepContent>
        <StepContentWrap>
          <CardListing>
            {filteredList.map((data, i) => {
              return (
                <BrandCardStyle
                  className={`${activeIndex - 1 === i && "selected"}`}
                  handleSelect={() => handleSelect(i + 1)}
                  key={i}
                  {...data}
                  src={props.CardListData[i].src}
                />
              );
            })}
          </CardListing>
        </StepContentWrap>
      </StepContent>
      <StepFooter>
        <Button
          className={`${activeIndex ? "" : "disable"}`}
          onClick={props.handleNextClicked}
        >
          {t("home.stepper_data.next_step_btn")}
        </Button>
      </StepFooter>
    </StepOneStyle>
  );
};

export default StepOne;
