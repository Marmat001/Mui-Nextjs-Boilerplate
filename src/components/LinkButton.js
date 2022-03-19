import Link from "./Link";
import Button from "@mui/material/Button";

function LinkButton({ href, children, ...rest }) {
  return (
    <Button component={Link} href={href} {...rest} noLinkStyle>
      {children}
    </Button>
  );
}

export default LinkButton;
