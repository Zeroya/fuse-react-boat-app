import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useLocation } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import DemoContent from "@fuse/core/DemoContent";

const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-header": {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.divider,
  },
  "& .FusePageSimple-toolbar": {},
  "& .FusePageSimple-content": {},
  "& .FusePageSimple-sidebarHeader": {},
  "& .FusePageSimple-sidebarContent": {},
}));

function ExamplePage(props) {
  const { t } = useTranslation("examplePage");

  const { pathname } = useLocation();
  const pathSegments = pathname.split("/");
  const pageName = pathSegments[pathSegments.length - 1];

  const formattedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  const lastDigit = parseInt(pageName.match(/\d$/)[0], 10);

  let displayText = "";
  for (let i = 0; i < formattedPageName.length; i++) {
    const char = formattedPageName.charAt(i);
    if (i > 0 && char === char.toUpperCase()) {
      displayText += " ";
    }
    displayText += char;
  }

  return (
    <Root
      header={
        <div className="p-24">
          {/* <h4>{t("TITLE")}</h4> */}
          <h4>{displayText}</h4>
        </div>
      }
      content={
        <div className="p-24">
          <h4>Content</h4>
          <br />
          {/* <DemoContent /> */}
          <div style={{ display: "flex", flexDirection: "row", gap: 25, flexWrap: "wrap" }}>
            {[...Array(lastDigit * 4)].map((_, i, arr) => (
              <div key={i} style={{ marginBottom: "20px" }}>
                {arr.length < 10 ? (
                  <Stack spacing={1}>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={60} />
                    <Skeleton variant="rounded" width={210} height={60} />
                  </Stack>
                ) : (
                  <Stack>
                    <Skeleton width={1200} height={25} />
                    <Skeleton animation="wave" width={1200} height={50} />
                    <Skeleton animation={false} width={1200} height={72} />
                  </Stack>
                )}
              </div>
            ))}
          </div>
        </div>
      }
      scroll="content"
    />
  );
}

export default ExamplePage;
