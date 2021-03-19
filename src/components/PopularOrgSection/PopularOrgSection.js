import React, { useState } from "react";
import {
  PopularOrgSectionStyle,
  Heading,
  MainHeading,
  FilterPanel,
  FilterBox,
  OrgContent,
  InputSearch,
  CategoryButton,
  PopOverStyle,
  CheckBoxWrap,
  CardListing,
  OrganizationCardStyle,
} from "./PopularOrgSection.styles";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import Button from "../Button/Button";
import { withRouter } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "../../i18n";
import { useTranslation } from "react-i18next";

const PER_PAGE = 2;

const PopularOrgSection = (props) => {
  const { t } = useTranslation();
  const { popularSecProps } = props.PopularSecData;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchText, setSeachText] = React.useState("");
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * PER_PAGE;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const pageCount = Math.ceil(popularSecProps.CardListData.length / PER_PAGE);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const filteredList = t("ngo_page.pop_sec.card_list_data", {
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
    <PopularOrgSectionStyle>
      <div className="container">
        <Heading>
          <MainHeading>{t("ngo_page.pop_sec.title")}</MainHeading>
        </Heading>
        <FilterPanel>
          <FilterBox className={`${anchorEl ? "active" : ""}`}>
            <InputSearch
              placeholder="Search Organization"
              value={searchText}
              onChange={(e) => setSeachText(e.target.value)}
            />
            <CategoryButton aria-describedby="category" onClick={handleClick}>
              {t("ngo_page.pop_sec.cat_txt")}
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
                {t("ngo_page.pop_sec.cat_data", {
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
                              if (category.name === "all") {
                                setSelectedCategories(["all"]);
                              } else {
                                const filtered =
                                  selectedCategories.length === 1 &&
                                  selectedCategories.includes("all")
                                    ? selectedCategories.filter(
                                        (category) => category !== "all"
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
          <Button onClick={() => props.history.push("/register")}>
            {t("ngo_page.pop_sec.btn_txt")}
          </Button>
        </FilterPanel>
        <OrgContent>
          <CardListing>
            {filteredList.slice(offset, offset + PER_PAGE).map((data, i) => {
              return (
                <OrganizationCardStyle
                  key={i}
                  {...data}
                  src={popularSecProps.CardListData[i].src}
                />
              );
            })}
          </CardListing>
        </OrgContent>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </PopularOrgSectionStyle>
  );
};

export default withRouter(PopularOrgSection);
