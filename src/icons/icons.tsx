import AutoFinance from "./AutoFinance";
import ChatIcon from "./ChatIcon";
import CheckmarkIcon from "./CheckmarkIcon";
import DebtReconciliation from "./DebtReconciliation";
import HomeLoanIcon from "./HomeLoanIcon";
import PropertyDevelopment from "./PropertyDevelopment";
import PropertyInsurance from "./PropertyInsurance";
import RefinanceIcon from "./RefinanceIcon";
import SearchIcon from "./SearchIcon";
import SelfEmployedIcon from "./SelfEmployedIcon";
import SuperFundIcon from "./SuperFundIcon";

export interface IconStyleProps {
  width?: string;
  height?: string;
  color?: string;
}

export interface IconStyle {
  width?: string;
  height?: string;
  color?: string;
}

const getIcon = (
  iconName: string,
  width?: string,
  height?: string,
  color?: string
) => {
  const style: IconStyle = {};

  if (width) {
    style.width = width;
  }

  if (height) {
    style.height = height;
  }

  if (color) {
    style.color = color;
  }

  switch (iconName) {
    case "chat-icon": {
      return (
        <ChatIcon
          width={style.width}
          height={style.height}
          color={style.color}
        />
      );
    }

    case "search-icon": {
      return (
        <SearchIcon
          width={style.width}
          height={style.height}
          color={style.color}
        />
      );
    }

    case "checkmark-icon": {
      return (
        <CheckmarkIcon
          width={style.width}
          height={style.height}
          color={style.color}
        />
      );
    }

    case "homeloan-icon": {
      return (
        <HomeLoanIcon
          width={style.width}
          height={style.height}
          color={style.color}
        />
      );
    }

    case "refinance-icon": {
      return (
        <RefinanceIcon
          width={style.width}
          height={style.height}
          color={style.color}
        />
      );
    }

    case "superfund-icon": {
      return (
        <SuperFundIcon
          width={style.width}
          height={style.height}
          color={style.color}
        />
      );
    }

    case "auto-finance-icon": {
      return (
        <AutoFinance
          width={style.width}
          height={style.height}
          color={style.color}
        />
      );
    }

    case "debt-recon-icon": {
      return (
        <DebtReconciliation
          width={style.width}
          height={style.height}
          color={style.color}
        />
      );
    }

    case "property-dev-icon": {
      return (
        <PropertyDevelopment
          width={style.width}
          height={style.height}
          color={style.color}
        />
      );
    }

    case "property-insurance-icon": {
      return (
        <PropertyInsurance
          width={style.width}
          height={style.height}
          color={style.color}
        />
      );
    }

    case "self-employed-icon": {
      return (
        <SelfEmployedIcon
          width={style.width}
          height={style.height}
          color={style.color}
        />
      );
    }

    default:
      return null;
  }
};

export default getIcon;
