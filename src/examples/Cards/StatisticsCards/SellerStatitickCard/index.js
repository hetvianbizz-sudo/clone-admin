// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import { Button } from "@material-ui/core";

function ComplexStatisticsCard({ color, title, count, percentage, icon, price, quantity, storage, packaging_size, packaging_type, name, grade, hsn_code, packaging_s, packaging_t, store }) {
  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
        <MDBox
          variant="gradient"
          // bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          <img src="/f1.svg" alt="F1 Icon" style={{ width: "100%", height: "100%" }} />
        </MDBox>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {title}
          </MDTypography>
          <MDTypography variant="h4">{count}</MDTypography>
        </MDBox>
      </MDBox>
      <Divider />
      <MDBox pb={2} px={2}>
        {name && (
          <>
            <MDBox display="flex" gap="5px" alignItems="center" mb={1} >
              <MDTypography variant="p" fontSize="14px" color="text">
                Mol Weight:
              </MDTypography>
              <MDTypography variant="h6" color="text">
                {name}
              </MDTypography>
            </MDBox>
          </>
        )}
        {storage && (
          <>
            <MDBox display="flex" gap="5px" alignItems="center" mb={1} >
              <MDTypography variant="p" fontSize="14px" color="text">
                CAS Number:
              </MDTypography>
              <MDTypography variant="h6" color="text">
                {storage}
              </MDTypography>
            </MDBox>
          </>
        )}
        {grade && (
          <>
            <MDBox display="flex" gap="5px" alignItems="center" mb={1} >
              <MDTypography variant="p" fontSize="14px" color="text">
                Grade:
              </MDTypography>
              <MDTypography variant="h6" color="text">
                {grade}
              </MDTypography>
            </MDBox>
          </>
        )}
        {hsn_code && (
          <>
            <MDBox display="flex" gap="5px" alignItems="center" mb={1} >
              <MDTypography variant="p" fontSize="14px" color="text">
                HSN Code:
              </MDTypography>
              <MDTypography variant="h6" color="text">
                {hsn_code}
              </MDTypography>
            </MDBox>
          </>
        )}
        {price && (
          <>
            <MDBox display="flex" gap="5px" alignItems="center" mb={1} >
              <MDTypography variant="p" fontSize="14px" color="text">
                Sub Category:
              </MDTypography>
              <MDTypography variant="h6" color="text">
                {price}
              </MDTypography>
            </MDBox>
          </>
        )}
        {quantity && (
          <>
            <MDBox display="flex" gap="5px" alignItems="center" mb={1} >
              <MDTypography variant="p" fontSize="14px" color="text">
                Quantity:
              </MDTypography>
              <MDTypography variant="h6" color="text">
                {quantity}
              </MDTypography>
            </MDBox>
          </>
        )}
        {packaging_size && (
          <>
            <MDBox display="flex" gap="5px" alignItems="center" mb={1} >
              <MDTypography variant="p" fontSize="14px" color="text">
              Appearance:
              </MDTypography>
              <MDTypography variant="h6" color="text">
                {packaging_size}
              </MDTypography>
            </MDBox>
          </>
        )}
        {store && (
          <>
            <MDBox display="flex" gap="5px" alignItems="center" mb={1} >
              <MDTypography variant="p" fontSize="14px" color="text">
              Appearance:
              </MDTypography>
              <MDTypography variant="h6" color="text">
                {store}
              </MDTypography>
            </MDBox>
          </>
        )}
        {packaging_type && (
          <>
            <MDBox display="flex" gap="5px" alignItems="center" mb={1} >
              <MDTypography variant="p" fontSize="14px" color="text">
                Uses:
              </MDTypography>
              <MDTypography variant="h6" color="text">
                {packaging_type}
              </MDTypography>
            </MDBox>
          </>
        )}
        {packaging_t && (
          <>
            <MDBox display="flex" gap="5px" alignItems="center" mb={1} >
              <MDTypography variant="p" fontSize="14px" color="text">
                Packaging Type:
              </MDTypography>
              <MDTypography variant="h6" color="text">
                {packaging_t}
              </MDTypography>
            </MDBox>
          </>
        )}
        {packaging_s && (
          <>
            <MDBox display="flex" gap="5px" alignItems="center" mb={1} >
              <MDTypography variant="p" fontSize="14px" color="text">
                Packaging Size:
              </MDTypography>
              <MDTypography variant="h6" color="text">
                {packaging_s}
              </MDTypography>
            </MDBox>
          </>
        )}
        {!price && !quantity && !storage && packaging_size && !packaging_type && !name && (
          <MDTypography component="p" variant="button" color="text" display="flex">
            <MDTypography
              component="span"
              variant="button"
              fontWeight="bold"
              color={percentage.color}
            >
              {percentage.amount}
            </MDTypography>
            &nbsp;{percentage.label}
          </MDTypography>
        )}
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ComplexStatisticsCard
ComplexStatisticsCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the ComplexStatisticsCard
ComplexStatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
  name: PropTypes.string, // Adding price prop type
  grade: PropTypes.string, // Adding grade prop type
  hsn_code: PropTypes.string, // Adding hsn code prop type
  price: PropTypes.string, // Adding price prop type
  quantity: PropTypes.string, // Adding quantity prop type
  storage: PropTypes.string, // Adding storage prop type
  packaging_size: PropTypes.string, // Adding packaging size prop type
  packaging_type: PropTypes.string, // Adding packaging type prop type
  packaging_s: PropTypes.string, // Adding packaging type prop type
  packaging_t: PropTypes.string, // Adding packaging type prop type
  store: PropTypes.string, // Adding packaging type prop type
};

export default ComplexStatisticsCard;
