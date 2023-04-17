/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from "theme-ui";
import SectionHeading from "components/section-heading";
import Accordion from "components/accordion/accordion";

const data = [
  {
    id: 1,
    title: `01. What services do you offer?`,
    contents: (
      <div>
        We offer web designing, digital marketing, and B2B services, all under
        one roof.
      </div>
    ),
  },
  {
    id: 2,
    title: `02. How do I get started?`,
    contents: (
      <div>
        You can contact us through our website or by phone to discuss your needs
        and get a quote.
      </div>
    ),
  },
  {
    id: 3,
    title: `03. Do you offer custom solutions?`,
    contents: (
      <div>
        Yes, we specialize in providing customized solutions to meet the unique
        needs of each of our clients.
      </div>
    ),
  },
  {
    id: 4,
    title: `04. How long does it take to design a website?`,
    contents: (
      <div>
        The timeline for website design can vary depending on the complexity of
        the project. We'll work with you to develop a timeline that meets your
        needs.
      </div>
    ),
  },
  {
    id: 5,
    title: `05. How do you ensure the security of my website and customer data?`,
    contents: (
      <div>
        We take website security and data protection seriously. We use
        industry-leading security measures and best practices to ensure that
        your website and customer data are safe and secure.
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 12, 17] }}
          slogan="Get your question answer"
          title="Frequently asked question"
        />

        <Accordion items={data} />
        <Box sx={styles.loadMore}>
          <Button variant="text">Still Question? Contact us</Button>
        </Box>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 6, 10, 14],
    pb: [12, null, null, null, 10, 22],
  },
  loadMore: {
    paddingTop: [3, null, null, 0],
    textAlign: "center",
    button: {
      backgroundColor: "#ECF2F7",
      color: "#738295",
      minHeight: 50,
      px: "22px",
      ":hover": {
        backgroundColor: "primary",
        color: "white",
      },
    },
  },
};
