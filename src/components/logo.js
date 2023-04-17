/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "components/link";
import LogoSvg from "components/icons/logo";

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <span
        style={{
          color: "#56BBD0",
          fontWeight: "1000",
          fontSize: "1.5rem",
        }}
      >
        BCI
      </span>
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    maxWidth: [null, null, null, 185, null, "none"],
    svg: {
      height: "auto",
      width: [128, null, "100%"],
    },
  },
};
