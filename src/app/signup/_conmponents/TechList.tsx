import { Tech } from "@/types/tech";
import { Grid } from "@mui/material";

type Props = {
  techs: Tech[]
}

export const TechsList = (props:Props) => {
  const { techs } = props
  return <Grid></Grid>;
};
