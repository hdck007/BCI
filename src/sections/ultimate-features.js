/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Feature from "components/cards/feature";

import icon1 from "assets/images/features/1.png";
import icon2 from "assets/images/features/2.png";
import icon3 from "assets/images/features/3.png";
import icon4 from "assets/images/features/4.png";
import icon5 from "assets/images/features/5.png";
import icon6 from "assets/images/features/6.png";

const data = [
  {
    id: 1,
    icon: icon5,
    path: "#!",
    title: "Web Design",
    description: `We create visually stunning and user-friendly websites that are optimized for speed, security, and mobile devices.`,
  },
  {
    id: 2,
    icon: icon6,
    path: "#!",
    title: "Digital Marketing",
    description: `Our digital marketing services are designed to help you attract, engage, and convert your target audience.`,
  },
  {
    id: 3,
    icon: icon3,
    path: "#!",
    title: "Payment Gateway Integration",
    description: `Our payment gateway integration service allows you to securely and easily process payments on your website.`,
  },
  {
    id: 4,
    icon: icon2,
    path: "#!",
    title: "B2B Services",
    description: `Our B2B services are designed to help you streamline your operations, generate leads, and grow your business.`,
  },
  {
    id: 5,
    icon: icon1,
    path: "#!",
    title: "Customer Support",
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 6,
    icon: icon6,
    path: "#!",
    title: "E-commerce:",
    description: `We can help you set up and optimize your e-commerce website to increase sales and revenue.`,
  },
];

const UltimateFeatures = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Ideal solutions for you"
          title="Our Services"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: "#F9FBFD",
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ["10px auto 0"],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: "grid",
    maxWidth: 1080,
    margin: "0 auto",
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      null,
      null,
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
